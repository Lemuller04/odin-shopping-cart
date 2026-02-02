import { describe, it, expect } from "vitest";
import { render, screen } from "../../../tests/test-utils";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header Integration", () => {
  it("closes the menu when the backdrop is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const hamburger = screen.getByRole("button");

    await user.click(hamburger);
    expect(hamburger.getAttribute("aria-expanded")).toBe("true");

    const backdrop = screen.getByTestId("backdrop");
    await user.click(backdrop);

    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
  });
});
