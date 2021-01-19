describe("Visitor can see information grid component on landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("get up to 3 quotes button", () => {
    cy.get("#threeQuotes").should("exist");
    cy.get("[data-cy=title]").should("contain", "Get up to 3 Quotes");
    cy.get("[data-cy=content]").should(
      "contain",
      "Our partners are MCS registered, vetted and we continue to monitor their reviews"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Compare competitive quotes with service"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "No obligation and free - we are against pushy sales practices!"
    );
  });

  it("Help save our bruised planet section", () => {
    cy.get("#impactPlanet").should("exist");
    cy.get("[data-cy=title]").should("contain", "Help save our bruised planet");
    cy.get("[data-cy=content]").should(
      "contain",
      "Harvest infinite, truly clean (and free!) energy from the sun"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Dramatically reduce your property's thirst for fossil fuels, burnt to produce electricity"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Solar panels have no emissions and therefore zero climate impact once installed"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Shrink you carbon footprint drastically overnight"
    );
  });

  it("Figures which won't disappoint section", () => {
    cy.get("#impactWallet").should("exist");
    cy.get("[data-cy=title]").should(
      "contain",
      "Figures which won't disappoint"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Lower energy bills and sell excess electricity to the National Grid"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Government grants and financial support are up for grabs"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Increases the value of your property"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "An impressive return on investment (ROI) and solar panel prices have fallen by around 70% since 2010, quite a bargain now!"
    );
  });

  it("How solar panels work section", () => {
    cy.get("#howPanelsWork").should("exist");
    cy.get("[data-cy=title]").should("contain", "How solar panels work");
    cy.get("[data-cy=content]").should(
      "contain",
      "Daylight (not only sunlight is required!) hits the solar photovoltaic cells in the panels"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "Direct current (DC) electricity is produced"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "With a bit of magic, an inverter converts DC electricity to alternating current electricity (AC)"
    );
    cy.get("[data-cy=content]").should(
      "contain",
      "The energy can then be used in your property, excess sold to the national grid or stored"
    );
  });
});