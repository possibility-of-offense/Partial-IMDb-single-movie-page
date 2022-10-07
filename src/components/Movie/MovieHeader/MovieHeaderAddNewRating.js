import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import app from "../../../config/config";
import MovieContext from "../../../context/movie-context";

import classes from "./MovieHeaderAddNewRating.module.css";
import Input from "../../UI/Input";
import { validateBetween } from "../../../helpers/factories";
const { errorMessage, validate } = validateBetween(0, 10);

function MovieHeaderAddNewRating(props) {
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);
  const [wasTouched, setWasTouched] = useState(false);

  useEffect(() => {
    if (rating !== "") {
      if (!validate(rating) && wasTouched) {
        setError(errorMessage);
      } else {
        setError(null);
      }
    }
  }, [rating, wasTouched]);

  const movieContext = useContext(MovieContext);
  const db = getFirestore(app);
  const movie = doc(db, "movies", movieContext.movie.id);

  const { ratingUpdated } = movieContext;
  const { onHideModal } = props;

  const handleUpdateRating = useCallback(
    async (e) => {
      e.preventDefault();
      setWasTouched(false);

      let ratingParsed = Number(rating);

      if (validate(ratingParsed)) {
        setError("");
        const getMovie = await getDoc(movie);
        let { rating } = getMovie.data();
        let newRating = rating + 10 / 10;
        if (newRating > 10) {
          newRating = 10;
        }
        await updateDoc(movie, {
          rating: newRating,
        });
        ratingUpdated();
        onHideModal(false);
      } else {
        setError(errorMessage);
      }
    },
    [rating, onHideModal, movie, ratingUpdated]
  );

  return (
    <form onSubmit={handleUpdateRating}>
      <h2>Add rating</h2>
      <br />

      <Input
        type="number"
        label="Set rating"
        value={rating}
        onChange={setRating}
        setIfWasTouched={setWasTouched}
        onSetError={setError}
        onValidate={validate}
        onSetRating={setRating}
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
