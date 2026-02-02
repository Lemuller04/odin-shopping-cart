import { render, screen } from "../../../tests/test-utils.jsx";
import { describe, it, expect } from "vitest";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import ItemCard from "./ItemCard.jsx";

const mockItem = {
  title: "Fjallraven Backpack",
  image: "https://image.com/test.jpg",
  price: 109.95,
  rating: { rate: 3.9 },
};

describe("ItemCard Component", () => {
  it("displays the correct product information", () => {
    render(<ItemCard item={mockItem} />);

    expect(screen.getByText("Fjallraven Backpack")).toBeInTheDocument();

    expect(screen.getByText("$109.95")).toBeInTheDocument();

    const img = screen.getByAltText("Fjallraven Backpack");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", mockItem.image);

    expect(
      screen.getByLabelText(/rated 3.9 out of 5 stars/i),
    ).toBeInTheDocument();
  });
});
