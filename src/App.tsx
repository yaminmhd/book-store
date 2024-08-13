import Typography from "@mui/material/Typography";
import "./App.css";
import BookListContainer from "./BookListContainer";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-testid="heading">
        Book store
      </Typography>
      <BookListContainer />
    </>
  );
}

export default App;
