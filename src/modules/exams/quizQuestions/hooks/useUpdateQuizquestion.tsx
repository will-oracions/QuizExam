import axios from "axios";
import { Quizquestion } from "../models/Quizquestion";
import { useMutation } from "@tanstack/react-query";

const updateQuizquestion = async (data: Quizquestion) => {
  const res = await axios.put<Quizquestion>(`/quizQuestions/${data.id}`, data);
  return res.data;
};

/**
 * Edit an quizQuestion from it's id
 * @returns edited quizQuestion
 */
const useUpdateQuizquestion = () => {
  return useMutation({
    // mutationKey: ["quizQuestion"],
    mutationFn: updateQuizquestion,
    retry: 3,
  });
};

export default useUpdateQuizquestion;
