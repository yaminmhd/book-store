import { render, waitFor, screen } from "@testing-library/react";
import BookListContainer from "./BookListContainer";

describe("<BookListContainer/>", () => {
  it("should render loading spinner", async () => {
    render(<BookListContainer />);

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId("book-list")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });
  });
});
