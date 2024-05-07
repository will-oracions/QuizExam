import { Course } from "../models/Course";

export const toCourseExportable = (
  courses: Course[]
): Partial<Course & { genderLabel: string }>[] => {
  return courses.map((item) => {
    const { ...rest } = item;
    return { ...rest };
  });
};
