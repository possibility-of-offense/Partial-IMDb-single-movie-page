import classes from "./MovieRatingInfo.module.css";

import Flex from "../../UI/Flex";
import MovieRatingInfoBox from "./MovieRatingInfoBox";
import { useContext, useState } from "react";
import MovieContext from "../../../context/movie-context";
import MovieHeaderModalForm from "./MovieHeaderModalForm";
import MovieHeaderAddNewRating from "./MovieHeaderAddNewRating";
import MovieHeaderShowPopularityPersons from "./MovieHeaderShowPopularityPersons";

function MovieRatingInfo() {
  const movieContext = useContext(MovieContext);
  const [showModal, setShowModal] = useState({ show: false, form: null });

  function handleTogglingModalVisibility(type) {
    setShowModal((prev) => ({
      show: !prev.show,
      component: type,
    }));
  }

  return (
    <Flex className={classes["rating-info"]}>
      {showModal.show && showModal.component === "add-new-rating" && (
        <MovieHeaderModalForm onHideModal={setShowModal}>
          <MovieHeaderAddNewRating onHideModal={setShowModal} />
        </MovieHeaderModalForm>
      )}
      {showModal.show && showModal.component === "popularity" && (
        <MovieHeaderModalForm onHideModal={setShowModal} removePaddings={true}>
          <MovieHeaderShowPopularityPersons onHideModal={setShowModal} />
        </MovieHeaderModalForm>
      )}
      <MovieRatingInfoBox
        title="IMDb RATING"
        classes={`ipc-icon ipc-icon--star sc-7ab21ed2-4 hLFdut ${classes["yellow-icon"]}`}
        id="iconContext-star"
        path="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
        onClick={handleTogglingModalVisibility.bind(null, "add-new-rating")}
      >
        <div className={classes.numbers}>
          <span>{movieContext.movie.rating}</span>
          <span>/10</span>
        </div>
      </MovieRatingInfoBox>
      <MovieRatingInfoBox
        title="YOUR RATING"
        classes={`ipc-icon ipc-icon--star-border sc-ab12c7bd-4 cNHRQT ${classes["blue-icon"]}`}
        id="iconContext-star-border"
        path="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        onClick={handleTogglingModalVisibility.bind(null, "add-new-rating")}
      >
        <div className={`${classes["blue-text"]}`}>
          <p>Rate</p>
        </div>
      </MovieRatingInfoBox>
      <MovieRatingInfoBox
        title="POPULARITY"
        classes={`ipc-icon ipc-icon--popularity-neutral sc-edc76a2-5 bzOzjI transparent-text-color-degree-1`}
        id="iconContext-popularity-neutral"
        path="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4 0-7.4-3-8-6.9l10-.1v2c0 .5.6.7 1 .4l3-3c.2-.2.2-.5 0-.7l-3-3c-.4-.4-.9-.1-.9.3v2h-10c.4-4 3.8-7 7.9-7 4.4 0 8 3.6 8 8s-3.6 8-8 8z"
        onClick={handleTogglingModalVisibility.bind(null, "popularity")}
        toDisable={
          !Array.isArray(movieContext.movie.popularity) ||
          movieContext.movie.popularity.length === 0
        }
        msgForAlert="No popularity info yet!"
      >
        <div
          className={`transparent-text-color-degree-1 ${classes.popularity}`}
        >
          <p>{movieContext.movie.popularity.length || 0}</p>
        </div>
      </MovieRatingInfoBox>
    </Flex>
  );
}

export default MovieRatingInfo;
