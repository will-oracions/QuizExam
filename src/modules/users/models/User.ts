export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: UserGenderEnum;
  uniqueId?: string;
}

export enum UserFilterEnum {
  ALL = "1",
  // NOTHING_DONE = "2",
  // ALL_DONE = "3",
  // DONT_HAVE_TASK = "4",
}

export enum UserGenderEnum {
  MAN = "1",
  WOMEN = "2",
}
