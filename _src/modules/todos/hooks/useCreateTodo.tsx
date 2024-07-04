import axios from "axios";
import { Todo } from "../models/Todo";
import { useMutation } from "@tanstack/react-query";

const createTodo = async (data: Partial<Todo>) => {
  const res = await axios.post<Partial<Todo>>(`/todos`, data);
  return res.data;
};

const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
    retry: 3,
  });
};

export default useCreateTodo;
