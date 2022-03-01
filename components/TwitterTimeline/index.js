import Head from "next/head";
import Spinner from "../Spinner";

const TwitterTimeline = () => {
  return (
    <>
      <Head>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <div style={{ width: "300px", textAlign: "center" }}>
        <a className="twitter-timeline" href="https://twitter.com/TechForUkraine?ref_src=twsrc%5Etfw">
          <Spinner />
          Loading tweets
        </a>
      </div>
    </>
  );
}

export default TwitterTimeline;
