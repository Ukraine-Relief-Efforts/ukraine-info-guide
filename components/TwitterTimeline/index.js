import { useRouter } from "next/router";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Spinner from "../Spinner";
import { TWITTER_HANDLE } from "../../configs/constants";

const TwitterTimeline = () => {
  const { locale } = useRouter();

  return (
    <div style={{ width: "300px" }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={TWITTER_HANDLE}
        lang={locale}
        placeholder={
          <div style={{ width: "300px", textAlign: "center" }}>
            <Spinner />
            Loading tweets
          </div>
        }
      />
    </div>
  );
}

export default TwitterTimeline;
