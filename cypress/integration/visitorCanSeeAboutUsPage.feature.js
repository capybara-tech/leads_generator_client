describe("Visitor can visit About us page", () => {
  beforeEach(() => {
    cy.visit("/aboutus");
  });

  it("visitor can see content", () => {
    cy.get("#aboutUsBanner").should("exist");
    cy.get("#meetTheTeam").should("exist");
    cy.get("#ourCharitys").should("exist");
    cy.get("#ourVision").should("exist");
    cy.get("#ourAimsSegment").should("exist");
  });

  it("visitor can see linkedin icons successfully", () => {
    cy.get("#alexLinkedInIcon").should("exist");
    cy.get("#felixLinkedInIcon").should("exist");
  });

  it("visitor can navigate to Get up to 3 quotes", () => {
    cy.get("[data-cy=button]")
      .contains("Feeling inspired? Click to obtain quotes")
      .click();
    cy.get("[data-cy=title]")
      .contains("My name's Felix, what's yours?")
      .should("be.visible");
    cy.get("[data-cy=title]")
      .contains("Making UK greener")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Frequently asked questions")
      .should("not.be.visible");
  });
});
