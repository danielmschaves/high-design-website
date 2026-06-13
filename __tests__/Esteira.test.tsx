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
    expect(
      screen.getByRole("heading", { name: /da escolha do terreno/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/à entrega das chaves/i)).toBeInTheDocument();
  });

  it("renders all 7 service badges", () => {
    render(<Esteira />);
    expect(screen.getByText("TERRENO")).toBeInTheDocument();
    expect(screen.getByText("CONSTRUÇÃO")).toBeInTheDocument();
    expect(screen.getByText("PROJETO")).toBeInTheDocument();
    expect(screen.getByText("ORÇAMENTO")).toBeInTheDocument();
    expect(screen.getByText("GESTÃO")).toBeInTheDocument();
    expect(screen.getByText("IMÓVEL PRONTO")).toBeInTheDocument();
    expect(screen.getByText("REFORMA")).toBeInTheDocument();
  });

  it("renders the new service names", () => {
    render(<Esteira />);
    expect(screen.getByText(/consultoria de aquisição de terreno/i)).toBeInTheDocument();
    expect(screen.getByText(/projeto arquitetônico e engenharia/i)).toBeInTheDocument();
    expect(screen.getByText(/^gestão de obra$/i)).toBeInTheDocument();
    expect(screen.getByText(/projeto de reforma e transformação/i)).toBeInTheDocument();
  });

  it("renders step numbers 01–07", () => {
    render(<Esteira />);
    for (let i = 1; i <= 7; i++) {
      const els = screen.getAllByText(String(i).padStart(2, "0"));
      expect(els.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("first row is open by default and shows 'O que entregamos' (not the old 'O que resolvemos')", () => {
    render(<Esteira />);
    expect(screen.getByText(/o que entregamos/i)).toBeInTheDocument();
    expect(screen.queryByText(/o que resolvemos/i)).not.toBeInTheDocument();
  });

  it("shows the lead tagline of the open service", () => {
    render(<Esteira />);
    expect(screen.getByText(/avalie os riscos antes de comprar/i)).toBeInTheDocument();
  });

  it("CTA links to #contato", () => {
    render(<Esteira />);
    const cta = screen.getByRole("link", { name: /solicitar orçamento/i });
    expect(cta).toHaveAttribute("href", "#contato");
  });
});
