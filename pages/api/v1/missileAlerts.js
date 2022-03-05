import cheerio from "cheerio";
import { localeToTelegramAlertChannel } from "../../../utils";

const readDOM = async (locale) => {
  const channel = localeToTelegramAlertChannel(locale);
  const data = await fetch(`https://t.me/s/${channel}`);
    const text = await data.text();
    return cheerio.load(text);
  }

const missileAlertsHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send();
    return;
  }

  const num_results = req.query.count || 10;

  try {
    const $ = await readDOM(req.query.lang || "en");
    const messages = $(".tgme_widget_message");

    const result = [];

    messages.each((i, elem) => {
      elem = $(elem);

      const text = elem.find(".tgme_widget_message_text").html();
      const time = elem.find(".time").html();

      const dataPost = elem[0]?.attribs["data-post"];
      const post = parseInt(dataPost.split("/")[1]);

      result.push({
        text,
        time,
        post,
      });
    });

    res.status(200).json({
      alerts: result.slice(result.length - num_results),
    });
  } catch (e) {
    res.status(500).json({ error: "Couldn't get missile alerts" + e });
  }
}

export default missileAlertsHandler;
