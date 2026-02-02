import { describe, it, expect } from "vitest";
import { screen, render } from "../../../tests/test-utils.jsx";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Navbar from "./Navbar.jsx";

const linksMock = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/shop",
    text: "Shop",
  },
  {
    path: "/cart",
    text: "Cart",
  },
];

describe("navbar component", () => {
  it("displays the cart length correctly", () => {
    const toggleMenuMock = vi.fn();
    const { rerender } = render(
      <Navbar
        links={linksMock}
        isOpen={false}
        shouldAnimate={false}
        cartLength={1}
        toggleMenu={toggleMenuMock}
      />,
    );

    const span = screen.getByLabelText(/items in cart/i);
    expect(span.textContent).toBe("1");

    rerender(
      <Navbar
        links={linksMock}
        isOpen={false}
        shouldAnimate={false}
        cartLength={0}
        toggleMenu={toggleMenuMock}
      />,
    );

    expect(span).not.toBeInTheDocument();
  });
});
