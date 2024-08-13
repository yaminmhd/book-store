describe("Book Store", () => {
  it("should display the heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get('h2[data-test="heading"]').contains("Book store");
  });

  it("should display the list of books", () => {
    cy.visit("http://localhost:5173/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);
      const titles = [...books].map(
        (book) => book.querySelector("h2").innerHTML
      );
      expect(titles).to.deep.equal(["Book 1", "Book 2"]);
    });
  });
});
