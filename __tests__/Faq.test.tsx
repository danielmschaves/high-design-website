import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Faq from "../components/sections/Faq";
import { faqs } from "../lib/faq";

describe("Faq", () => {
  it("renders the chapter header", () => {
    render(<Faq />);
    expect(screen.getByText(/08 · Perguntas frequentes/i)).toBeInTheDocument();
  });

  it("renders every question from lib/faq", () => {
    render(<Faq />);
    for (const faq of faqs) {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    }
  });

  /**
   * The FAQPage schema asserts these answers exist on the page. If a closed
   * panel unmounted its answer, the markup would claim content that is not in
   * the DOM — so every answer must render regardless of open state.
   */
  it("keeps every answer in the DOM even while collapsed", () => {
    render(<Faq />);
    for (const faq of faqs) {
      expect(screen.getByText(faq.answer)).toBeInTheDocument();
    }
  });

  it("opens the first question by default", () => {
    render(<Faq />);
    const first = screen.getByRole("button", { name: new RegExp(faqs[0].question.slice(0, 30), "i") });
    expect(first).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles a question open and closed on click", async () => {
    const user = userEvent.setup();
    render(<Faq />);
    const second = screen.getByRole("button", {
      name: new RegExp(faqs[1].question.slice(0, 20), "i"),
    });

    expect(second).toHaveAttribute("aria-expanded", "false");
    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "false");
  });

  it("wires aria-controls to the matching panel id", () => {
    render(<Faq />);
    const button = screen.getByRole("button", {
      name: new RegExp(faqs[0].question.slice(0, 20), "i"),
    });
    const panelId = button.getAttribute("aria-controls");
    expect(panelId).toBeTruthy();
    expect(document.getElementById(panelId!)).toBeInTheDocument();
  });

  it("uses a definition list so questions and answers are paired", () => {
    const { container } = render(<Faq />);
    expect(container.querySelectorAll("dt")).toHaveLength(faqs.length);
    expect(container.querySelectorAll("dd")).toHaveLength(faqs.length);
  });
});
