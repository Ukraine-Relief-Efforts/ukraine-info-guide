import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import NewTabLink from "../NewTabLink";
import { ANDROID_URL } from "../../configs/constants";

const AndroidButton = () => {
  let { locale } = useRouter();
  const { t } = useTranslation();

  if (locale === "kr")
    locale = "ko";
  else if (locale === "rs")
    locale = "sr";

  return (
    <p className="w-full">
      <NewTabLink href={ANDROID_URL}>
        <img
          className="mx-auto"
          style={{ maxHeight: "60px" }}
          height="60"
          alt={t("Get it on Google Play")}
          src={`https://play.google.com/intl/en_us/badges/static/images/badges/${locale}_badge_web_generic.png`}
        />
      </NewTabLink>
    </p>
  );
}

export default AndroidButton;
