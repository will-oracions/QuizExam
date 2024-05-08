import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteQuizanswer = async (id: number) => {
  const res = await axios.delete<void>(`/quizAnswers/${id}`);
  return res.data;
};

/**
 * Delete quizAnswer
 * @returns nothing, 204 http status
 */
const useDeleteQuizanswer = () => {
  return useMutation({
    // mutationKey: ["quizAnswer"],
    mutationFn: deleteQuizanswer,
    retry: 3,
  });
};

export default useDeleteQuizanswer;
