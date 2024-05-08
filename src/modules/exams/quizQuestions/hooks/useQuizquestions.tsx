import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Quizquestion } from "../models/Quizquestion";
import { getData, toQuizquestionModel } from "../../../../api/mockAxios";

const getQuizquestions = async (): Promise<Quizquestion[]> => {
  const localData = getData();
  // console.log("Quizquestion: ", localData);
  if (localData) return localData.quizQuestions.map((a) => toQuizquestionModel(a));
  const res = await axios.get<Quizquestion[]>("/quizQuestions");
  return res.data;
};

/**
 * Get the list quizQuestions
 * @returns the list of quizQuestions
 */
const useQuizquestions = () => {
  return useQuery<Quizquestion[]>({
    queryKey: ["quizQuestions"],
    queryFn: getQuizquestions,
    retry: 3,
  });
};

export default useQuizquestions;
