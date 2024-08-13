describe("Book Store", () => {
  it("should display the heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get('h2[data-test="heading"]').contains("Book store");
  });
});
