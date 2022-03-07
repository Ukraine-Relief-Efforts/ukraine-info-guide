import { useState } from "react";
import { useRouter } from "next/router";
import { localeToTelegramAlertChannel } from "../../utils";
import languages from "../../configs/languages";
import { TELEGRAM_LANGUAGES } from "../../configs/constants";

const channels = languages.filter(({ value }) =>
  TELEGRAM_LANGUAGES.includes(value));

const makeUrl = (locale) =>
  `https://t.me/${localeToTelegramAlertChannel(locale)}`;

const ChannelLink = ({ value, name, className }) => (
  <div className="m-3">
    <a className={`link ${className ?? ""}`} href={makeUrl(value)}>
      {name}
    </a>
  </div>
);

const AllChannels = ({ title }) => (
  <div className="flex flex-col mt-3">
    <p>{title}</p>
    <div className="flex flex-row flex-wrap justify-center">
      {
        channels.map((locale, index) =>
          <ChannelLink key={index} {...locale} />)
      }
    </div>
  </div>
);

const ChannelsWithDefault = ({ defaultChannel, title }) => {
  const [showAll, setShowAll] = useState(false);

  const toggle = () => setShowAll(!showAll);

  return (
    <div className="mb-10">
      <ChannelLink className="font-xl font-semibold" {...defaultChannel} />
      <p className="mt-8">
        <a
          className="text-gray-600 cursor-pointer text-sm select-none"
          onClick={toggle}
        >
          {title} {showAll ? <>&#9662;</> : <>&#9664;</>}
        </a>
      </p>
      {showAll && <AllChannels />}
    </div>
  );
}

const TelegramAlertLinks = ({ title }) => {
  const { locale } = useRouter();

  const defaultChannel = channels.find(({ value }) => value === locale);

  return (
    <div className="text-center mt-5">
      {
        defaultChannel
          ? <ChannelsWithDefault
              defaultChannel={defaultChannel}
              title={title}
            />
          : <AllChannels title={title} />
      }
    </div>
  );
}

export default TelegramAlertLinks;
