import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  color: string;
  labelToTranslate: string;
}
const ProrityLabel = ({ color, labelToTranslate }: Props) => {
  const { t } = useTranslation();
  return (
    <Typography fontSize="1rem" style={{ color }}>
      {t(labelToTranslate)}
    </Typography>
  );
};

export default ProrityLabel;
