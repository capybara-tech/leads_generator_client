describe("Visitor can see social media icons on footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("#instagramIcon").should("exist")
      cy.get("#facebookIcon").should("exist")
      cy.get("#twitterIcon").should("exist")
      cy.get("#linkedinIcon").should("exist")
    });
  });
});