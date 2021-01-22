describe("Visitor can navigate app from solar category title on the footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("to How Solar work?", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("How solar works?").click();
    });
    cy.get("[data-cy=title]").should("contain", "How does solar work?");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on the planet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Figures which won't disappoint")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Join #TEAMWATTSWHAT")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("My name's Felix, what's yours?")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Terms and conditions")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Privacy policy")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  })
})