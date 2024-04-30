import axios from "axios";
import { Assignee } from "../models/Assignee";
import { useMutation } from "@tanstack/react-query";

const createAssignee = async (data: Partial<Assignee>) => {
  const res = await axios.post<Partial<Assignee>>(`/assignees`, data);
  return res.data;
};

const useCreateAssignee = () => {
  return useMutation({
    mutationFn: createAssignee,
    retry: 3,
  });
};

export default useCreateAssignee;
