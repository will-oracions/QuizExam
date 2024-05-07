export interface Quiz {
  id: number;
  name: string;
  description: string;
  date: string;
  concepts: string[];
  status: QuizStatus;
  difficulty: QuizDifficulty;
}

export enum QuizFilterEnum {
  ALL = "1",
  // NOTHING_DONE = "2",
  // ALL_DONE = "3",
  // DONT_HAVE_TASK = "4",
}

export enum QuizLevel {
  L1 = "1",
  L2 = "2",
  L3 = "3",
}

export enum QuizStatus {
  SCHEDULED = "1",
  RUNNING = "2",
  CLOSE = "3",
}

export enum QuizDifficulty {
  LOW = "1",
  MEDIUM = "2",
  HARD = "3",
}
