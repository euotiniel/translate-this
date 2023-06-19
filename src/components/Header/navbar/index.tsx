import { Nav, List, ListItem } from "./style";
import { AiOutlineGithub } from "react-icons/ai";
import { HiTranslate } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const languages = ["en", "fr", "pt", "md"];
  const currentLanguageIndex = languages.indexOf(i18n.language);

  const handleLanguageChange = () => {
    const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    const nextLanguage = languages[nextLanguageIndex];
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Nav>
      <List>
        <ListItem>
          <a href="#!" onClick={handleLanguageChange}>
            <HiTranslate style={{ marginRight: "10px" }} />
            <span>{t("language")}</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://github.com/euotiniel/translate-this">
            <AiOutlineGithub />
          </a>
        </ListItem>
      </List>
    </Nav>
  );
}
