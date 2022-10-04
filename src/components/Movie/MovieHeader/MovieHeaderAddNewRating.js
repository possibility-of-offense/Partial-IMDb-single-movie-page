import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import app from "../../../config/config";
import MovieContext from "../../../context/movie-context";

import classes from "./MovieHeaderAddNewRating.module.css";

function MovieHeaderAddNewRating(props) {
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (rating !== null) {
      if (rating > 10) {
        setError("No more than 10");
      } else {
        setError(null);
      }
    }
  }, [rating]);

  const movieContext = useContext(MovieContext);
  const db = getFirestore(app);
  const movie = doc(db, "movies", movieContext.movie.id);

  const handleUpdateRating = useCallback(async (e) => {
    e.preventDefault();
    const getMovie = await getDoc(movie);
    let { rating } = getMovie.data();
    let newRating = rating + 10 / 10;

    if (newRating > 10) {
      newRating = 10;
    }

    await updateDoc(movie, {
      rating: newRating,
    });
    movieContext.ratingUpdated();

    props.onHideModal(false);
  }, []);

  return (
    <form onSubmit={handleUpdateRating}>
      <h2>Add rating</h2>
      <br />
      <label htmlFor="rating">Your rating</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button
        className={error !== null ? classes["disable-btn"] : ""}
        disabled={error !== null ? true : false}
      >
        Submit
      </button>
      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
}

export default MovieHeaderAddNewRating;
