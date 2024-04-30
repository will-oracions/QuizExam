import { FormControl, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // React.FormEvent<HTMLSelectElement>
  const handleChangeLanguage = (e: any) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <FormControl fullWidth style={{ background: "white" }}>
        {/* <InputLabel id="select-label">Select an Option</InputLabel> */}
        <Select
          style={{ height: "2rem" }}
          labelId="select-label"
          id="select"
          value={i18n.language}
          onChange={handleChangeLanguage}
          // label="Select an Option"
        >
          {/* <MenuItem value="">None</MenuItem> */}
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
      {/* <div>
      <select onChange={handleChangeLanguage} value={i18n.language}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div> */}
    </>
  );
};

export default LanguageSwitcher;
