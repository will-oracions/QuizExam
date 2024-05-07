import axios from "axios";
import { Quiz } from "../models/Quiz";
import { useMutation } from "@tanstack/react-query";

const createQuiz = async (data: Partial<Quiz>) => {
  const res = await axios.post<Partial<Quiz>>(`/quizs`, data);
  return res.data;
};

/**
 * Create quiz
 * @returns created quiz
 */
const useCreateQuiz = () => {
  return useMutation({
    mutationFn: createQuiz,
    retry: 3,
  });
};

export default useCreateQuiz;
