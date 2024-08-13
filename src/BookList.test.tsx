import BookList from "./BookList";
import { render, screen } from "@testing-library/react";

describe("<BookList />", () => {
  it("render book list", async () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Event domains", id: 2 },
      ],
    };

    render(<BookList {...props} />);

    const headings = await screen.findAllByRole("heading");

    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.books[index].name);
    });
  });
});
