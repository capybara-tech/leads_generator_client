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
        cy.get('[data-cy=message]').should("contain", "Thank you, from now on you just have to click some icons to get a more accurate quote or you can choose to submit right now")
        cy.get('[data-cy=button]').contains("Submit").click()
        cy.get('data-cy=message').should("contain", "Form successfully submitted.")
      });
    });

    it("Visitor can create a full quote request successfully", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get('[name="name"]').type("Peter");
        cy.get('[name="email"]').type("peter@mail.com");
        cy.get('[name="telephone"]').type("0736123456");
        cy.get('[name="address"]').type("Address");
        cy.get('#zeroToThreeMonthsIcon').click()
        cy.get('#houseIcon').click()
        cy.get('#zeroToFiveDegreesIcon').click()
        cy.get('#tiledIcon').click()
        cy.get('#southIcon').click()
        cy.get('[name="gutter_height"]').type("4.2")
        cy.get('[name="roof_width"]').type("5.4")
        cy.get('[name="roof_length"]').type("6.1")
        cy.get('#16AIcon').click()
        cy.get('[name="energy_consumption"]').type("10000")
        cy.get('[data-cy=button]').contains("Submit").click()
        cy.get('data-cy=message').should("contain", "Form successfully submitted.")
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

    it("with missing address", () => {
      cy.get('[name="name"]').type("Peter");
      cy.get('[name="email"]').type("peter@mail.com");
      cy.get('[name="telephone"]').type("0736123456");
    });
  });
});