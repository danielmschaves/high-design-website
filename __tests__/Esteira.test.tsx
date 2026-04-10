import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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
      // Each step number appears twice: visible counter + decorative background
      const els = screen.getAllByText(String(i).padStart(2, "0"));
      expect(els.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("counter shows '4 serviços · Terreno → Chaves'", () => {
    render(<Esteira />);
    expect(screen.getByText(/4 serviços/i)).toBeInTheDocument();
  });

  it("all 4 service taglines are visible simultaneously", () => {
    render(<Esteira />);
    expect(screen.getByText(/avalie os riscos antes de adquirir/i)).toBeInTheDocument();
    expect(screen.getByText(/descubra o que é possível construir/i)).toBeInTheDocument();
    expect(screen.getByText(/do esboço ao manual completo/i)).toBeInTheDocument();
    expect(screen.getByText(/saiba exatamente quanto vai custar/i)).toBeInTheDocument();
  });

  it("all cards show 'O que resolvemos' and 'O que entregamos' labels", () => {
    render(<Esteira />);
    const resolemos = screen.getAllByText(/o que resolvemos/i);
    const entregamos = screen.getAllByText(/o que entregamos/i);
    expect(resolemos).toHaveLength(4);
    expect(entregamos).toHaveLength(4);
  });

  it("CTA links to #contato", () => {
    render(<Esteira />);
    const cta = screen.getByRole("link", { name: /solicitar orçamento/i });
    expect(cta).toHaveAttribute("href", "#contato");
  });
});
