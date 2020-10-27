describe("Visitor can request quotes", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/quotes",
        response: '{"message": "Form successfully submitted."}',
      });
      cy.visit("/");
      cy.get("[data-cy=button]").contains("Get up to 3 quotes").click();
    });

    it("Visitor can create a quote request successfully", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get('[name="name"]').type("Peter");
        cy.get('[name="email"]').type("peter@mail.com");
        cy.get('[name="telephone"]').type("0736123456");
        cy.get('[name="address"]').type("Address");
      });
    });
  });

  context("Unsucessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/quotes",
        response: '{"message": "Address cant be blank"}',
        status: "422",
      });
      cy.visit("/");
      cy.get("[data-cy=button]").contains("Get up to 3 quotes").click();
    });

    it("with invalid credentials", () => {
      cy.get('[name="name"]').type("Peter");
      cy.get('[name="email"]').type("peter@mail.com");
      cy.get('[name="telephone"]').type("0736123456");
    });
  });
});