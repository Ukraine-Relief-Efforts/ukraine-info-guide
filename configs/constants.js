export const POLAND = "pl";
export const MOLDOVA = "md";
export const HUNGARY = "hu";
export const SLOVAKIA = "sk";
export const ROMANIA = "ro";
export const RUSSIA = "ru";
export const SERBIA = "rs";
export const GERMANY = "de";
export const SPAIN = "es";
export const ENGLAND = "en";
export const UKRAINE = "ua";
export const KOREAN = "kr";

export const domain = process.env.REACT_APP_AUTH0_DOMAIN;
export const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export const EMAIL = "ukraine@techfor.io";

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const BASE_URL = "https://uasafety.org/";
export const API_BASE_URL =
  "https://g11d3ghry9.execute-api.us-east-1.amazonaws.com/v1/";

export const TWITTER_HANDLE = "techfor_";
export const INSTAGRAM_HANDLE = "techfor_";
export const GITHUB_HANDLE = "Ukraine-Relief-Efforts";
export const REDDIT_HANDLE = "r/ukraine";
export const ALARM_BOT_HANDLE = "AlarmBot";

export const FONT_HANDLE = "Montserrat";
export const FONT_URL = `https://fonts.googleapis.com/css2?family=${FONT_HANDLE}:wght@300;400;600;700;800&display=swap`;

export const TWITTER_URL = `https://twitter.com/${TWITTER_HANDLE}`;
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;
export const GITHUB_URL = `https://github.com/${GITHUB_HANDLE}`;
export const REDDIT_URL = `https://reddit.com/${REDDIT_HANDLE}`;

export const TWITTER_SHIELD = `https://img.shields.io/badge/${TWITTER_HANDLE}_-Follow%20Us-blue`;
export const INSTAGRAM_SHIELD = `https://img.shields.io/badge/${INSTAGRAM_HANDLE}_-Follow%20Us-blue`;
export const ALARM_BOT_SHIELD = `https://img.shields.io/github/stars/${GITHUB_HANDLE}/${ALARM_BOT_HANDLE}?label=AlarmBot&style=flat-square`;
export const UA_SAFETY_SHIELD = `https://img.shields.io/github/stars/${GITHUB_HANDLE}/ukraine-info-guide?label=UASafety&style=flat-square`;

export const ALARM_BOT_URL = `https://github.com/${GITHUB_HANDLE}/${ALARM_BOT_HANDLE}`;

export const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.polemics.tech_for_ukraine&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
export const IOS_URL = "https://apps.apple.com/us/app/ukraine-safety-alerts/id1613373267";

export const TELEGRAM_LANGUAGES = [
  ENGLAND,
  UKRAINE,
  RUSSIA,
  POLAND,
  SERBIA,
  HUNGARY,
  GERMANY,
  SPAIN,
  ROMANIA,
];

export const getReportMissingPersonsLink = (router) => {
  const locales = {
    en: "en",
    ua: "uk",
    ru: "ru",
    it: "it",
    es: "es",
  };

  const locale = locales[router.locale] || "uk";

  return `https://oic.icmp.int/index.php?w=mp_reg&l=${locale}`;
}
