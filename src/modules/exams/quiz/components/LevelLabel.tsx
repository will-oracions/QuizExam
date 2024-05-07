import { useTranslation } from "react-i18next";

export interface Props {
  labelToTranslate: string;
}

/**
 * Build the template to render for specific label
 * translation
 * @param param0
 * @returns
 */
const LevelLabel = ({ labelToTranslate }: Props) => {
  const { t } = useTranslation();
  return <div>{t(labelToTranslate)}</div>;
};

export default LevelLabel;
