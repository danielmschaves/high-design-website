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
    expect(screen.getByText(/feito para famílias/i)).toBeInTheDocument();
  });

  it("renders the chapter eyebrow", () => {
    render(<ParaQuemE />);
    expect(screen.getByText(/03 · Para quem é/i)).toBeInTheDocument();
  });

  it("renders checklist items", () => {
    render(<ParaQuemE />);
    expect(screen.getByText(/valoriza orientação técnica/i)).toBeInTheDocument();
    expect(screen.getByText(/busca um projeto funcional/i)).toBeInTheDocument();
  });
});
