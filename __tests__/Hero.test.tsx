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
    const cta = screen.getByRole("link", { name: /ver serviços/i });
    expect(cta).toHaveAttribute("href", "#servicos");
  });

  it("renders the three method pillars", () => {
    render(<Hero />);
    // Match by the unique pillar label descriptions (not the num titles which appear elsewhere)
    expect(screen.getByText(/processo claro em cada etapa/i)).toBeInTheDocument();
    expect(screen.getByText(/rigor e responsabilidade projetual/i)).toBeInTheDocument();
    expect(screen.getByText(/todo projeto nasce para ser construído/i)).toBeInTheDocument();
  });
});
