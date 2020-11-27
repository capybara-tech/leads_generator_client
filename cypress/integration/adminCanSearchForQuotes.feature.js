describe("Admin can see search for quotes", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/admin/quotes",
        response: "fixture:quotes_index.json",
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
      cy.get("#quotes").click();
    });

    it("Admin can search for specific quotes", () => {
      cy.get("#quoteSearch").type("Liljevalchsgatan 24");
      cy.get("[data-cy=name]").contains("Peter Andrews").should("be.visible");
      cy.get("[data-cy=email]").contains("peter123@mail.com").should("be.visible");
      cy.get("[data-cy=telephone]").contains("0787890767").should("be.visible");
      cy.get("[data-cy=address]").contains("Liljevalchsgatan 24, 151 45 Södertälje").should("be.visible");
      cy.get("[data-cy=name]").contains("John Matthews").should("not.be.visible");
      cy.get("[data-cy=email").contains("user@mail.com").should("not.be.visible");
      cy.get("[data-cy=telephone").contains("0385337368").should("not.be.visible");
      cy.get("[data-cy=telephone").contains("Småbrukets backe 30 14158 Huddinge").should("not.be.visible");
    });
  });
});