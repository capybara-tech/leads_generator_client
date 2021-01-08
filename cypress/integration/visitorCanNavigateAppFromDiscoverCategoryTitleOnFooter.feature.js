describe("Visitor can navigate app from discover category title on the footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("to About us", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("About us").click();
    });
    cy.get("[data-cy=title]").should("contain", "Making UK greener,");
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The SolSpana way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on the planet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on your wallet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Become a partner")
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
    cy.get("[data-cy=title]").contains("Contact the SOLSPANA team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to How SolSpana works", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("How SOLSPANA works").click();
    });
    cy.get("[data-cy=title]").should("contain", "The SolSpana way");
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on the planet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on your wallet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Become a partner")
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
    cy.get("[data-cy=title]").contains("Contact the SOLSPANA team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to How does this have an impact on the planet", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Impact on planet").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "How does this have an impact on the planet"
    );
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The SolSpana way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on your wallet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Become a partner")
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
    cy.get("[data-cy=title]").contains("Contact the SOLSPANA team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to How does this have an impact on your wallet", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Impact on wallet").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "How does this have an impact on your wallet"
    );
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The SolSpana way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on the planet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Become a partner")
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
    cy.get("[data-cy=title]").contains("Contact the SOLSPANA team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to Become a partner", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Become a partner").click();
    });
    cy.get("[data-cy=title]").should("contain", "Become a partner");
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The SolSpana way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on the planet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on your wallet")
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
    cy.get("[data-cy=title]").contains("Contact the SOLSPANA team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to quote request page", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Get up to 3 quotes").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "My name's Felix, what's yours?"
    );
    cy.get("[data-cy=title]").contains("How does solar work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The SolSpana way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on the planet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("How does this have an impact on your wallet")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Become a partner")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Terms and conditions")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Privacy policy")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the SOLSPANA team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });
});