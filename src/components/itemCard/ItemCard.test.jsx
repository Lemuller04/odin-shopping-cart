import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils";
import userEvent from "@testing-library/user-event";
import ItemCard from "./ItemCard.jsx";

const mockItem = {
  image: "#",
  description: "#",
  title: "#",
  rating: {
    rate: 1,
  },
  price: 1,
};

describe("Item card component", () => {
  it("Renders in horizontal mode when prop is passed", () => {
    render(<ItemCard item={mockItem} direction="horizontal" />);
    const listItem = screen.getByRole("listitem");
    expect(listItem.className).toContain("horizontal");
  });
});
