import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { submitAnswers } from "./features/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import { Container, Typography, Button } from "@mui/material";
import styles from "./QuestionnaireApp.module.css";

const QuestionnaireContent = () => {
  const dispatch = useDispatch();
  const { questions, submitted } = useSelector((state) => state.questionnaire);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" align="center" gutterBottom>
        Анкета
      </Typography>

      {!submitted ? (
        <>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ display: "block", mx: "auto", mt: 3 }}
          >
            Отправить ответы
          </Button>
        </>
      ) : (
        <Result />
      )}
    </Container>
  );
};

const QuestionnaireApp = () => (
  <Provider store={store}>
    <QuestionnaireContent />
  </Provider>
);

export default QuestionnaireApp;

