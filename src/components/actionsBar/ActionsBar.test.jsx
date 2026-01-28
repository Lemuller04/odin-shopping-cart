import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils";
import userEvent from "@testing-library/user-event";
import ActionsBar from "./ActionsBar.jsx";

const mockItem = { id: 1, title: "Test Item", price: 10.0 };

describe("Actions bar component", () => {
  it("Renders initial amount correctly", () => {
    render(<ActionsBar item={mockItem} updateCart={vi.fn()} />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("1");
  });

  it("Update amount by 1 button work correctly", async () => {
    const user = userEvent.setup();
    render(<ActionsBar item={mockItem} updateCart={vi.fn()} />);
    const subButton = screen.getByRole("button", { name: "Decrease quantity" });
    const addButton = screen.getByRole("button", { name: "Increase quantity" });
    const input = screen.getByRole("textbox");

    await user.click(subButton);
    expect(input.value).toBe("1");
    await user.click(addButton);
    expect(input.value).toBe("2");
    await user.click(subButton);
    expect(input.value).toBe("1");
  });

  it("calls updateCart with correct item and amount", async () => {
    const user = userEvent.setup();
    const updateCartMock = vi.fn();
    render(<ActionsBar item={mockItem} updateCart={updateCartMock} />);

    const addButton = screen.getByRole("button", { name: /increase/i });
    const cartButton = screen.getByRole("button", { name: /add to cart/i });

    await user.click(addButton);
    await user.click(cartButton);

    expect(updateCartMock).toHaveBeenCalledWith(mockItem, 2);
  });
});
