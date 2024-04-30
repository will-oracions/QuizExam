import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Assignee } from "../models/Assignee";

const getAssignees = async () => {
  const res = await axios.get<Assignee>("/assignees");
  return res.data;
};

const useAssignees = () => {
  return useQuery({ queryKey: ["assignees"], queryFn: getAssignees, retry: 3 });
};

export default useAssignees;
