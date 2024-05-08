import axios from "axios";
import { Quizquestion } from "../models/Quizquestion";
import { useMutation } from "@tanstack/react-query";

const createQuizquestion = async (data: Partial<Quizquestion>) => {
  const res = await axios.post<Partial<Quizquestion>>(`/quizQuestions`, data);
  return res.data;
};

/**
 * Create quizQuestion
 * @returns created quizQuestion
 */
const useCreateQuizquestion = () => {
  return useMutation({
    mutationFn: createQuizquestion,
    retry: 3,
  });
};

export default useCreateQuizquestion;
