import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const mockLinks = [
  { path: "/", text: "Home" },
  { path: "/shop", text: "Shop" },
  { path: "/cart", text: "Cart" }
];

describe("Navbar component", () => {
  it("Renders links correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar links={mockLinks} isOpen={true} shouldAnimate={false} />
      </MemoryRouter>
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
      </MemoryRouter>
    );

    const shopLink = screen.getByText("Shop").closest("li");

    expect(shopLink.className).toContain("active");
  });

  it("Applies correct animation classes", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={true} shouldAnimate={true} />
      </MemoryRouter>
    );

    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain("open");

    rerender(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar links={mockLinks} isOpen={false} shouldAnimate={true} />
      </MemoryRouter>
    );

    expect(nav.className).toContain("closed");
  });
});
