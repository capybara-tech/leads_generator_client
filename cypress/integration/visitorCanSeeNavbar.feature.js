describe('Landing page successfully render', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visitor can see elements in navbar', () => {
    cy.get('[data-cy=button').should("contain", "Why solar")
    cy.get('[data-cy=button').should("contain", "About us")
    cy.get('[data-cy=button').should("contain", "FAQs")
    cy.get('[data-cy=button').should("contain", "Get up to three quotes")
    cy.get('[data-cy=logo').should("exist")
  });
});