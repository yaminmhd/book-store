import { useEffect, useState } from "react";
import { Book } from "./BookList";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5173/api/books");
        const data = await response.data;
        setBooks(data);
      } catch (e) {
        console.error(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, []);

  return {
    books,
    isLoading,
    isError,
  };
};

export default useBooks;
