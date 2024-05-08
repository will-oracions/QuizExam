import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  TextField,
  Button,
} from "@mui/material";

interface Answer {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface ShowMoreProps {
  questions: Question[];
}

const ShowMore: React.FC<ShowMoreProps> = ({ questions }) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(
    null
  );
  const [editedAnswer, setEditedAnswer] = useState<string>("");

  const handleQuestionClick = (questionId: number) => {
    if (expandedQuestionId === questionId) {
      setExpandedQuestionId(null);
    } else {
      setExpandedQuestionId(questionId);
    }
  };

  const handleAnswerEdit = (answerText: string) => {
    setEditedAnswer(answerText);
  };

  const handleSaveEdit = (questionId: number, answerId: number) => {
    // Vous pouvez implémenter la logique pour sauvegarder la réponse modifiée ici
    console.log(
      `Question ${questionId}, Answer ${answerId}, Edited text: ${editedAnswer}`
    );
    setEditedAnswer("");
  };

  return (
    <List>
      {questions.map((question) => (
        <React.Fragment key={question.id}>
          <ListItem button onClick={() => handleQuestionClick(question.id)}>
            <ListItemText primary={question.text} />
          </ListItem>
          <Collapse
            in={expandedQuestionId === question.id}
            timeout="auto"
            unmountOnExit>
            <List component="div" disablePadding>
              {question.answers.map((answer) => (
                <ListItem key={answer.id} button>
                  <ListItemText
                    primary={answer.text}
                    onClick={() => handleAnswerEdit(answer.text)}
                  />
                  <Collapse in={editedAnswer !== ""}>
                    <TextField
                      label="Edit Answer"
                      variant="outlined"
                      value={editedAnswer}
                      onChange={(e) => setEditedAnswer(e.target.value)}
                    />
                    <Button
                      onClick={() => handleSaveEdit(question.id, answer.id)}>
                      Save
                    </Button>
                  </Collapse>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

const QuizCreator: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [answerIdCounter, setAnswerIdCounter] = useState<number>(0);

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== "") {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          id: prevQuestions.length + 1,
          text: currentQuestion,
          answers: currentAnswers,
        },
      ]);
      setCurrentQuestion("");
      setCurrentAnswers([]);
    }
  };

  const handleAddAnswer = () => {
    if (currentAnswer.trim() !== "") {
      setCurrentAnswers((prevAnswers) => [
        ...prevAnswers,
        { id: answerIdCounter, text: currentAnswer },
      ]);
      setCurrentAnswer("");
      setAnswerIdCounter((prevCounter) => prevCounter + 1);
    }
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAnswer(event.target.value);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          value={currentQuestion}
          onChange={handleQuestionChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Add Answer"
          variant="outlined"
          fullWidth
          value={currentAnswer}
          onChange={handleAnswerChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddAnswer}>
          Add Answer
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleAddQuestion}>
          Add Question
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ShowMore questions={questions} />
      </Grid>
    </Grid>
  );
};

export default QuizCreator;
