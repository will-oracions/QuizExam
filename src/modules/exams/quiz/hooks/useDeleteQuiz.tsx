import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteQuiz = async (id: number) => {
  const res = await axios.delete<void>(`/quizs/${id}`);
  return res.data;
};

/**
 * Delete quiz
 * @returns nothing, 204 http status
 */
const useDeleteQuiz = () => {
  return useMutation({
    // mutationKey: ["quiz"],
    mutationFn: deleteQuiz,
    retry: 3,
  });
};

export default useDeleteQuiz;
