import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils.jsx";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CartItemActionsBar from "./CartItemActionsBar.jsx";

const mockItem = {
  title: "Fjallraven Backpack",
  image: "https://image.com/test.jpg",
  price: 109.95,
  rating: { rate: 3.9 },
  amount: 2,
};

describe("CartItemActionsBar Component", () => {
  it("displays the correct product amount", async () => {
    const setItemAmountMock = vi.fn();
    const removeFromCartMock = vi.fn();

    render(
      <CartItemActionsBar
        setItemAmount={setItemAmountMock}
        item={mockItem}
        removeFromCart={removeFromCartMock}
      />,
    );

    const input = screen.getByLabelText(/^quantity$/i);

    expect(input).toHaveValue("2");
  });

  it("updates amount when user types a valid number", async () => {
    const user = userEvent.setup();
    const setItemAmountMock = vi.fn();
    const removeFromCartMock = vi.fn();

    render(
      <CartItemActionsBar
        setItemAmount={setItemAmountMock}
        item={mockItem}
        removeFromCart={removeFromCartMock}
      />,
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "5");
    expect(setItemAmountMock).toHaveBeenCalledWith(mockItem, 25);
  });

  it("calls removeFromCart when button is clicked", async () => {
    const user = userEvent.setup();
    const setItemAmountMock = vi.fn();
    const removeFromCartMock = vi.fn();

    render(
      <CartItemActionsBar
        setItemAmount={setItemAmountMock}
        item={mockItem}
        removeFromCart={removeFromCartMock}
      />,
    );

    const removeBtn = screen.getByRole("button", { name: /remove from cart/i });

    await user.click(removeBtn);

    expect(removeFromCartMock).toHaveBeenCalledWith(mockItem);
  });
});
