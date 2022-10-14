import { useReducer } from "react";
import Button from "./Button";
import MoviePicture from "./MoviePicture";

import classes from "./MoviePicturesSlider.module.css";

function checkIfElementIsLast(list, el) {
  if ([...list].pop().id === el.id) {
    return true;
  }
  return false;
}
function checkIfElementIsFirst(list, el) {
  if ([...list].shift().id === el.id) {
    return true;
  }
  return false;
}

function sliderReducerCallback(state, action) {
  switch (action.type) {
    case "SHOW_NEXT":
      if (!checkIfElementIsLast(state.allImages, action.payload.img)) {
        const findInd = state.allImages.findIndex(
          (el) => el.id === action.payload.img.id
        );
        state = {
          ...state,
          currentImage: state.allImages[findInd + 1],
        };
      } else {
        state = {
          ...state,
          currentImage: state.allImages[0],
        };
      }
      break;
    case "SHOW_PREV":
      if (!checkIfElementIsFirst(state.allImages, action.payload.img)) {
        const findInd = state.allImages.findIndex(
          (el) => el.id === action.payload.img.id
        );
        state = {
          ...state,
          currentImage: state.allImages[findInd - 1],
        };
      } else {
        state = {
          ...state,
          currentImage: state.allImages[state.allImages.length - 1],
        };
      }
      break;
    case "SHOW_PREV_BTN":
      state = {
        ...state,
        showPrevBtn: true,
        showNextBtn: false,
      };
      break;
    case "SHOW_NEXT_BTN":
      state = {
        ...state,
        showPrevBtn: false,
        showNextBtn: true,
      };
      break;

    default:
      break;
  }

  return state;
}

function MoviePicturesSlider(props) {
  const [sliderState, sliderDispatch] = useReducer(sliderReducerCallback, {
    currentImage: props.pictures[0],
    showSpinner: false,
    allImages: props.pictures,
    showPrevBtn: false,
    showNextBtn: false,
  });

  function handleMouseEnter(e) {
    if (e.target.nodeName === "BUTTON") return;

    const bounds = e.target.getBoundingClientRect();
    if (e.clientX - bounds.left < e.target.clientWidth / 2) {
      if (!sliderState.showPrevBtn) {
        sliderDispatch({ type: "SHOW_PREV_BTN" });
      }
    } else if (e.clientX - bounds.left > e.target.clientWidth / 2) {
      if (!sliderState.showNextBtn) {
        sliderDispatch({
          type: "SHOW_NEXT_BTN",
        });
      }
    }
  }

  return (
    <div className={classes["slider-container"]} onMouseMove={handleMouseEnter}>
      <Button
        onClick={() =>
          sliderDispatch({
            type: "SHOW_PREV",
            payload: { img: sliderState.currentImage },
          })
        }
        prev={true}
        showBtn={sliderState.showPrevBtn}
      >
        &larr;
      </Button>
      <MoviePicture
        nameOfMovie={props.name}
        src={sliderState.currentImage.url}
      />
      <Button
        onClick={() =>
          sliderDispatch({
            type: "SHOW_NEXT",
            payload: { img: sliderState.currentImage },
          })
        }
        prev={false}
        showBtn={sliderState.showNextBtn}
      >
        &rarr;
      </Button>
    </div>
  );
}

export default MoviePicturesSlider;
