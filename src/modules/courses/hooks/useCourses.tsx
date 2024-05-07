import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Course } from "../models/Course";
import { getData, toCourseModel } from "../../../api/mockAxios";

const getCourses = async (): Promise<Course[]> => {
  const localData = getData();
  // console.log("Course: ", localData);
  if (localData) return localData.courses.map((a) => toCourseModel(a));
  const res = await axios.get<Course[]>("/courses");
  return res.data;
};

/**
 * Get the list courses
 * @returns the list of courses
 */
const useCourses = () => {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: getCourses,
    retry: 3,
  });
};

export default useCourses;
