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

  it("Updates svg element classes correctly", () => {
    const setIsOpen = vi.fn();
    const enableAnimation = vi.fn();
    const { rerender } = render(
      <HamburgerMenu
        isOpen={false}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );
    const svg = screen.getByTestId("icon");

    expect(svg).not.toHaveClass("rotate");

    rerender(
      <HamburgerMenu
        isOpen={true}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );

    expect(svg).toHaveClass(/rotate/);
  });

  it("Updates path elements classes correctly", () => {
    const setIsOpen = vi.fn();
    const enableAnimation = vi.fn();
    const { rerender } = render(
      <HamburgerMenu
        isOpen={false}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );
    const path1 = screen.getByTestId("path1");
    const path2 = screen.getByTestId("path2");

    expect(path1).toHaveClass("transparent");
    expect(path2).toHaveClass("opaque");

    rerender(
      <HamburgerMenu
        isOpen={true}
        setIsOpen={setIsOpen}
        enableAnimation={enableAnimation}
      />,
    );

    expect(path1).toHaveClass("opaque");
    expect(path2).toHaveClass("transparent");
  });
});
