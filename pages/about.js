import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import NewTabLink from "../components/NewTabLink";
import TwitterTimeline from "../components/TwitterTimeline";
import { GITHUB_URL } from "../configs/constants";

const githubI18nKey = (() => {
	const t = (s) => s;
	return t("Join us <1>on Github</1>");
})();

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const Project = ({ title, href, shield }) => {
  return (
    <div className="flex flex-row space-x-10">
      <NewTabLink href={href} className="link">{title}</NewTabLink>
      <div>
        <img src={shield} alt="" />
      </div>
    </div>
  );
}

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("About us")} />}>
      <p className="text-xl mt-5 mb-10">
        {t("Hi! We are Tech For Ukraine")} &#127482;&#127462;
      </p>
      <p className="p-5" style={{ maxWidth: "70ch" }}>
        {t("We're an international team of people working to fuel and organize the creation of software aimed at helping the Ukrainian people during the current war with Russia")}. {t("Our organization has developed technologies such as a missile/air alarm system, a website that encompasses information for Ukrainian refugees, and impending others")}. {t("Contribution to our open source technologies is valued")}. <Trans t={t} i18nKey={githubI18nKey}>
          For more information, find us on <a
            href={GITHUB_URL}
            className="link"
          >Github</a>.
        </Trans>
      </p>
      <div className="flex flex-col items-center mt-10 space-y-5">
        <p className="text-lg">
          {t("Projects")}:
        </p>
        <Project
          title="LeaveUkraine"
          href="https://leaveukraine.com"
          shield="https://img.shields.io/github/stars/Ukraine-Relief-Efforts/ukraine-info-guide?label=LeaveUkraine&style=flat-square"
        />
        <Project
          title="Alarm Bot"
          href="https://github.com/Ukraine-Relief-Efforts/AlarmBot"
          shield="https://img.shields.io/github/stars/Ukraine-Relief-Efforts/AlarmBot?label=AlarmBot&style=flat-square"
        />
        <p className="text-lg">
          {t("Socials")}:
        </p>
        <Project
          title="Twitter"
          href="https://twitter.com/techfor_"
          shield="https://img.shields.io/badge/techfor__-Follow%20Us-blue"
        />
        <Project
          title="Instagram"
          href="https://www.instagram.com/techfor.io/"
          shield="https://img.shields.io/badge/techfor.io-Follow%20Us-blue"
        />
      </div>
      <div className="mt-20">
        <TwitterTimeline />
      </div>
    </Layout>
  );
};

export default AboutPage;
