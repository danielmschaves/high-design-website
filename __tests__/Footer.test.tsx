import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/sections/Footer";

describe("Footer", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_INSTAGRAM_URL;
    delete process.env.NEXT_PUBLIC_LINKEDIN_URL;
  });
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

  it("hides social links when env vars are not set", () => {
    render(<Footer />);
    expect(screen.queryByRole("link", { name: /instagram/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /linkedin/i })).not.toBeInTheDocument();
  });

  it("shows Instagram link when NEXT_PUBLIC_INSTAGRAM_URL is set", () => {
    process.env.NEXT_PUBLIC_INSTAGRAM_URL = "https://instagram.com/highdesign.arq";
    render(<Footer />);
    const link = screen.getByRole("link", { name: /instagram/i });
    expect(link).toHaveAttribute("href", "https://instagram.com/highdesign.arq");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows LinkedIn link when NEXT_PUBLIC_LINKEDIN_URL is set", () => {
    process.env.NEXT_PUBLIC_LINKEDIN_URL = "https://linkedin.com/company/highdesign";
    render(<Footer />);
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute("href", "https://linkedin.com/company/highdesign");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows both social links when both env vars are set", () => {
    process.env.NEXT_PUBLIC_INSTAGRAM_URL = "https://instagram.com/highdesign.arq";
    process.env.NEXT_PUBLIC_LINKEDIN_URL  = "https://linkedin.com/company/highdesign";
    render(<Footer />);
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByText("Redes Sociais")).toBeInTheDocument();
  });
});
