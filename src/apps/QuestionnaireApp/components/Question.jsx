import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaireSlice";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    (state) =>
      state.questionnaire.questions.find((q) => q.id === question.id)?.answer
  );

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ id: question.id, answer }));
  };

  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question.text}
        </Typography>
        <Stack direction="row" spacing={2}>
          {question.options.map((option) => (
            <Button
              key={option}
              variant={selectedAnswer === option ? "contained" : "outlined"}
              color={selectedAnswer === option ? "primary" : "inherit"}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Question;
