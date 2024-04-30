import axios from "axios";
import { Assignee } from "../models/Assignee";
import { useMutation } from "@tanstack/react-query";

const deleteAssignee = async (id: number) => {
  const res = await axios.delete<Assignee>(`/assignees/${id}`);
  return res.data;
};

const useDeleteAssignee = () => {
  return useMutation({
    // mutationKey: ["assignee"],
    mutationFn: deleteAssignee,
    retry: 3,
  });
};

export default useDeleteAssignee;
