describe("Visitor can navigate app from benefits category title on the footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("to Ecofriendly", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Ecofriendly").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "Help save our bruised planet install solar"
    );
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Figures which won't disappoint")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Join #WATTSWHAT")
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
  });

  it("to Profit-oriented", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Profit-oriented").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "Figures which won't disappoint"
    );
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Help save our bruised planet install solar")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Join #TEAMSOLSPANA")
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
  });
})