"use client";
import { useReducer, useEffect } from "react";
import Viewer from "viewerjs";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import clsx from "clsx";

export const ACTIONS = {
  CHANGE_WORK_STATE_LANG_AND_DEV: "CHANGE_WORK_STATE_LANG_AND_DEV",
  CHANGE_WORK_STATE_LANG: "CHANGE_WORK_STATE_LANG",
  CHANGE_WORK_STATE_DEVICE: "CHANGE_WORK_STATE_DEVICE",
  CHANGE_WORK_STATE_ISFADING: "CHANGE_WORK_STATE_ISFADING",
  SET_BEFORE_CHANGE_CALL_BACK: "SET_BEFORE_CHANGE_CALL_BACK",
  CHANGE_CURRENT_SLIDE_IDX: "CHANGE_CURRENT_SLIDE_IDX",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_WORK_STATE_LANG_AND_DEV:
      return {
        ...state,
        workState: {
          ...state.workState,
          languageRadio: action.payload.lang,
          device: action.payload.device,
          isFading: true,
        },
      };
    case ACTIONS.CHANGE_WORK_STATE_LANG:
      return {
        ...state,
        workState: {
          ...state.workState,
          languageRadio: action.payload,
          isFading: true,
        },
      };
    case ACTIONS.CHANGE_WORK_STATE_DEVICE:
      return {
        ...state,
        workState: {
          ...state.workState,
          device: action.payload,
          isFading: true,
        },
      };
    case ACTIONS.CHANGE_WORK_STATE_ISFADING:
      return {
        ...state,
        workState: {
          ...state.workState,
          isFading: action.payload,
        },
      };

    case ACTIONS.SET_BEFORE_CHANGE_CALL_BACK:
      return {
        ...state,
        personalState: {
          ...state.personalState,
          sliderSettings: {
            ...state.personalState.sliderSettings,
            beforeChange: action.payload,
          },
        },
      };

    case ACTIONS.CHANGE_CURRENT_SLIDE_IDX:
      return {
        ...state,
        personalState: {
          ...state.personalState,
          currentSlideIdx: action.payload,
        },
      };
    default:
      return state;
  }
}

function NextArrowSample(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(
        className,
        "text-black hover:!text-black hover:bg-current dark:text-white text-6xl"
      )}
      style={style}
      onClick={onClick}
    >
      <RiArrowDropRightLine />
    </div>
  );
}

function PrevArrowSample(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(
        className,
        "text-black hover:!text-black hover:bg-current dark:text-white text-6xl"
      )}
      style={style}
      onClick={onClick}
    >
      <RiArrowDropLeftLine />
    </div>
  );
}

export default function useWorkModalHook(open, selectedProject) {
  const [state, dispatch] = useReducer(reducer, {
    workState: selectedProject?.chips.includes("Work")
      ? {
          languageRadio: "EN",
          device: "desk",
          images: selectedProject.images,
          isFading: true, //for opacity ani
        }
      : undefined,
    personalState: selectedProject?.chips.includes("Personal")
      ? {
          ...selectedProject,
          sliderSettings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            variableWidth: true,
            nextArrow: <NextArrowSample />,
            prevArrow: <PrevArrowSample />,
            responsive: [
              {
                breakpoint: 990,
                settings: { variableWidth: false },
              },
            ],
          },
          currentSlideIdx: 0,
        }
      : undefined,
    projectStack: selectedProject.stack,
  });

  const changeLanguageOrDevice = (lang, device) => {
    if (lang && device) {
      dispatch({
        type: ACTIONS.CHANGE_WORK_STATE_LANG_AND_DEV,
        payload: { lang, device },
      });
    } else if (lang && !device) {
      dispatch({
        type: ACTIONS.CHANGE_WORK_STATE_LANG,
        payload: lang,
      });
    } else if (device && !lang) {
      dispatch({
        type: ACTIONS.CHANGE_WORK_STATE_DEVICE,
        payload: device,
      });
    }
  };

  // for opacity animation
  useEffect(() => {
    if (state.workState?.isFading) {
      //   dispatch({ type: ACTIONS.CHANGE_WORK_STATE_ISFADING, payload: true }); // start the fade animation

      setTimeout(() => {
        dispatch({ type: ACTIONS.CHANGE_WORK_STATE_ISFADING, payload: false }); // endthe fade animation
      }, 1000);
    }
  }, [state.workState?.isFading]);

  // disable scroll when modal is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden"; // remove scroll
      document.body.style.overflow = "hidden"; // for older browsers (optional)

      const imagesEle = document.getElementById("images");
      if (imagesEle) {
        console.log("entered?!?!?");

        const gallery = new Viewer(imagesEle, {
          inline: false,
          viewed() {
            // viewer.zoomTo(1);
          },
          keyboard: 0,
          rotatable: 0,
          title: 0,
          scalable: 0,
        });
      }
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      changeLanguageOrDevice("EN", "desk");
      return;
    }
  }, [open]);

  useEffect(() => {
    if (
      state.personalState &&
      !state.personalState?.sliderSettings?.beforeChange
    ) {
      const handleOnSlideChange = (current, next) => {
        dispatch({ type: ACTIONS.CHANGE_CURRENT_SLIDE_IDX, payload: next });
      };
      dispatch({
        type: ACTIONS.SET_BEFORE_CHANGE_CALL_BACK,
        payload: handleOnSlideChange,
      });
    }
  }, [state.personalState?.sliderSettings]);

  return { state, changeLanguageOrDevice };
}
