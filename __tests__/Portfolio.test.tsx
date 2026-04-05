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

  it("renders 15 portfolio images", () => {
    render(<Portfolio />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(15);
  });

  it("renders the CTA link", () => {
    render(<Portfolio />);
    const cta = screen.getByRole("link", { name: /ver todos os projetos/i });
    expect(cta).toBeInTheDocument();
  });
});
