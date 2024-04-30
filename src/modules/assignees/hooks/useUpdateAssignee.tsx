import axios from "axios";
import { Assignee } from "../models/Assignee";
import { useMutation } from "@tanstack/react-query";

const updateAssignee = async (data: Assignee) => {
  const res = await axios.put<Assignee>(`/assignees/${data.id}`, axios);
  return res.data;
};

const useUpdateAssignee = () => {
  return useMutation({
    // mutationKey: ["assignee"],
    mutationFn: updateAssignee,
    retry: 3,
  });
};

export default useUpdateAssignee;
