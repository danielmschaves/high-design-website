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

  it("all 4 service taglines are rendered in the row headers", () => {
    render(<Esteira />);
    expect(screen.getByText(/avalie os riscos antes de adquirir/i)).toBeInTheDocument();
    expect(screen.getByText(/descubra o que é possível construir/i)).toBeInTheDocument();
    expect(screen.getByText(/do esboço ao manual completo/i)).toBeInTheDocument();
    expect(screen.getByText(/saiba exatamente quanto vai custar/i)).toBeInTheDocument();
  });

  it("first row is open by default and shows 'O que resolvemos' / 'O que entregamos'", () => {
    render(<Esteira />);
    expect(screen.getByText(/o que resolvemos/i)).toBeInTheDocument();
    expect(screen.getByText(/o que entregamos/i)).toBeInTheDocument();
  });

  it("CTA links to #contato", () => {
    render(<Esteira />);
    const cta = screen.getByRole("link", { name: /solicitar orçamento/i });
    expect(cta).toHaveAttribute("href", "#contato");
  });
});
