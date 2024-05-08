import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteQuizquestion = async (id: number) => {
  const res = await axios.delete<void>(`/quizQuestions/${id}`);
  return res.data;
};

/**
 * Delete quizQuestion
 * @returns nothing, 204 http status
 */
const useDeleteQuizquestion = () => {
  return useMutation({
    // mutationKey: ["quizQuestion"],
    mutationFn: deleteQuizquestion,
    retry: 3,
  });
};

export default useDeleteQuizquestion;
