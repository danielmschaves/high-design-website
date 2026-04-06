import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieBanner from "../components/ui/CookieBanner";

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
});
