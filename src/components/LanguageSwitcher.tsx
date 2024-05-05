import { FormControl, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (e: any) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <FormControl fullWidth style={{ background: "white" }}>
        <Select
          size="small"
          style={{ height: "2rem" }}
          labelId="select-label"
          id="select"
          value={i18n.language}
          onChange={handleChangeLanguage}>
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default LanguageSwitcher;
