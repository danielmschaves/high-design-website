import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../components/sections/Hero";

// framer-motion IntersectionObserver isn't available in jsdom
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("Hero", () => {
  it("renders the section with id 'hero'", () => {
    render(<Hero />);
    expect(document.getElementById("hero")).toBeInTheDocument();
  });

  it("renders the main tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/arquitetura que guia/i)
    ).toBeInTheDocument();
  });

  it("renders the secondary tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/transformamos histórias/i)
    ).toBeInTheDocument();
  });

  it("renders CTA link to #contato", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /inicie seu projeto/i });
    expect(cta).toHaveAttribute("href", "#contato");
  });

  it("renders CTA link to #servicos", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /conheça a esteira/i });
    expect(cta).toHaveAttribute("href", "#servicos");
  });

  it("renders the four method pillars", () => {
    render(<Hero />);
    // Pillar values use inline <strong>; match the highlighted phrase from each.
    expect(screen.getByText(/processo claro/i)).toBeInTheDocument();
    expect(screen.getByText(/^Rigor$/)).toBeInTheDocument();
    expect(screen.getByText(/para ser construído/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contato@highdesign\.arq\.br/i })).toBeInTheDocument();
  });
});
