import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Quizanswer } from "../models/Quizanswer";

const getQuizanswer = async (id: number) => {
  const res = await axios.get<Quizanswer>(`/quizAnswers/${id}`);
  return res.data;
};

const useQuizanswer = () => {
  return useMutation({
    // mutationKey: ["quizAnswer"],
    mutationFn: getQuizanswer,
    retry: 3,
  });
};

export default useQuizanswer;
