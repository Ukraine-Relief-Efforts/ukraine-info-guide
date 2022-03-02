import Link from "next/link";
import { localeToTelegramAlertChannel } from "../../utils";
import languages from "../../configs/languages";

const makeUrl = (locale) =>
  `https://t.me/LeaveUkraineAlerts${localeToTelegramAlertChannel(locale)}`;

const TelegramAlertLinks = ({ title }) => (
  <div className="text-center mt-5">
    <p>{title}</p>
    <div className="flex flex-row flex-wrap mt-3 justify-center">
      {
        languages.map(({ value, name }) =>
          <a className="link m-3" href={makeUrl(value)}>{name}</a>
        )
      }
    </div>
  </div>
);

export default TelegramAlertLinks;
