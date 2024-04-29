import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("appDescription")}</p>
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
