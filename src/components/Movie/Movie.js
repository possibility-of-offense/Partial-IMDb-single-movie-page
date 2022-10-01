import Container from "../UI/Container";
import MovieHeader from "./MovieHeader/MovieHeader";
import MovieImages from "./MovieImages/MovieImages";
import MovieMainInfo from "./MovieMainInfo/MovieMainInfo";

function Movie() {
  return (
    <Container>
      <MovieHeader />
      <MovieImages />
      <MovieMainInfo />
    </Container>
  );
}

export default Movie;
