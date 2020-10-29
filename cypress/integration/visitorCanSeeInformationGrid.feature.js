describe("Visitor can see information grid component on landing page", () => {
  Each(() => {
    cy.visit("/");
  });

  it("get up to 3 quotes button", () => {
    cy.get("#threeQuotes").should("exist");
    cy.get("[data-cy=title]").should("contain", "Get up to 3 Quotes");
  });

  it("how does this have an impact on the planet section", () => {
    cy.get("#impactPlanet").should("exist");
    cy.get("[data-cy=title]").should(
      "contain",
      "How does this have an impact on the planet"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, eius? Maiores, impedit accusamus atque at quam"
    );
  });

  it("how does this have an impact on your wallet section", () => {
    cy.get("#impactWallet").should("exist");
    cy.get("[data-cy=title]").should(
      "contain",
      "How does this have an impact on your wallet"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, eius? Maiores, impedit accusamus atque at quam"
    );
  });

  it("how do solar panels work section", () => {
    cy.get("#howPanelsWork").should("exist");
    cy.get("[data-cy=title]").should("contain", "How do solar panels work?");
    cy.get("[data-cy=content]").should(
      "contain",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, eius? Maiores, impedit accusamus atque at quam"
    );
  });
});