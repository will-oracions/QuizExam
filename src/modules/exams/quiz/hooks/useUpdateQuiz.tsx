import axios from "axios";
import { Quiz } from "../models/Quiz";
import { useMutation } from "@tanstack/react-query";

const updateQuiz = async (data: Quiz) => {
  const res = await axios.put<Quiz>(`/quizs/${data.id}`, data);
  return res.data;
};

/**
 * Edit an quiz from it's id
 * @returns edited quiz
 */
const useUpdateQuiz = () => {
  return useMutation({
    // mutationKey: ["quiz"],
    mutationFn: updateQuiz,
    retry: 3,
  });
};

export default useUpdateQuiz;
