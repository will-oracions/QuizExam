import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../models/Todo";

const getTodo = async (id: number) => {
  const res = await axios.get<Todo>(`/todos/${id}`);
  return res.data;
};

const useTodo = () => {
  return useMutation({
    // mutationKey: ["todo"],
    mutationFn: getTodo,
    retry: 3,
  });
};

export default useTodo;
