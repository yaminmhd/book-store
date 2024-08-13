import Typography from "@mui/material/Typography";
import axios from "axios";
import "./App.css";
import BookList, { Book } from "./BookList";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get("http://localhost:5173/api/books");
      const data = await response.data;
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Book store
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
