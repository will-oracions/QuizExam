import axios from "axios";
import { User } from "../models/User";
import { useMutation } from "@tanstack/react-query";

const createUser = async (data: Partial<User>) => {
  const res = await axios.post<Partial<User>>(`/users`, data);
  return res.data;
};

/**
 * Create user
 * @returns created user
 */
const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    retry: 3,
  });
};

export default useCreateUser;
