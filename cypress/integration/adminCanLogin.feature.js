describe('Admin can login', () => {
  context('Successfully', () => {
    before(() => {
      cy.server()
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:registration_response.json"
      })
      cy.route({
        methode: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registration_response.json"
      })
      cy.visit("/")
    });

    it('Admin can login', () => {
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("admin@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Login").click();
      })
      cy.get('[data-cy=title]').should("contain", "At your service...")
    });
  })
})