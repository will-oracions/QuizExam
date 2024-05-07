export interface Course {
  id: number;
  name: string;
  description: string;
  level: CourseLevel;
  teacher: string;
}

export enum CourseFilterEnum {
  ALL = "1",
  // NOTHING_DONE = "2",
  // ALL_DONE = "3",
  // DONT_HAVE_TASK = "4",
}

export enum CourseLevel {
  L1 = "1",
  L2 = "2",
  L3 = "3",
}
