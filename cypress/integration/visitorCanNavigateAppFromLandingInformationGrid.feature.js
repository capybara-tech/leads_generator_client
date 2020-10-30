describe("Visitor can navigate app from landing information grid", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visitor can navigate to get up to 3 quotes page", () => {
    cy.get("#quotesDiv").click();
    cy.get("[data-cy=title]").should("contain", "Get up to three quotes");
    cy.get("#planetDiv").should("not.exist");
    cy.get("#walletDiv").should("not.exist");
    cy.get("#panelsWorkDiv").should("not.exist");
  });

  it("visitor can navigate to environment page", () => {
    cy.get("#planetDiv").click();
    cy.get("[data-cy=title]").should(
      "contain",
      "How does this have an impact on the planet"
    );
    cy.get("#quotesDiv").should("not.exist");
    cy.get("#walletDiv").should("not.exist");
    cy.get("#panelsWorkDiv").should("not.exist");
  });

  it("visitor can navigate to econonmy page", () => {
    cy.get("#walletDiv").click();
    cy.get("[data-cy=title]").should(
      "contain",
      "How does this have an impact on your wallet"
    );
    cy.get("#quotesDiv").should("not.exist");
    cy.get("#planetDiv").should("not.exist");
    cy.get("#panelsWorkDiv").should("not.exist");
  });

  it("visitor can navigate to how do solar panels work page", () => {
    cy.get("#panelsWorkDiv").click();
    cy.get("[data-cy=title]").should("contain", "How do solar panels work");
    cy.get("#quotesDiv").should("not.exist");
    cy.get("#planetDiv").should("not.exist");
    cy.get("#walletDiv").should("not.exist");
  });
});