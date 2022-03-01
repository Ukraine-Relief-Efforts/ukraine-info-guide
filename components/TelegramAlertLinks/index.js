import Link from "next/link";
import { localeToTelegramAlertChannel } from "../../utils";
import languages from "../../configs/languages";

const makeUrl = (locale) =>
  `https://t.me/LeaveUkraineAlerts${localeToTelegramAlertChannel(locale)}`;

const TelegramAlertLinks = ({ title }) => (
  <div className="text-center mt-5">
    <p>{title}</p>
    <div className="flex flex-row space-x-4 mt-3">
      {
        languages.map(({ value, name }) =>
          <a className="link" href={makeUrl(value)}>{name}</a>
        )
      }
    </div>
  </div>
);

export default TelegramAlertLinks;
