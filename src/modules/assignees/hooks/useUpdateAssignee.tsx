import axios from "axios";
import { Assignee } from "../models/Assignee";
import { useMutation } from "@tanstack/react-query";

const updateAssignee = async (data: Assignee) => {
  const res = await axios.put<Assignee>(`/assignees/${data.id}`, data);
  return res.data;
};

/**
 * Edit an assignee from it's id
 * @returns edited assignee
 */
const useUpdateAssignee = () => {
  return useMutation({
    // mutationKey: ["assignee"],
    mutationFn: updateAssignee,
    retry: 3,
  });
};

export default useUpdateAssignee;
