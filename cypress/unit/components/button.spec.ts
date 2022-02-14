import { mount } from "@cypress/react";
import { Button } from "../../../components/Button/Button";

it("renders appropriate text", () => {
  mount(Button({ children: "Click Me" }));
  cy.get('[data-testid="CoreButton"]').contains("Click Me");
});
