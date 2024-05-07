import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Course } from "../models/Course";

const getCourse = async (id: number) => {
  const res = await axios.get<Course>(`/courses/${id}`);
  return res.data;
};

const useCourse = () => {
  return useMutation({
    // mutationKey: ["course"],
    mutationFn: getCourse,
    retry: 3,
  });
};

export default useCourse;
