import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header Integration", () => {
  it("Toggles the navbar and backdrop when hamburger is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const navs = screen.getAllByRole("navigation");
    const mobileNav = navs[1]; 
    const hamburger = screen.getByRole("button", { name: /toggle-menu/i });

    expect(mobileNav.className).not.toContain("open");
    expect(hamburger.getAttribute("aria-expanded")).toBe("false");

    await user.click(hamburger);

    expect(hamburger.getAttribute("aria-expanded")).toBe("true");
  });

  it("closes the menu when the backdrop is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const hamburger = screen.getByRole("button", { name: /toggle-menu/i });

    await user.click(hamburger);
    expect(hamburger.getAttribute("aria-expanded")).toBe("true");

    const backdrop = screen.getByTestId("backdrop"); 
    await user.click(backdrop);

    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
  });
});
