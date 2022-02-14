import { mount } from "@cypress/react";
import { Button } from "../../../components/Button/Button";

it("renders appropriate text", () => {
  mount(Button({ children: "Click Me" }));
  cy.get('[data-testid="CoreButton"]').contains("Click Me");
});

it("renders appropriate variant", () => {
  mount(Button({ children: "Click Me", variant: "outlined" }));
  cy.get('[data-testid="CoreButton"]').should(
    "have.class",
    "MuiButton-outlined"
  );
});

it("renders appropriate color", () => {
  mount(
    Button({ children: "Click Me", variant: "contained", color: "success" })
  );
  cy.get('[data-testid="CoreButton"]').should(
    "have.class",
    "MuiButton-containedSuccess"
  );
});
