import axios from "axios";
import { ITodo } from "../models/ITodo";
import { useMutation } from "@tanstack/react-query";

const updateTodo = async (data: ITodo) => {
  const res = await axios.put<ITodo>(`/todos/${data.id}`, axios);
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
