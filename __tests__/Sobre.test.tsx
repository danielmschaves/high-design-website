import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sobre from "../components/sections/Sobre";

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("Sobre", () => {
  it("renders the section with id 'sobre'", () => {
    render(<Sobre />);
    expect(document.getElementById("sobre")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<Sobre />);
    expect(screen.getByText(/transformamos histórias/i)).toBeInTheDocument();
  });

  it("renders all four brand pillars", () => {
    render(<Sobre />);
    expect(screen.getByRole("heading", { name: "Funcional" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Elegante" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Atemporal" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Executável" })).toBeInTheDocument();
  });

  it("renders the 'Por que nascemos' origin block", () => {
    render(<Sobre />);
    expect(screen.getByText(/por que nascemos/i)).toBeInTheDocument();
    expect(screen.getByText(/informalidade/i)).toBeInTheDocument();
  });

  it("renders the central principle quote", () => {
    render(<Sobre />);
    expect(screen.getByText(/exequibilidade/i)).toBeInTheDocument();
  });
});
