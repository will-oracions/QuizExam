import i18next from "i18next";
import GenderLabel from "../components/GenderLabel";
import { UserGenderEnum } from "../models/User";

/**
 * Convert gender enum to appropriate template
 * @param gender
 * @returns
 */
export const genderEnumToLabel = (
  gender: UserGenderEnum
): React.ReactNode => {
  switch (gender) {
    case UserGenderEnum.MAN:
      return <GenderLabel labelToTranslate="men" />;
    case UserGenderEnum.WOMEN:
      return <GenderLabel labelToTranslate="women" />;
  }
};

export const genderEnumToLabelText = (gender: UserGenderEnum): string => {
  switch (gender) {
    case UserGenderEnum.MAN:
      return i18next.t("men");
    case UserGenderEnum.WOMEN:
      return i18next.t("women");
  }
};
