describe("Visitor can navigate app from landing information grid", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visitor can navigate to get up to 3 quotes page", () => {
    cy.get("#angleDownIcon").click();
    cy.get("[data-cy=title]")
      .contains("My name's Felix, what's yours?")
      .should("be.visible");
    cy.get("#planetDiv").should("not.exist");
    cy.get("#walletDiv").should("not.exist");
    cy.get("#panelsWorkDiv").should("not.exist");
  });

  it("visitor can navigate to environment page", () => {
    cy.get("#cardButtonMenuItem2").click();
    cy.get("[data-cy=title]").should(
      "contain",
      "Help save our bruised planet install solar"
    );
    cy.get("#quotesDiv").should("not.exist");
    cy.get("#walletDiv").should("not.exist");
    cy.get("#panelsWorkDiv").should("not.exist");
  });

  it("visitor can navigate to econonmy page", () => {
    cy.get("#cardButtonMenuItem3").click();
    cy.get("[data-cy=title]").should(
      "contain",
      "Figures which won't disappoint"
    );
    cy.get("#quotesDiv").should("not.exist");
    cy.get("#planetDiv").should("not.exist");
    cy.get("#panelsWorkDiv").should("not.exist");
  });

  it("visitor can navigate to how do solar panels work page", () => {
    cy.get("#cardButton4").click();
    cy.get("[data-cy=title]").should("contain", "How does solar work?");
    cy.get("#quotesDiv").should("not.exist");
    cy.get("#planetDiv").should("not.exist");
    cy.get("#walletDiv").should("not.exist");
  });
});