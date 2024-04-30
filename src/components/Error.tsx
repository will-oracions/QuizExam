import { Box, Typography } from "@mui/material";
import Header from "./Header";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box padding="20px">
        <Typography fontSize={24}>{t("pageNotFoundMessage")}</Typography>
      </Box>
    </>
  );
};

export default Error;
