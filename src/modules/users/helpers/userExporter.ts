import { User } from "../models/User";
import { genderEnumToLabelText } from "./EnumParsers";

export const toUserExportable = (
  users: User[]
): Partial<User & { genderLabel: string }>[] => {
  return users.map((item) => {
    const { gender, ...rest } = item;
    return { ...rest, genderLabel: genderEnumToLabelText(gender) };
  });
};
