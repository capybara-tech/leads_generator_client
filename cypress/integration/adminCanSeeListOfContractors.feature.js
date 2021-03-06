describe("Admin can see list of contractors", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/admin/contractors",
        response: "fixture:contractors_index.json",
      });
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:registration_response.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registration_response.json",
      });
      cy.visit("/");
      cy.get("[data-cy=button]").contains("Admin").click({ force: true });
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("admin@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Login").click();
      });
      cy.get("#view-contractors")
        .click();
    });

    it("Admin can see contractor one", () => {
      cy.get("[data-cy=contractor-1]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Jacks AB");
        cy.get("[data-cy=telephone]").should("contain", "0767856789");
        cy.get("[data-cy=email]").should("contain", "peter@mail.com");
      });
    });

    it("Admin can see contractor two", () => {
      cy.get("[data-cy=contractor-2]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Active AB");
        cy.get("[data-cy=telephone]").should("contain", "0767856666");
        cy.get("[data-cy=email]").should("contain", "gary@mail.com");
      });
    });
  });
});