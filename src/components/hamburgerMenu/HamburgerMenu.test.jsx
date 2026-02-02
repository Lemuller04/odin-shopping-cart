import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HamburgerMenu from "./HamburgerMenu.jsx";

describe("Hamburger menu component", () => {
  it("Calls its functions correctly on click", async () => {
    const setIsOpen = vi.fn();
    const enableAnimation = vi.fn();
    const user = userEvent.setup();
    render(
      <HamburgerMenu
        isOpen={false}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );
    const button = screen.getByRole("button");

    expect(setIsOpen).not.toHaveBeenCalled();
    expect(enableAnimation).not.toHaveBeenCalled();

    await user.click(button);

    expect(setIsOpen).toHaveBeenCalledTimes(1);
    expect(enableAnimation).toHaveBeenCalledTimes(1);
  });

  it("Updates button aria attributes correctly", () => {
    const setIsOpen = vi.fn();
    const enableAnimation = vi.fn();
    const { rerender } = render(
      <HamburgerMenu
        isOpen={false}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );
    const button = screen.getByRole("button");

    expect(button).toHaveAccessibleName("Open main menu");
    expect(button).toHaveAttribute("aria-expanded", "false");

    rerender(
      <HamburgerMenu
        isOpen={true}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );

    expect(button).toHaveAccessibleName("Close main menu");
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
