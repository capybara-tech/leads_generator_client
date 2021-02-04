describe("Visitor can navigate app from discover category title on the footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("to About us", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("About us").click();
    });
    cy.get("[data-cy=title]").should("contain", "Making UK greener,");
    cy.get("[data-cy=title]").contains("How do solar panels actually work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
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
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to How WATTSWHAT works", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("How WATTSWHAT works").click();
    });
    cy.get("[data-cy=title]").should("contain", "The WATTSWHAT way");
    cy.get("[data-cy=title]").contains("How do solar panels actually work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
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
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });

  it("to Help save our bruised planet install solar", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Ecofriendly").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "Help save our bruised planet install solar"
    );
    cy.get("[data-cy=title]").contains("How do solar panels actually work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
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
  });

  it("to Figures which won't disappoint", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Profit-oriented").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "Figures which won't disappoint"
    );
    cy.get("[data-cy=title]").contains("How do solar panels actually work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Help save our bruised planet install solar")
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
  });

  it("to Join #TEAMWATTSWHAT", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Join #TEAMWATTSWHAT").click();
    });
    cy.get("[data-cy=title]").should("contain", "Join #TEAMWATTSWHAT");
    cy.get("[data-cy=title]").contains("How do solar panels actually work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Help save our bruised planet install solar")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Figures which won't disappoint")
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

  it("to quote request page", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("[data-cy=button]").contains("Get up to 3 quotes").click();
    });
    cy.get("[data-cy=title]").should(
      "contain",
      "My name's Felix, what's yours?"
    );
    cy.get("[data-cy=title]").contains("How do solar panels actually work?").should("not.be.visible");
    cy.get("[data-cy=title]").contains("About us").should("not.be.visible");
    cy.get("[data-cy=title]").contains("The WATTSWHAT way").should("not.be.visible");
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
      .contains("Terms and conditions")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Privacy policy")
      .should("not.be.visible");
    cy.get("[data-cy=title]").contains("Cookies").should("not.be.visible");
    cy.get("[data-cy=title]").contains("Contact the WATTSWHAT team").should("not.be.visible");
    cy.get("[data-cy=title]").contains("FAQs").should("not.be.visible");
  });
});