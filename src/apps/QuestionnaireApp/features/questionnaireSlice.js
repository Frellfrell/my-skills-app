import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  questions: [
    { id: 1, text: "Вам нравится программировать?", options: ["Да", "Нет"], answer: null },
    { id: 2, text: "Вы используете React?", options: ["Да", "Нет"], answer: null },
    { id: 3, text: "Хотите изучить Redux Toolkit?", options: ["Да", "Нет"], answer: null },
  ],
  submitted: false,
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const q = state.questions.find((question) => question.id === id);
      if (q) q.answer = answer;
    },
    submitAnswers: (state) => {
      state.submitted = true;
      const yesCount = state.questions.filter((q) => q.answer === "Да").length;
      state.result =
        yesCount > state.questions.length / 2
          ? "Отлично! У вас позитивные ответы 🚀"
          : "Спасибо за участие! 👍";
    },
    resetQuestionnaire: (state) => {
      state.questions.forEach((q) => (q.answer = null));
      state.submitted = false;
      state.result = null;
    },
  },
});

export const { answerQuestion, submitAnswers, resetQuestionnaire } =
  questionnaireSlice.actions;

export default questionnaireSlice.reducer;
