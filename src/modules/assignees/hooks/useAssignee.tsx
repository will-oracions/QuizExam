import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Assignee } from "../models/Assignee";

const getAssignee = async (id: number) => {
  const res = await axios.get<Assignee>(`/assignees/${id}`);
  return res.data;
};

const useAssignee = () => {
  return useMutation({
    // mutationKey: ["assignee"],
    mutationFn: getAssignee,
    retry: 3,
  });
};

export default useAssignee;
