import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../register/page";

describe("Page", () => {
    test("rendert Überschrift und Button", () => {
        render(<Page />);
        expect(
            screen.getByText("Neue Einkaufsliste erstellen")
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Einkaufsliste erstellen/i })
        ).toBeInTheDocument();
    });
});