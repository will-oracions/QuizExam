import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Assignee } from "../models/Assignee";
import { getData, toAssigneeModel } from "../../../api/mockAxios";

const getAssignees = async (): Promise<Assignee[]> => {
  const localData = getData();
  // console.log("Assignee: ", localData);
  if (localData) return localData.assignees.map((a) => toAssigneeModel(a));
  const res = await axios.get<Assignee[]>("/assignees");
  return res.data;
};

const useAssignees = () => {
  return useQuery<Assignee[]>({
    queryKey: ["assignees"],
    queryFn: getAssignees,
    retry: 3,
  });
};

export default useAssignees;
