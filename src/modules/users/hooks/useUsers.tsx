import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../models/User";
import { getData, toUserModel } from "../../../api/mockAxios";

const getUsers = async (): Promise<User[]> => {
  const localData = getData();
  // console.log("User: ", localData);
  if (localData) return localData.users.map((a) => toUserModel(a));
  const res = await axios.get<User[]>("/users");
  return res.data;
};

/**
 * Get the list users
 * @returns the list of users
 */
const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: 3,
  });
};

export default useUsers;
