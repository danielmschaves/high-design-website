import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WhatsApp from "../components/ui/WhatsApp";

describe("WhatsApp", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  });

  it("renders nothing when NEXT_PUBLIC_WHATSAPP_NUMBER is not set", () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const { container } = render(<WhatsApp />);
    expect(container.firstChild).toBeNull();
  });

  it("renders the WhatsApp link when number is set", () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = "5511999990000";
    render(<WhatsApp />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", expect.stringContaining("wa.me/5511999990000"));
  });

  it("opens link in a new tab", () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = "5511999990000";
    render(<WhatsApp />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("includes a pre-filled message in the WhatsApp URL", () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = "5511999990000";
    render(<WhatsApp />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toContain("text=");
  });
});
