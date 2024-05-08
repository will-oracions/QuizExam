import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Quizanswer } from "../models/Quizanswer";
import { getData, toQuizanswerModel } from "../../../../api/mockAxios";

const getQuizanswers = async (): Promise<Quizanswer[]> => {
  const localData = getData();
  // console.log("Quizanswer: ", localData);
  if (localData) return localData.quizAnswers.map((a) => toQuizanswerModel(a));
  const res = await axios.get<Quizanswer[]>("/quizAnswers");
  return res.data;
};

/**
 * Get the list quizAnswers
 * @returns the list of quizAnswers
 */
const useQuizanswers = () => {
  return useQuery<Quizanswer[]>({
    queryKey: ["quizAnswers"],
    queryFn: getQuizanswers,
    retry: 3,
  });
};

export default useQuizanswers;
