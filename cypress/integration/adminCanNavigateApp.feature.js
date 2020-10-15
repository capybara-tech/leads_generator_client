describe('Admin can navigate app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Administrator can navigate to Admin landing page', () => {
    cy.get('[data-cy=button]').contains("Admin").click()
    cy.get('[data-cy=title]').should("contain", "At your service...")
  })
});