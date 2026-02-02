import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils.jsx";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShopItemActionsBar from "./ShopItemActionsBar.jsx";

const mockItem = {
  title: "Fjallraven Backpack",
  image: "https://image.com/test.jpg",
  price: 109.95,
  rating: { rate: 3.9 },
};

describe("ShopItemActionsBar Component", () => {
  it("displays the correct product amount", async () => {
    const user = userEvent.setup();
    const addToCartMock = vi.fn();

    render(<ShopItemActionsBar addToCart={addToCartMock} item={mockItem} />);

    const input = screen.getByLabelText(/^quantity$/i);

    // Default
    expect(input).toHaveValue("1");

    // Won't decrement past 1
    await user.click(
      screen.getByRole("button", { name: /decrease quantity/i }),
    );
    expect(input).toHaveValue("1");

    // Increments correctly
    await user.click(
      screen.getByRole("button", { name: /increase quantity/i }),
    );
    expect(input).toHaveValue("2");

    // Decrements correctly
    await user.click(
      screen.getByRole("button", { name: /decrease quantity/i }),
    );
    expect(input).toHaveValue("1");
  });

  it("updates amount when user types a valid number", async () => {
    const user = userEvent.setup();
    const addToCartMock = vi.fn();

    render(<ShopItemActionsBar addToCart={addToCartMock} item={mockItem} />);

    const input = screen.getByRole("textbox");

    // Clear the default '1' and type '5'
    await user.clear(input);
    await user.type(input, "5");
    expect(input).toHaveValue("5");

    // Test the "onBlur" logic (invalid input)
    await user.clear(input);
    await user.type(input, "abc");

    await user.tab();

    expect(input).toHaveValue("1");
  });

  it("calls addToCart with correct quantity when button is clicked", async () => {
    const user = userEvent.setup();
    const addToCartMock = vi.fn();

    render(<ShopItemActionsBar addToCart={addToCartMock} item={mockItem} />);

    const incrementBtn = screen.getByRole("button", {
      name: /increase quantity/i,
    });
    const submitBtn = screen.getByRole("button", { name: /add to cart/i });

    await user.click(incrementBtn);
    await user.click(submitBtn);

    expect(addToCartMock).toHaveBeenCalledWith(mockItem, 2);
  });
});
