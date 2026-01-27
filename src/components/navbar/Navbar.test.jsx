import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const mockLinks = [
  { path: "/", text: "Home" },
  { path: "/shop", text: "Shop" },
  { path: "/cart", text: "Cart" },
];

describe("Navbar component", () => {
  it("Renders links", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar links={mockLinks} isOpen={true} shouldAnimate={false} />
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("Applies active class to the current route", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={true} shouldAnimate={false} />
      </MemoryRouter>,
    );

    const shopLink = screen.getByText("Shop").closest("li");
    const homeLink = screen.getByText("Home").closest("li");

    expect(shopLink.className).toContain("active");
    expect(homeLink.className).not.toContain("active");
  });

  it("Applies correct animation classes", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={true} shouldAnimate={true} />
      </MemoryRouter>,
    );

    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain("open");
    expect(nav.className).not.toContain("removed");
    expect(nav.className).not.toContain("closed");

    rerender(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={false} shouldAnimate={true} />
      </MemoryRouter>,
    );

    expect(nav.className).toContain("closed");
    expect(nav.className).not.toContain("removed");
    expect(nav.className).not.toContain("open");

    rerender(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={false} shouldAnimate={false} />
      </MemoryRouter>,
    );

    expect(nav.className).toContain("removed");
    expect(nav.className).not.toContain("closed");
    expect(nav.className).not.toContain("open");
  });

  it("Sets aria-current on the active link", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={true} shouldAnimate={false} />
      </MemoryRouter>,
    );

    const shopLink = screen.getByRole("link", { name: /shop/i });
    const homeLink = screen.getByRole("link", { name: /home/i });

    expect(shopLink).toHaveAttribute("aria-current", "page");
    expect(homeLink).not.toHaveAttribute("aria-current");
  });

  it("Displays the correct cart count", () => {
    render(
      <MemoryRouter>
        <Navbar
          links={mockLinks}
          isOpen={true}
          shouldAnimate={false}
          cartLength={5}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
