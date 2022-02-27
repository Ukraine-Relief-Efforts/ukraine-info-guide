import "../styles/index.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Leave Ukraine</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
);

export default appWithTranslation(App);
