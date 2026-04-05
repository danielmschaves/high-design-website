import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contato from "../components/sections/Contato";

global.fetch = jest.fn();

describe("Contato", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    delete process.env.NEXT_PUBLIC_FORMSPREE_ID;
  });

  it("renders the section with id 'contato'", () => {
    render(<Contato />);
    expect(document.getElementById("contato")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<Contato />);
    // Heading is split across elements; role query computes accessible name from all descendants
    expect(screen.getByRole("heading", { name: /inicie sua/i })).toBeInTheDocument();
  });

  it("renders all form fields", () => {
    render(<Contato />);
    // Actual placeholder text from the component
    expect(screen.getByPlaceholderText("Seu nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("seu@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("(11) 9 0000-0000")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/conte-nos sobre seu projeto/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Contato />);
    expect(
      screen.getByRole("button", { name: /enviar mensagem/i })
    ).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(<Contato />);
    expect(screen.getByText(/contato@highdesign.arq.br/i)).toBeInTheDocument();
  });

  it("updates form fields on user input", () => {
    render(<Contato />);
    const nomeInput = screen.getByPlaceholderText("Seu nome") as HTMLInputElement;
    fireEvent.change(nomeInput, { target: { value: "Maria Silva" } });
    expect(nomeInput.value).toBe("Maria Silva");
  });

  it("shows success message after submission without Formspree ID (dev fallback)", async () => {
    // NEXT_PUBLIC_FORMSPREE_ID is already deleted in beforeEach — component fakes success immediately
    const { container } = render(<Contato />);
    const form = container.querySelector("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/recebemos sua mensagem/i)).toBeInTheDocument();
    });
  });
});
