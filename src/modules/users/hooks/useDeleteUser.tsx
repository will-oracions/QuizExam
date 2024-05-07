import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteUser = async (id: number) => {
  const res = await axios.delete<void>(`/users/${id}`);
  return res.data;
};

/**
 * Delete user
 * @returns nothing, 204 http status
 */
const useDeleteUser = () => {
  return useMutation({
    // mutationKey: ["user"],
    mutationFn: deleteUser,
    retry: 3,
  });
};

export default useDeleteUser;
