import axios from "axios";
import { User } from "../models/User";
import { useMutation } from "@tanstack/react-query";

const updateUser = async (data: User) => {
  const res = await axios.put<User>(`/users/${data.id}`, data);
  return res.data;
};

/**
 * Edit an user from it's id
 * @returns edited user
 */
const useUpdateUser = () => {
  return useMutation({
    // mutationKey: ["user"],
    mutationFn: updateUser,
    retry: 3,
  });
};

export default useUpdateUser;
