import BookList from "./BookList";
import useBooks from "./useBooks";
import CircularProgress from "@mui/material/CircularProgress";

const BookListContainer = () => {
  const { books, isLoading, isError } = useBooks();

  if (isLoading) {
    return (
      <div data-testid="loading">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <div data-testid="error">Error encountered. Please try again</div>;
  }

  return <BookList books={books} />;
};

export default BookListContainer;
