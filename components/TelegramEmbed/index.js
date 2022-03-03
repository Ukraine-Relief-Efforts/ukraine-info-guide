import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { localeToTelegramAlertChannel } from "../../utils";
import { fetchMissileAlerts } from "../../apiClient/AlertsApi";
import Spinner from "../Spinner";

const TelegramEmbed = () => {
  const router = useRouter();

  const [postNumber, setPostNumber] = useState();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMissileAlerts(router.locale, 1);
      setPostNumber(data?.alerts[0]?.post);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (scriptLoaded || !ref.current || !postNumber)
      return;
    const channel = localeToTelegramAlertChannel(router.locale);
    const tag = document.createElement("script");
    tag.src = "https://telegram.org/js/telegram-widget.js?15"
    tag.setAttribute("data-telegram-post", `${channel}/${postNumber}`);
    tag.setAttribute("data-width", "100%");
    ref.current.appendChild(tag);
    setScriptLoaded(true);
  }, [postNumber]);

  return postNumber
    ? <div ref={ref} style={{ maxWidth: "400px", margin: "0 auto" }} />
    : <Spinner />;
}

export default TelegramEmbed;
