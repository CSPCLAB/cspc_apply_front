import { createContext, useReducer } from "react";

import axios from "axios";

const initialState = {
  basicContent: {
    name: "aa",
    phone: "",
    semester: "",
  },
  coverLetterContent: {
    introduce: "",
    motivate: "",
    to_do: "",
    etc: "",
  },
  timeTableContent: "",
};

const Context = createContext({
  //post
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASIC_CONTENT":
      return {
        ...state,
        basicContent: {
          state,
        },
        ...state.coverLetterContent,
        ...state.timeTableContent,
      };
    case "SET_COVERLETTER_CONTENT":
      return {
        ...state,
        ...state.basicContent,
        coverLetterContent: {
          state,
        },
        ...state.timeTableContent,
      };
    case "SET_TIME_TABLE_CONTENT":
      return {
        ...state,
        ...state.basicContent,
        ...state.coverLetterContent,
        timeTableContent: {
          state,
        },
      };
  }
};

const PostContent = () => {};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider, PostContent };
