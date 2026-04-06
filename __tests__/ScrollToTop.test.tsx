import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ScrollToTop from "../components/ui/ScrollToTop";

// jsdom doesn't implement scrollTo — provide a spy
const scrollToSpy = jest.fn();
Object.defineProperty(window, "scrollTo", { value: scrollToSpy, writable: true });

describe("ScrollToTop", () => {
  beforeEach(() => {
    scrollToSpy.mockClear();
    Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
    Object.defineProperty(window, "innerHeight", { value: 800, writable: true, configurable: true });
  });

  it("is hidden on initial render (scrollY = 0)", () => {
    render(<ScrollToTop />);
    expect(screen.queryByRole("button", { name: /voltar ao topo/i })).not.toBeInTheDocument();
  });

  it("appears when scrollY exceeds one viewport height", () => {
    render(<ScrollToTop />);
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 900, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    expect(screen.getByRole("button", { name: /voltar ao topo/i })).toBeInTheDocument();
  });

  it("hides again when scrolling back above the threshold", () => {
    render(<ScrollToTop />);

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 900, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    expect(screen.getByRole("button", { name: /voltar ao topo/i })).toBeInTheDocument();

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 100, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    expect(screen.queryByRole("button", { name: /voltar ao topo/i })).not.toBeInTheDocument();
  });

  it("calls window.scrollTo({ top: 0, behavior: 'smooth' }) on click", () => {
    render(<ScrollToTop />);
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 900, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    fireEvent.click(screen.getByRole("button", { name: /voltar ao topo/i }));
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("is positioned above the WhatsApp button (z-index 190)", () => {
    render(<ScrollToTop />);
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 900, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    const btn = screen.getByRole("button", { name: /voltar ao topo/i });
    expect(btn.style.zIndex).toBe("190");
    expect(btn.style.position).toBe("fixed");
  });
});
