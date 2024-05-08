import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Quizquestion } from "../models/Quizquestion";

const getQuizquestion = async (id: number) => {
  const res = await axios.get<Quizquestion>(`/quizQuestions/${id}`);
  return res.data;
};

const useQuizquestion = () => {
  return useMutation({
    // mutationKey: ["quizQuestion"],
    mutationFn: getQuizquestion,
    retry: 3,
  });
};

export default useQuizquestion;
