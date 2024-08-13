import axios from "axios";

describe("Book Store", () => {
  const books = [
    { id: 1, name: "Refactoring" },
    { id: 2, name: "Domain-driven design" },
    { id: 3, name: "Building Microservices" },
  ];
  const createBooks = () => {
    return books.map((item) =>
      axios.post("http://localhost:5173/api/books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  };
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
    createBooks();
  });

  after(() => {
    createBooks();
  });

  it("should display the heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get('h2[data-testid="heading"]').contains("Book store");
  });

  it("should display the list of books", () => {
    cy.visit("http://localhost:5173/");
    cy.get('div[data-testid="book-list"]').should("exist");
    cy.get('div[data-testid="book-list"]').within(() => {
      cy.findByText("Refactoring").should("exist");
      cy.findByText("Domain-driven design").should("exist");
      cy.findByText("Building Microservices").should("exist");
    });
  });
});
