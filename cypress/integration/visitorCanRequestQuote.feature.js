describe("visitor can request quotes", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/quotes",
        response: '{"message": "Form successfully submitted."}',
      });
      cy.visit("/")
      cy.get("[data-cy=button]").contains("Get up to three quotes").click();
    })

    it("Visitor can create a quote request successfully", () => {
      cy.get("[data-cy=quote-form]").within(() => {
        cy.get("[data-cy=name]").type("Peter");
        cy.get("[data-cy=email]").type("peter@mail.com");
        cy.get("[data-cy=telephone]").type("0736123456");
        cy.get("[data-cy=address]").type("Address");
        cy.get("[data-cy=installation-date]").type("within three months");
        cy.get("[data-cy=property-type]").type("house");
        cy.get("[data-cy=roof-slope]").type("15°");
        cy.get("[data-cy=roof-type]").type("tiled");
        cy.get("[data-cy=roof-direction]").type("north");
        cy.get("[data-cy=gutter-height]").type("2.9m");
        cy.get("[data-cy=roof-width]").type("8m");
        cy.get("[data-cy=roof-length]").type("10m");
        cy.get("[data-cy=fuse-size]").type("16A");
        cy.get("[data-cy=energy-consumption]").type("25000kW");
        cy.get("[data-cy=button]").contains("Submit").click();
      });
      cy.get("[data-cy=message]").should(
        "contain",
        "Form successfully submitted."
      );
    });
  })
})