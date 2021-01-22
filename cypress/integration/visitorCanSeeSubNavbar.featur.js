describe('Visitor can navigate sub navbar', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visitor can navigate to environment page", () => {
    cy.get("[data-cy=button]").contains("Why solar").click({force: true});
    cy.get('#linkToEnvironmentPage').click({force: true})
    cy.get('[data-cy=title]').should("contain", "How does this have an impact on the planet")
  })
  it('visitor can see economics page', () => {
    cy.get('[data-cy=button]').contains("Why solar").click({force: true})
    cy.get('#linkToEconomicsPage').click({force: true})
    cy.get('[data-cy=title]').should("contain", "Figures which won't disappoint")
  })
}) 