import { useTranslation } from "next-i18next";
import FooterHeader from "./FooterHeader";
import FooterLink from "./FooterLink";
import NewTabLink from "../NewTabLink";
import {
  REDDIT_URL,
  TWITTER_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
} from "../../configs/constants";
import features from "../../configs/features";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="max-w-6xl mx-auto">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div>
              <FooterHeader>{t("Useful links")}</FooterHeader>
              <FooterLink href="resources">{t("Resources")}</FooterLink>
              <FooterLink href="border-information">{t("Border Info")}</FooterLink>
              <FooterLink href={REDDIT_URL}>{t("r/ukraine")}</FooterLink>
              {features.hostARefugee &&
                <FooterLink href="/#">{t("Host a refugee")}</FooterLink>}
            </div>
            <div>
              <FooterHeader>{t("Contacts")}</FooterHeader>
              <FooterLink href={TWITTER_URL}>Twitter</FooterLink>
              <FooterLink href={INSTAGRAM_URL}>Instagram</FooterLink>
              <FooterLink href={GITHUB_URL}>Github</FooterLink>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-8 bg-gray-200">
        <span>Copyright &copy; {new Date().getFullYear()} </span>
        <NewTabLink className="text-gray-600 font-semibold" href={TWITTER_URL}>
          Tech For
        </NewTabLink>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
