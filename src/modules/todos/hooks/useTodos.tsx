import { useQuery } from "@tanstack/react-query";
import { Todo } from "../models/Todo";
import axios from "axios";
import { getData, toTodoModel } from "../../../api/mockAxios";

const getTodos = async (): Promise<Todo[]> => {
  // console.log("Get the todos");
  const localData = getData();
  // console.log(localData);
  if (localData) return localData.todos.map((t) => toTodoModel(t));
  const res = await axios.get<Todo[]>("/todos");
  return res.data;
};

const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: 3,
  });
};

export default useTodos;
