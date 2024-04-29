import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../models/Todo";

const getTodos = async () => {
  const res = await axios.get<Todo>("/todos");
  return res.data;
};

const useTodos = () => {
  return useQuery({ queryKey: ["todos"], queryFn: getTodos, retry: 3 });
};

export default useTodos;
