import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import NewTabLink from "../NewTabLink";
import { IOS_URL } from "../../configs/constants";

const IosButton = () => {
  let { locale } = useRouter();
  const { t } = useTranslation();

  if (locale === "ua" || locale === "rs")
    locale = "ru";

  return (
    <p className="w-full">
      <NewTabLink href={IOS_URL}>
        <img
          className="mx-auto"
          style={{ maxHeight: "60px" }}
          alt={t("Download on the App Store")}
          src={`/AppStoreIcons/app_store_${locale}.svg`}
        />
      </NewTabLink>
    </p>
  );
}

export default IosButton;
