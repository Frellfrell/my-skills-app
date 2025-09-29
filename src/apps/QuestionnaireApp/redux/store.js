import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "../features/questionnaireSlice";

const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});

export default store;
