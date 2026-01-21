import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HamburgerMenu from "./HamburgerMenu.jsx";

describe("Hambuguer menu button", () => {
  it("Renders", () => {
    render(<HamburgerMenu />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Calls setIsOpen and enableAnimation functions correctly", async () => {
    const setIsOpen = vi.fn();
    const enableAnimation = vi.fn();
    const user = userEvent.setup();
    render(<HamburgerMenu isOpen={false} setIsOpen={setIsOpen} enableAnimation={enableAnimation} />);
    const button = screen.getByRole("button");

    expect(setIsOpen).not.toHaveBeenCalled();
    expect(enableAnimation).not.toHaveBeenCalled();

    await user.click(button);

    expect(setIsOpen).toHaveBeenCalledTimes(1);
    expect(enableAnimation).toHaveBeenCalledTimes(1);
  });

  it("Updates aria-expanded attribute correctly", async () => {
    const setIsOpen = vi.fn();
    const enableAnimation = vi.fn();
    const user = userEvent.setup();
    const {rerender} = render(<HamburgerMenu isOpen={false} />);
    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-expanded", "false");

    rerender(<HamburgerMenu isOpen={true} />);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
