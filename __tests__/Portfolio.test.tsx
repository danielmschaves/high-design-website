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

  it("renders 15 portfolio images with descriptive alt text", () => {
    render(<Portfolio />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(15);
    // Alt text names the ambiente, its área, the segment and the service, so
    // it reads as a sentence rather than a pair of tags.
    expect(images[0]).toHaveAttribute(
      "alt",
      "Sala de Estar de 52 m² em projeto residencial da High Design Arquitetura — Projeto de Arquitetura"
    );
    expect(images[1]).toHaveAttribute(
      "alt",
      "Cozinha de 38 m² em projeto alto padrão da High Design Arquitetura — Projeto Executivo"
    );
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

  it("renders all four filter buttons", () => {
    render(<Portfolio />);
    expect(screen.getByRole("button", { name: /^todos$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^residencial$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^comercial$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^alto padrão$/i })).toBeInTheDocument();
  });

  it("filters images when a category is selected", () => {
    render(<Portfolio />);
    fireEvent.click(screen.getByRole("button", { name: /^alto padrão$/i }));
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toMatch(/alto padrão/i);
    });
  });
});
