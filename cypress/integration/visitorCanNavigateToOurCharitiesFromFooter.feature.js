describe("Visitor can see charity links from the footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get("#protectTheForest").should("exist")
      cy.get("#greenLiving").should("exist")
    });
  });
});