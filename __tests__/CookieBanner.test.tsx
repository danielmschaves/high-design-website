import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieBanner from "../components/ui/CookieBanner";

// jsdom has no ResizeObserver; the banner uses it to publish its height.
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof ResizeObserver;

const STORAGE_KEY = "hd_cookie_consent";

describe("CookieBanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("is visible on first visit (no localStorage entry)", () => {
    render(<CookieBanner />);
    expect(screen.getByRole("region", { name: /aviso de privacidade/i })).toBeInTheDocument();
  });

  it("is hidden when consent is already stored", () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    const { container } = render(<CookieBanner />);
    expect(container.firstChild).toBeNull();
  });

  it("renders privacy policy link pointing to /privacidade", () => {
    render(<CookieBanner />);
    const link = screen.getByRole("link", { name: /política de privacidade/i });
    expect(link).toHaveAttribute("href", "/privacidade");
  });

  it("renders the accept button", () => {
    render(<CookieBanner />);
    expect(screen.getByRole("button", { name: /entendido/i })).toBeInTheDocument();
  });

  it("hides the banner and saves consent when 'Entendido' is clicked", () => {
    render(<CookieBanner />);
    fireEvent.click(screen.getByRole("button", { name: /entendido/i }));
    expect(screen.queryByRole("region", { name: /aviso de privacidade/i })).not.toBeInTheDocument();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("accepted");
  });

  it("publishes a floating-button offset while visible and clears it on dismiss", () => {
    const root = document.documentElement;
    render(<CookieBanner />);
    // Visible → offset is set (jsdom reports offsetHeight 0, so just the 16px gap).
    expect(root.style.getPropertyValue("--cookie-banner-offset")).toBe("16px");
    fireEvent.click(screen.getByRole("button", { name: /entendido/i }));
    expect(root.style.getPropertyValue("--cookie-banner-offset")).toBe("0px");
  });
});
