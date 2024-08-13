import Typography from "@mui/material/Typography";
import "./App.css";
import BookList from "./BookList";

function App() {
  const books = [{ name: "Book 1" }, { name: "Book 2" }];
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
