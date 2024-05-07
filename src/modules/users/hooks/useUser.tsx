import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../models/User";

const getUser = async (id: number) => {
  const res = await axios.get<User>(`/users/${id}`);
  return res.data;
};

const useUser = () => {
  return useMutation({
    // mutationKey: ["user"],
    mutationFn: getUser,
    retry: 3,
  });
};

export default useUser;
