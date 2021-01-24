describe("Visitor can navigate app from legal category title on the footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("to Terms and conditions", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Terms and conditions").click();
    });
    cy.get("[data-cy=title]").should("contain", "Terms and conditions");
    cy.get("[data-cy=title]")
      .contains("How solar works?")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("The WATTSWHAT way")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Help save our bruised planet install solar")
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
      .contains("Privacy policy")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to Privacy policy", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Privacy policy").click();
    });
    cy.get("[data-cy=title]").should("contain", "Privacy policy");
    cy.get("[data-cy=title]")
      .contains("How solar works?")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("The WATTSWHAT way")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Help save our bruised planet install solar")
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
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to Cookies", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Cookies").click();
    });
    cy.get("[data-cy=title]").should("contain", "Cookies");
    cy.get("[data-cy=title]")
      .contains("How solar works?")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("The WATTSWHAT way")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Help save our bruised planet install solar")
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
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });
});