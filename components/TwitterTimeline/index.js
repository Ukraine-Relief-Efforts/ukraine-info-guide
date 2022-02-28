import Script from "next/script";

const TwitterTimeline = () => {
  return (
    <>
      <a className="twitter-timeline" href="https://twitter.com/TechForUkraine?ref_src=twsrc%5Etfw">Tweets by TechForUkraine</a>
      <Script async src="https://platform.twitter.com/widgets.js" />
    </>
  );
}

export default TwitterTimeline;
