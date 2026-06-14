import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/sections/Navbar";

describe("Navbar", () => {
  it("renders the logo image", () => {
    render(<Navbar />);
    const logo = screen.getByAltText(/high design/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /serviços/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /portfólio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /blog/i })).toBeInTheDocument();
  });

  it("does not render a standalone 'Contato' nav link", () => {
    render(<Navbar />);
    // The contact section is reached via the "Iniciar projeto" CTA, not a nav link.
    expect(screen.queryByRole("link", { name: /^contato$/i })).not.toBeInTheDocument();
  });

  it("renders the CTA button linking to #contato", () => {
    render(<Navbar />);
    const ctas = screen.getAllByRole("link", { name: /iniciar projeto/i });
    expect(ctas.some((link) => link.getAttribute("href") === "#contato")).toBe(true);
  });

  it("toggles mobile menu open and closed", () => {
    render(<Navbar />);
    // Mobile menu trigger button (hamburger)
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    // After click the menu links should appear in the mobile panel
    const mobileLinks = screen.getAllByRole("link", { name: /sobre/i });
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1);

    fireEvent.click(menuButton);
  });
});
