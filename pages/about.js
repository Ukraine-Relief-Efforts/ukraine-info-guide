import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import NewTabLink from "../components/NewTabLink";
import TwitterTimeline from "../components/TwitterTimeline";
import {
  TWITTER_URL,
  INSTAGRAM_URL,
  GITHUB_URL,
  ALARM_BOT_URL,
  LEAVE_UKRAINE_URL,
  EMAIL,
} from "../configs/constants";
import {
  TWITTER_SHIELD,
  INSTAGRAM_SHIELD,
  ALARM_BOT_SHIELD,
  LEAVE_UKRAINE_SHIELD
} from "../configs/constants";

const githubI18nKey = (() => {
  const t = (s) => s;
  return t("Join us <1>on Github</1>");
})();

const emailI18nKey = (() => {
  const t = (s) => s;
  return t("To submit feedback, please email <1>{{email}}</1>");
})();

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const Project = ({title, href, shield}) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-10 w-full">
      <NewTabLink href={href} className="link">{title}</NewTabLink>
      <div>
        <NewTabLink href={href}>
          <img src={shield} alt=""/>
        </NewTabLink>
      </div>
    </div>
  );
}

const AboutPage = () => {
  const {t} = useTranslation();

  return (
    <Layout hero={<Hero title={t("About us")}/>}>
      <p className="text-xl mt-5 mb-10">
        {t("Hi! We are Tech For Ukraine")} &#127482;&#127462;
      </p>
      <p className="p-5 max-w-[70ch]">
        {t("We're an international team of people working to fuel and organize the creation of software aimed at helping the Ukrainian people during the current war with Russia")}.&nbsp;
        {t("Our organization has developed technologies such as a missile/air alarm system, a website that encompasses information for Ukrainian refugees, and impending others")}.&nbsp;
        {t("Contribution to our open source technologies is valued")}.&nbsp;
        <Trans t={t} i18nKey={githubI18nKey}>
          For more information, find us on <a
            href={GITHUB_URL}
            className="link"
          >Github</a>
        </Trans>.
      </p>
      <p>
        <Trans t={t} i18nKey={emailI18nKey} email={EMAIL}>
          To submit feedback, please email <a
            href={"mailto:" + EMAIL}
            className="link"
          >{{email: EMAIL}}</a>
        </Trans>
      </p>

      <div className="mt-5 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center ">
            <div className="flex flex-col items-center mt-10 space-y-5">
              <p className="text-lg">
                {t("Socials")}:
              </p>
              <Project
                title="Twitter"
                href={TWITTER_URL}
                shield={TWITTER_SHIELD}
              />
              <Project
                title="Instagram"
                href={INSTAGRAM_URL}
                shield={INSTAGRAM_SHIELD}
              />
              <p className="text-lg">
                {t("Projects")}:
              </p>
              <Project
                title="Alarm Bot"
                href={ALARM_BOT_URL}
                shield={ALARM_BOT_SHIELD}
              />
              <Project
                title="LeaveUkraine"
                href={LEAVE_UKRAINE_URL}
                shield={LEAVE_UKRAINE_SHIELD}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <TwitterTimeline/>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default AboutPage;
