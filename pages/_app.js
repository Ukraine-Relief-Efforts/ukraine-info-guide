import "../styles/index.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Leave Ukraine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta property="og:title" content="Leave Ukraine"/>
        <meta property="og:site_name" content="Leave Ukraine"/>
        <meta property="og:url" content="https://leaveukraine.com/"/>
        <meta property="og:description" content="Help and information for refugees trying to leave Ukraine"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://en.wikipedia.org/wiki/File:Flag_of_Ukraine.svg"></meta>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.leaveukraine.com/" />
        <meta name="keywords" content="ukraine, help, info, leaveukraine" />
        <meta
          name="description"
          content="Help and information for refugees trying to leave ukraine"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default appWithTranslation(App);
