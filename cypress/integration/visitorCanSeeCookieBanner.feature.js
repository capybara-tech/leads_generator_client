describe("Visitor can see cookie notice", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("#cookieBanner").should("exist");
    cy.contains(
      "This website uses cookies to enhance your experience. Learn more - terms"
    ).should("be.visible");
  });

  it("and links successfully to the cookies policy", () => {
    cy.get("[data-cy=button]").contains("terms").click();
    cy.get("[data-cy=title]").should("contain", "Cookies");
    cy.get("[data-cy=title]")
      .contains("Terms and conditions")
      .should("not.be.visible");
    cy.get("[data-cy=title]")
      .contains("Privacy policy")
      .should("not.be.visible");
  });
});