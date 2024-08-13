export type Book = {
  name: string;
  id: number;
};

export type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div data-testid="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <h2>{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
