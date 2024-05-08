import axios from "axios";
import { Quizanswer } from "../models/Quizanswer";
import { useMutation } from "@tanstack/react-query";

const createQuizanswer = async (data: Partial<Quizanswer>) => {
  const res = await axios.post<Partial<Quizanswer>>(`/quizAnswers`, data);
  return res.data;
};

/**
 * Create quizAnswer
 * @returns created quizAnswer
 */
const useCreateQuizanswer = () => {
  return useMutation({
    mutationFn: createQuizanswer,
    retry: 3,
  });
};

export default useCreateQuizanswer;
