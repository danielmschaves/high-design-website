import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ParaQuemE from "../components/sections/ParaQuemE";

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("ParaQuemE", () => {
  it("renders the section with id 'para-quem'", () => {
    render(<ParaQuemE />);
    expect(document.getElementById("para-quem")).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<ParaQuemE />);
    expect(screen.getByRole("heading", { name: /feito para quem/i })).toBeInTheDocument();
  });

  it("renders the chapter eyebrow", () => {
    render(<ParaQuemE />);
    expect(screen.getByText(/03 · Para quem existimos/i)).toBeInTheDocument();
  });

  it("renders the three client profiles", () => {
    render(<ParaQuemE />);
    expect(screen.getByText("Cliente residencial")).toBeInTheDocument();
    expect(screen.getByText("Cliente comercial")).toBeInTheDocument();
    expect(screen.getByText("Investidor imobiliário")).toBeInTheDocument();
  });
});
