import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Quiz } from "../models/Quiz";
import { getData, toQuizModel } from "../../../../api/mockAxios";

const getQuizs = async (): Promise<Quiz[]> => {
  const localData = getData();
  // console.log("Quiz: ", localData);
  if (localData) return localData.quizs.map((a) => toQuizModel(a));
  const res = await axios.get<Quiz[]>("/quizs");
  return res.data;
};

/**
 * Get the list quizs
 * @returns the list of quizs
 */
const useQuizs = () => {
  return useQuery<Quiz[]>({
    queryKey: ["quizs"],
    queryFn: getQuizs,
    retry: 3,
  });
};

export default useQuizs;
