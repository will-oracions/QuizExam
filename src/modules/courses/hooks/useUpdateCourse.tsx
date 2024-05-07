import axios from "axios";
import { Course } from "../models/Course";
import { useMutation } from "@tanstack/react-query";

const updateCourse = async (data: Course) => {
  const res = await axios.put<Course>(`/courses/${data.id}`, data);
  return res.data;
};

/**
 * Edit an course from it's id
 * @returns edited course
 */
const useUpdateCourse = () => {
  return useMutation({
    // mutationKey: ["course"],
    mutationFn: updateCourse,
    retry: 3,
  });
};

export default useUpdateCourse;
