describe('Landing page successfully render', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visitor can navigate to why solar page', () => {
    cy.get('[data-cy=button]').should("contain", "Why solar").click({ multiple: true })
    cy.get('[data-cy=title]').should("contain", "Why solar")
  })
  
  it('visitor can navigate to About us', () => {
    cy.get('[data-cy=button]').should("contain", "About us").click({ multiple: true })
    cy.get('[data-cy=title]').should("contain", "About us")
  });
    
  it('visitor can navigate to About us', () => {
    cy.get('[data-cy=button]').should("contain", "FAQs").click({ multiple: true })
    cy.get('[data-cy=title]').should("contain", "FAQs")
  });

  it('visitor can navigate to Get up to three quotes', () => {
    cy.get('[data-cy=button]').should("contain", "Get up to three quotes").click({ multiple: true })
    cy.get('[data-cy=title]').should("contain", "Get up to three quotes")
  });

  it('logo should be visible', () => {    
    cy.get('[data-cy=logo]').should("exist")
  });

});