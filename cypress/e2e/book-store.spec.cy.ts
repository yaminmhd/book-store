import axios from "axios";

describe("Book Store", () => {
  before(() => {
    return axios
      .delete("http://localhost:5173/api/books?_cleanup=true")
      .catch((error) => {
        console.log(error);
      });
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:5173/api/books?_cleanup=true")
      .catch((error) => {
        console.log(error);
      });
  });

  beforeEach(() => {
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven design", id: 2 },
      { name: "Building Microservices", id: 3 },
    ];
    return books.map((item) =>
      axios.post("http://localhost:5173/api/books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  it("should display the heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get('h2[data-test="heading"]').contains("Book store");
  });

  it("should display the list of books", () => {
    cy.visit("http://localhost:5173/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map(
        (book) => book.querySelector("h2").innerHTML
      );
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });
});
