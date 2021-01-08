describe('Visitor can navigate to about us', () => {
  beforeEach(() => {
    cy.visit("/aboutus");
  });

  it("visitor can see content on about us page", () => {
   cy.get('#aboutUsBanner').should("exist")
   cy.get('#meetTheTeam').should("exist")
   cy.get('#ourCharitys').should("exist")
   cy.get('#ourVision').should("exist")
   cy.get('#ourAimsSegment').should("exist")
  })
}) 

