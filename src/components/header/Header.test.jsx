import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header Integration", () => {
  it("Toggles the navbar and backdrop when hamburger is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const nav = screen.getByRole("navigation");
    const hamburger = screen.getByRole("button");

    expect(nav.className).not.toContain("open");
    expect(hamburger.getAttribute("aria-expanded")).toBe("false");

    await user.click(hamburger);

    expect(hamburger.getAttribute("aria-expanded")).toBe("true");
  });

  it("closes the menu when the backdrop is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const hamburger = screen.getByRole("button");

    await user.click(hamburger);
    expect(hamburger.getAttribute("aria-expanded")).toBe("true");

    const backdrop = screen.getByTestId("backdrop");
    await user.click(backdrop);

    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
  });

  it("does not apply animation classes on mount", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");

    expect(nav.className).not.toContain("closed");
  });
});
