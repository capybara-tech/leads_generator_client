describe('Visitor can navigate app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visitor can navigate to Why solar page', () => {
    cy.get('[data-cy=button]').contains("Why solar").click()
    cy.get('[data-cy=title]').should("contain", "Why solar")
    cy.get('[data-cy=title]').contains("About us").should("not.be.visible")
    cy.get('[data-cy=title]').contains("FAQs").should("not.be.visible")
    cy.get('[data-cy=title]').contains("Get up to 3 quotes").should("not.be.visible")
  })
  
  it('visitor can navigate to About us', () => {
    cy.get('[data-cy=button]').contains("About us").click()
    cy.get('[data-cy=title]').should("contain", "About us")
    cy.get('[data-cy=title]').contains("Why solar").should("not.be.visible")
    cy.get('[data-cy=title]').contains("FAQs").should("not.be.visible")
    cy.get('[data-cy=title]').contains("Get up to 3 quotes").should("not.be.visible")
  });
    
  it('visitor can navigate to FAQs', () => {
    cy.get('[data-cy=button]').contains("FAQs").click()
    cy.get('[data-cy=title]').should("contain", "FAQs")
    cy.get('[data-cy=title]').contains("Why solar").should("not.be.visible")
    cy.get('[data-cy=title]').contains("About us").should("not.be.visible")
    cy.get('[data-cy=title]').contains("Get up to 3 quotes").should("not.be.visible")
  });

  it('visitor can navigate to Get up to 3 quotes', () => {
    cy.get('[data-cy=button]').contains("Get up to 3 quotes").click()
    cy.get('[data-cy=title]').should("contain", "Get up to three quotes")
    cy.get('[data-cy=title]').contains("Why solar").should("not.be.visible")
    cy.get('[data-cy=title]').contains("About us").should("not.be.visible")
    cy.get('[data-cy=title]').contains("FAQs").should("not.be.visible")
  });

  it('logo should be visible', () => {    
    cy.get('[data-cy=logo]').should("exist")
  });
});