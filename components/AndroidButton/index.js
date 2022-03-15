import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import NewTabLink from "../NewTabLink";

const AndroidButton = () => {
  let { locale } = useRouter();
  const { t } = useTranslation();

  if (locale === "kr")
    locale = "ko";
  else if (locale === "rs")
    locale = "sr";

  return (
    <p className="w-full">
      <NewTabLink
        href="https://play.google.com/store/apps/details?id=com.polemics.tech_for_ukraine&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <img
          className="mx-auto"
          width="140"
          alt={t("Get it on Google Play")}
          src={`https://play.google.com/intl/en_us/badges/static/images/badges/${locale}_badge_web_generic.png`}
        />
      </NewTabLink>
    </p>
  );
}

export default AndroidButton;
