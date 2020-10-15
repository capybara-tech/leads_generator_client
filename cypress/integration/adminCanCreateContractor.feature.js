describe("Admin can create contractor", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/admin/contractors",
        response: '{"message": "Contractor successfully created"}',
      })
      cy.visit("/");
    })

    it('Admin can create an contractor successfully', () => {
      cy.get('[data-cy=button]').contains("Admin").click();
      cy.get('[data-cy=contractor-form]').within(() => {
        cy.get('[data-cy=name]').type('Name');
        cy.get('[data-cy=contact-person]').type('Conatct person');
        cy.get('[data-cy=address]').type('Address');
        cy.get('[data-cy=telephone]').type('Telephone');
        cy.get('[data-cy=email]').type('peter@mail.com');
        cy.get('[data-cy=company-number]').type('556785-7932');
        cy.get('[data-cy=button]').contains("Save Contractor").click();
      })
      cy.get('[data-cy=message]').should("contain", "Contractor successfully created")
    });
  })
})