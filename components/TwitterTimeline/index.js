import { TwitterTimelineEmbed } from "react-twitter-embed";
import Spinner from "../Spinner";

const TwitterTimeline = () => {
  return (
    <div style={{ width: "300px" }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TechForUkraine"
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
