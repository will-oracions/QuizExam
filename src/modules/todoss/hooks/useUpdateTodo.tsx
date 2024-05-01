import axios from "axios";
import { Todo } from "../models/Todo";
import { useMutation } from "@tanstack/react-query";

const updateTodo = async (data: Todo) => {
  const res = await axios.put<Todo>(`/todos/${data.id}`, axios);
  return res.data;
};

const useUpdateTodo = () => {
  return useMutation({
    // mutationKey: ["todo"],
    mutationFn: updateTodo,
    retry: 3,
  });
};

export default useUpdateTodo;
