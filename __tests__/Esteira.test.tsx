import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Esteira from "../components/sections/Esteira";

describe("Esteira", () => {
  it("renders the section with id 'servicos'", () => {
    render(<Esteira />);
    expect(document.getElementById("servicos")).toBeInTheDocument();
  });

  it("renders all 10 service steps", () => {
    render(<Esteira />);
    const siglas = ["LV", "EM", "EP", "EVF", "PL", "COMP", "PE", "PO", "OE", "EO"];
    siglas.forEach((s) => expect(screen.getByText(s)).toBeInTheDocument());
  });

  it("renders step numbers 01–10", () => {
    render(<Esteira />);
    for (let i = 1; i <= 10; i++) {
      expect(screen.getByText(String(i).padStart(2, "0"))).toBeInTheDocument();
    }
  });

  it("first step is expanded by default", () => {
    render(<Esteira />);
    // LV description should be visible (first step open by default)
    expect(screen.getByText(/fase inicial/i)).toBeInTheDocument();
  });

  it("clicking a closed step expands it", () => {
    render(<Esteira />);
    const emButton = screen.getByRole("button", { name: /estudo de massa/i });
    fireEvent.click(emButton);
    expect(screen.getByText(/análise das diretrizes municipais/i)).toBeInTheDocument();
  });

  it("clicking the open step collapses it", () => {
    render(<Esteira />);
    // First step is open; click it to close
    const lvButton = screen.getByRole("button", { name: /levantamento/i });
    fireEvent.click(lvButton);
    // After close the max-height should be 0 (style check)
    const content = lvButton.nextElementSibling as HTMLElement;
    expect(content.style.maxHeight).toBe("0");
  });

  it("sticky header has the 'esteira-sticky' class for mobile override", () => {
    render(<Esteira />);
    // The sticky header is the first child of the grid
    const grid = document.querySelector(".esteira-grid");
    const stickyHeader = grid?.firstElementChild as HTMLElement;
    expect(stickyHeader).toHaveClass("esteira-sticky");
  });

  it("CTA links to #contato", () => {
    render(<Esteira />);
    const cta = screen.getByRole("link", { name: /solicitar orçamento/i });
    expect(cta).toHaveAttribute("href", "#contato");
  });
});
