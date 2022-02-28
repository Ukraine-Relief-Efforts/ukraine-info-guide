import Script from "next/script";
import Spinner from "../Spinner";

const TwitterTimeline = () => {
  return (
    <div style={{ width: "300px", textAlign: "center" }}>
      <a className="twitter-timeline" href="https://twitter.com/TechForUkraine?ref_src=twsrc%5Etfw">
        <Spinner />
        Loading tweets
      </a>
      <Script async src="https://platform.twitter.com/widgets.js" />
    </div>
  );
}

export default TwitterTimeline;
