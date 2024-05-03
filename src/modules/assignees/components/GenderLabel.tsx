import { useTranslation } from "react-i18next";

export interface Props {
  labelToTranslate: string;
}
const GenderLabel = ({ labelToTranslate }: Props) => {
  const { t } = useTranslation();
  return <div>{t(labelToTranslate)}</div>;
};

export default GenderLabel;
