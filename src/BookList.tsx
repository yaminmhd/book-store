export type Book = {
  name: string;
};

export type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div data-test="book-list">
      {books.map((book, index) => (
        <div className="book-item" key={index}>
          <h2>{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
