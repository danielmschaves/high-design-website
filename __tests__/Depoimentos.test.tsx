import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Depoimentos from "../components/sections/Depoimentos";

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("Depoimentos", () => {
  it("renders the section with id 'depoimentos'", () => {
    render(<Depoimentos />);
    expect(document.getElementById("depoimentos")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<Depoimentos />);
    expect(screen.getByRole("heading", { name: /o que nossos clientes/i })).toBeInTheDocument();
  });

  it("renders 3 testimonial cards by author name", () => {
    render(<Depoimentos />);
    expect(screen.getByText("Família Rodrigues")).toBeInTheDocument();
    expect(screen.getByText("Marcos & Ana Lima")).toBeInTheDocument();
    expect(screen.getByText("Família Costa")).toBeInTheDocument();
  });

  it("renders the placeholder disclaimer", () => {
    render(<Depoimentos />);
    expect(screen.getByText(/conteúdo ilustrativo/i)).toBeInTheDocument();
  });
});
