import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Quiz } from "../models/Quiz";

const getQuiz = async (id: number) => {
  const res = await axios.get<Quiz>(`/quizs/${id}`);
  return res.data;
};

const useQuiz = () => {
  return useMutation({
    // mutationKey: ["quiz"],
    mutationFn: getQuiz,
    retry: 3,
  });
};

export default useQuiz;
