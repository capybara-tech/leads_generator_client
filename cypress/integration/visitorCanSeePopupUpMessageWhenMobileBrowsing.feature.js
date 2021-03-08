describe("Visitor can see popup message when browsing site on mobile", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(375, 667)
    cy.wait(15000)
  });

  it("successfully", () => {
    cy.get("[data-cy=title]").should("contain", "Did you know!");
    cy.get("[data-cy=message]").should(
      "contain",
      "By installing solar you will dramatically reduce your carbon footprint overnight by up to 2 tonnes of CO2/year."
    );
    cy.get("[data-cy=message]").should(
      "contain",
      "Also, donate indirectly to charity. We help fund other eco initiatives from each quote request."
    );
    cy.get("[data-cy=disclaimer]").should(
      "contain",
      "We ask only those who are genuinely interested in solar request quotes"
    );
  });
});