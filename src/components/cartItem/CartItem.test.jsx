import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils.jsx";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import CartItem from "./CartItem.jsx";

const mockItem = {
  title: "Fjallraven Backpack",
  image: "https://image.com/test.jpg",
  price: 109.95,
  rating: { rate: 3.9 },
  amount: 10,
};

describe("CartItem Component", () => {
  it("displays the correct total item price sum (price * amount)", async () => {
    const setItemAmountMock = vi.fn();
    const removeFromCartMock = vi.fn();
    const total = (mockItem.price * mockItem.amount).toFixed(2);

    render(
      <CartItem
        item={mockItem}
        direction="horizontal"
        setItemAmount={setItemAmountMock}
        removeFromCart={removeFromCartMock}
      />,
    );

    expect(screen.getByText(total, { exact: false })).toBeInTheDocument();
  });
});
