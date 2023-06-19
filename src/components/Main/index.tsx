import { useTranslation } from "react-i18next";
import { Main } from "./style";

export default function index() {
  const { t } = useTranslation();

  return (
    <Main>
      <h1>{t("title")}</h1>
      <p>{t("firstp")}</p>
      <p>{t("secondp")}</p>
      <h2>{t("subtitle")}</h2>
      <p>{t("first")}</p>
      <p>{t("second")}</p>
      <p>{t("third")}</p>
      <p>{t("fourth")}</p>
    </Main>
  );
}
