import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";

describe("App component", () => {
    it("render correct heading", () => {
        render(<App />);

        expect(screen.getByRole("heading").textContent).toMatch(/(hello)*(world)/i);
    });
});
