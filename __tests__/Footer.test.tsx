import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/sections/Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    expect(document.querySelector("footer")).toBeInTheDocument();
  });

  it("renders the logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/high design/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(screen.getByText(/arquitetura que guia/i)).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /^sobre$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^serviços$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^portfólio$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contato$/i })).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(<Footer />);
    expect(screen.getByText(/contato@highdesign.arq.br/i)).toBeInTheDocument();
  });

  it("renders the contact person name", () => {
    render(<Footer />);
    expect(screen.getByText(/emanoella goulart/i)).toBeInTheDocument();
  });

  it("renders the copyright notice with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
