import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Processo from "../components/sections/Processo";

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

describe("Processo", () => {
  it("renders the section with id 'como-funciona'", () => {
    render(<Processo />);
    expect(document.getElementById("como-funciona")).toBeInTheDocument();
  });

  it("renders the numbered chapter header", () => {
    render(<Processo />);
    expect(screen.getByText(/05 · Como funciona/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /cada etapa prepara/i })).toBeInTheDocument();
  });

  it("renders the three progressive advantages", () => {
    render(<Processo />);
    expect(screen.getByText(/documentação acumulada/i)).toBeInTheDocument();
    expect(screen.getByText(/alinhamento progressivo/i)).toBeInTheDocument();
    expect(screen.getByText(/decisões mais seguras/i)).toBeInTheDocument();
  });

  it("no longer renders the 12-step technical pipeline", () => {
    render(<Processo />);
    expect(screen.queryByText("Levantamento")).not.toBeInTheDocument();
    expect(screen.queryByText("Gestão da Obra")).not.toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
