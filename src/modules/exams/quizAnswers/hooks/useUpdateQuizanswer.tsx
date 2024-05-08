import axios from "axios";
import { Quizanswer } from "../models/Quizanswer";
import { useMutation } from "@tanstack/react-query";

const updateQuizanswer = async (data: Quizanswer) => {
  const res = await axios.put<Quizanswer>(`/quizAnswers/${data.id}`, data);
  return res.data;
};

/**
 * Edit an quizAnswer from it's id
 * @returns edited quizAnswer
 */
const useUpdateQuizanswer = () => {
  return useMutation({
    // mutationKey: ["quizAnswer"],
    mutationFn: updateQuizanswer,
    retry: 3,
  });
};

export default useUpdateQuizanswer;
