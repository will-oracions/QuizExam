import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.currentTarget.value);
  };

  return (
    <div>
      <select onChange={handleChangeLanguage} value={i18n.language}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
