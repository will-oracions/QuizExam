import axios from "axios";
import { Course } from "../models/Course";
import { useMutation } from "@tanstack/react-query";

const createCourse = async (data: Partial<Course>) => {
  const res = await axios.post<Partial<Course>>(`/courses`, data);
  return res.data;
};

/**
 * Create course
 * @returns created course
 */
const useCreateCourse = () => {
  return useMutation({
    mutationFn: createCourse,
    retry: 3,
  });
};

export default useCreateCourse;
