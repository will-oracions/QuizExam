import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteCourse = async (id: number) => {
  const res = await axios.delete<void>(`/courses/${id}`);
  return res.data;
};

/**
 * Delete course
 * @returns nothing, 204 http status
 */
const useDeleteCourse = () => {
  return useMutation({
    // mutationKey: ["course"],
    mutationFn: deleteCourse,
    retry: 3,
  });
};

export default useDeleteCourse;
