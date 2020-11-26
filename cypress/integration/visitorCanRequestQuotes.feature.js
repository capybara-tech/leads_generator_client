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

    it("Visitor can create a quote request successfully with just mandatory fields", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get('[name="name"]').type("Peter");
        cy.get('[name="email"]').type("peter@mail.com");
        cy.get('[name="telephone"]').type("0736123456");
        cy.get('[name="address"]').type("Address");
        cy.get("[data-cy=button]").contains("Submit").click();
      });
      cy.get("[data-cy=message]").should(
        "contain",
        "Form successfully submitted."
      );
    });

    it("Visitor can create a full quote request successfully", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get('[name="name"]').type("Peter");
        cy.get('[name="email"]').type("peter@mail.com");
        cy.get('[name="telephone"]').type("0736123456");
        cy.get('[name="address"]').type("Address");
        cy.get("#zeroToThreeMonthsIcon").click();
        cy.get("#houseIcon").click();
        cy.get("#zeroToFiveDegreesIcon").click();
        cy.get("#tiledIcon").click();
        cy.get("#southIcon").click();
        cy.get('[name="gutter_height"]').type("4.2");
        cy.get('[name="roof_width"]').type("5.4");
        cy.get('[name="roof_length"]').type("6.1");
        cy.get("#nextToElectricityQ").click();
        cy.get("#16AIcon").click();
        cy.get('[name="energy_consumption"]').type("10000");
        cy.get("[data-cy=button]").contains("Submit").click();
      });
      cy.get("[data-cy=message]").should(
        "contain",
        "Form successfully submitted."
      );
    });

    it("Visitor can make an unusual quote request", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get('[name="name"]').type("Peter");
        cy.get('[name="email"]').type("peter@mail.com");
        cy.get("#backToEmailQ").click();
        cy.get('[name="email"]').type("user@mail.com");
        cy.get('[name="telephone"]').type("0736123456");
        cy.get('[name="address"]').type("Address");
        cy.get("#skipToPropertyTypeQ").click();
        cy.get("#backToInstallationDateQ").click();
        cy.get("#zeroToThreeMonthsIcon").click();
        cy.get("#houseIcon").click();
        cy.get("[data-cy=button]").contains("Submit").click();
      });
      cy.get("[data-cy=message]").should(
        "contain",
        "Form successfully submitted."
      );
    });
  });

  context("Unsucessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/quotes",
        response: '{"message": "Somthing went wrong, please try again"}',
      });
      cy.visit("/");
      cy.get("[data-cy=button]").contains("Get up to 3 quotes").click();
    });
    it("with incorrect address", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get('[name="name"]').type("Peter");
        cy.get('[name="email"]').type("peter@mail.com");
        cy.get('[name="telephone"]').type("0736123456");
        cy.get('[name="address"]').type("hello street");
        cy.get("[data-cy=button]").contains("Submit").click();
      });
      cy.get("[data-cy=message]").should(
        "contain",
        "Somthing went wrong, please try again"
      );
    });
  });
});