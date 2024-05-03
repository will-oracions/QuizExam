import { useQuery } from "@tanstack/react-query";
import { Todo } from "../models/Todo";
import axios from "axios";

const getTodos = async () => {
  // await sleep(1000);
  const res = await axios.get<Todo[]>("/todos");
  return res.data;
};

const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: 3,
    gcTime: 0,
  });
};

export default useTodos;
