import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Portfolio from "../components/sections/Portfolio";

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("Portfolio", () => {
  it("renders the section with id 'portfolio'", () => {
    render(<Portfolio />);
    expect(document.getElementById("portfolio")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<Portfolio />);
    // Heading is split across elements; use role query which computes full accessible name
    expect(screen.getByRole("heading", { name: /projetos que transformam/i })).toBeInTheDocument();
  });

  it("renders 15 portfolio images with enriched alt text", () => {
    render(<Portfolio />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(15);
    // Verify enriched alt format: "Ambiente · Tipo"
    expect(images[0]).toHaveAttribute("alt", "Sala de Estar · Residencial");
    expect(images[1]).toHaveAttribute("alt", "Cozinha · Alto Padrão");
  });

  it("renders overlay metadata for each project", () => {
    render(<Portfolio />);
    // Ambiente names
    expect(screen.getByText("Sala de Estar")).toBeInTheDocument();
    expect(screen.getByText("Cozinha")).toBeInTheDocument();
    // Type + area composite
    expect(screen.getByText(/residencial · 52 m²/i)).toBeInTheDocument();
    // Service tag
    const serviceTags = screen.getAllByText(/projeto de arquitetura/i);
    expect(serviceTags.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the CTA link", () => {
    render(<Portfolio />);
    const cta = screen.getByRole("link", { name: /ver todos os projetos/i });
    expect(cta).toBeInTheDocument();
  });
});
