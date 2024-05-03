import GenderLabel from "../components/GenderLabel";
import { AssigneeGenderEnum } from "../models/Assignee";

export const genderEnumToLabel = (
  gender: AssigneeGenderEnum
): React.ReactNode => {
  switch (gender) {
    case AssigneeGenderEnum.MAN:
      return <GenderLabel labelToTranslate="men" />;
    case AssigneeGenderEnum.WOMEN:
      return <GenderLabel labelToTranslate="women" />;
  }
};
