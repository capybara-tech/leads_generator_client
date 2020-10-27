describe("Admin can login", () => {
  context("Successfully", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:registration_response.json",
      });
      cy.route({
        methode: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registration_response.json",
      });
      cy.visit("/");
      cy.get("[data-cy=button]").contains("Admin").click({ force:true });
    });

    it("Admin can login", () => {
      cy.get("[data-cy=button]").contains("Why solar").should("not.be.visible");
      cy.get("[data-cy=button").contains("About us").should("not.be.visible");
      cy.get("[data-cy=button]").contains("FAQs").should("not.be.visible");
      cy.get("[data-cy=button]")
        .contains("Get up to three quotes")
        .should("not.be.visible");
      cy.get("[data-cy=button]").contains("Admin").should("not.be.visible");
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("admin@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Login").click();
      });
      cy.get("[data-cy=title]").should("contain", "At your service...");
    });
  });

  context("Unsucessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: '{"message": "Invalid login credentials. Please try again."}',
        status: "401",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: '{"message": "Invalid login credentials. Please try again."}',
        status: "401",
      });
      cy.visit("/");
      cy.get("[data-cy=button]").contains("Admin").click({ force:true });
    });

    it("with invalid credentials", () => {
      cy.get("[data-cy=button]").contains("Why solar").should("not.be.visible");
      cy.get("[data-cy=button]").contains("About us").should("not.be.visible");
      cy.get("[data-cy=button]").contains("FAQs").should("not.be.visible");
      cy.get("[data-cy=button]")
        .contains("Get up to three quotes")
        .should("not.be.visible");
      cy.get("[data-cy=button]").contains("Admin").should("not.be.visible");
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("alex@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Login").click();
      });
      cy.contains("At your service...").should("not.be.visible");
    });
  });
});