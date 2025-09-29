import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuestionnaire } from "../features/questionnaireSlice";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);
  const dispatch = useDispatch();

  return (
    <Card sx={{ mt: 3, p: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Результат
        </Typography>
        <Typography variant="body1" gutterBottom>
          {result}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(resetQuestionnaire())}
        >
          Пройти снова
        </Button>
      </CardContent>
    </Card>
  );
};

export default Result;
