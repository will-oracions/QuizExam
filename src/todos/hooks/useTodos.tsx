import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ITodo } from "../models/ITodo";

const getTodos = async () => {
  const res = await axios.get<ITodo>("/todos");
  return res.data;
};

const useTodos = () => {
  return useQuery({ queryKey: ["todos"], queryFn: getTodos, retry: 3 });
};

export default useTodos;
