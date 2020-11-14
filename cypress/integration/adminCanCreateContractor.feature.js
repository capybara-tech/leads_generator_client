describe("Admin can create contractor", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/admin/contractors",
        response: '{"message": "Contractor successfully created"}',
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
      cy.get("#create-contractor").click();
    });

    it("Admin can create an contractor successfully", () => {
      cy.get("[data-cy=contractor-form]").within(() => {
        cy.get("[data-cy=name]").type("Name");
        cy.get("[data-cy=contact-person]").type("Contact person");
        cy.get("[data-cy=address]").type("Address");
        cy.get("[data-cy=telephone]").type("Telephone");
        cy.get("[data-cy=email]").type("peter@mail.com");
        cy.get("[data-cy=company-number]").type("556785-7932");
        cy.get("[data-cy=button]").contains("Save Contractor").click();
      });
      cy.get("[data-cy=message]").should(
        "contain",
        "Contractor successfully created"
      );
    });
  });
});

context("unsuccessfully", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/admin/contractors",
      response: { message: "Email can't be blank" },
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
    cy.get("#create-contractor").click();
  });

  it("without email", () => {
    cy.get("[data-cy=contractor-form]").within(() => {
      cy.get("[data-cy=name]").type("Name");
      cy.get("[data-cy=contact-person]").type("Contact person");
      cy.get("[data-cy=address]").type("Address");
      cy.get("[data-cy=telephone]").type("Telephone");
      cy.get("[data-cy=company-number]").type("556785-7932");
      cy.get("[data-cy=button]").contains("Save Contractor").click();
    });
    cy.get("[data-cy=message]").should("contain", "Email can't be blank");
  });
});