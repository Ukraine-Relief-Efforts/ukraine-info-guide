import cheerio from "cheerio";
import { localeToTelegramAlertChannel } from "../../../utils";

const NUM_RESULT_TO_SHOW = 10;

const readDOM = async (locale) => {
  const channel = localeToTelegramAlertChannel(locale);
  const data = await fetch(`https://t.me/s/${channel}`);
    const text = await data.text();
    return cheerio.load(text);
  }

const missileAlertsHandler = async (req, res) => {
  try {
    const $ = await readDOM(req.query.lang || "en");
    const messages = $(".tgme_widget_message_bubble");

    const result = [];

    messages.each((i, elem) => {
      elem = $(elem);
      const text = elem.find(".tgme_widget_message_text").html();
      const time = elem.find(".time").html();
      result.push({
        text,
        time,
      });
    });

    res.status(200).json({
      alerts: result.slice(result.length - NUM_RESULT_TO_SHOW),
    });
  } catch (e) {
    res.status(500).json({ error: "Couldn't get missile alerts" + e });
  }
}

export default missileAlertsHandler;
