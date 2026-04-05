import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Esteira from "../components/sections/Esteira";

describe("Esteira", () => {
  it("renders the section with id 'servicos'", () => {
    render(<Esteira />);
    expect(document.getElementById("servicos")).toBeInTheDocument();
  });

  it("renders the updated heading", () => {
    render(<Esteira />);
    expect(screen.getByRole("heading", { name: /da concepção/i })).toBeInTheDocument();
    expect(screen.getByText(/à entrega das chaves/i)).toBeInTheDocument();
  });

  it("renders all 4 service badges", () => {
    render(<Esteira />);
    expect(screen.getByText("TERRENO")).toBeInTheDocument();
    expect(screen.getByText("CONSTRUÇÃO")).toBeInTheDocument();
    expect(screen.getByText("PROJETO")).toBeInTheDocument();
    expect(screen.getByText("ORÇAMENTO")).toBeInTheDocument();
  });

  it("renders all 4 service names", () => {
    render(<Esteira />);
    expect(screen.getByText(/consultoria de aquisição de terreno/i)).toBeInTheDocument();
    expect(screen.getByText(/consultoria de construção/i)).toBeInTheDocument();
    expect(screen.getByText(/projeto de arquitetura/i)).toBeInTheDocument();
    expect(screen.getByText(/orçamento de obra/i)).toBeInTheDocument();
  });

  it("renders step numbers 01–04", () => {
    render(<Esteira />);
    for (let i = 1; i <= 4; i++) {
      expect(screen.getByText(String(i).padStart(2, "0"))).toBeInTheDocument();
    }
  });

  it("counter shows '4 serviços · Terreno → Chaves'", () => {
    render(<Esteira />);
    expect(screen.getByText(/4 serviços/i)).toBeInTheDocument();
  });

  it("first service is expanded by default and shows tagline", () => {
    render(<Esteira />);
    expect(screen.getByText(/avalie os riscos antes de assinar/i)).toBeInTheDocument();
  });

  it("first service expanded content shows 'O que resolvemos' and 'O que entregamos'", () => {
    render(<Esteira />);
    // Both section labels should be visible (first item is open)
    const resolemos = screen.getAllByText(/o que resolvemos/i);
    const entregamos = screen.getAllByText(/o que entregamos/i);
    expect(resolemos.length).toBeGreaterThanOrEqual(1);
    expect(entregamos.length).toBeGreaterThanOrEqual(1);
  });

  it("clicking a closed service expands it", () => {
    render(<Esteira />);
    const consultButton = screen.getByRole("button", { name: /consultoria de construção/i });
    fireEvent.click(consultButton);
    expect(screen.getByText(/descubra o que é possível construir/i)).toBeInTheDocument();
  });

  it("clicking the open service collapses it", () => {
    render(<Esteira />);
    const terrenoButton = screen.getByRole("button", { name: /consultoria de aquisição/i });
    fireEvent.click(terrenoButton);
    const content = terrenoButton.nextElementSibling as HTMLElement;
    expect(content.style.maxHeight).toBe("0");
  });

  it("sticky header has 'esteira-sticky' class for mobile override", () => {
    render(<Esteira />);
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
