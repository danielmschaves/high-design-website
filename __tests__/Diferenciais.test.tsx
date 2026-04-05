import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Diferenciais from "../components/sections/Diferenciais";

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("Diferenciais", () => {
  it("renders the section with id 'diferenciais'", () => {
    render(<Diferenciais />);
    expect(document.getElementById("diferenciais")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<Diferenciais />);
    expect(screen.getByText(/o que nos torna/i)).toBeInTheDocument();
  });

  it("renders all 9 differential items numbered 01–09", () => {
    render(<Diferenciais />);
    for (let i = 1; i <= 9; i++) {
      expect(
        screen.getByText(String(i).padStart(2, "0"))
      ).toBeInTheDocument();
    }
  });
});
