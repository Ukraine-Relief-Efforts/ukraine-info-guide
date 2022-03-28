import "../styles/index.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BASE_URL } from "../configs/constants";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("Ukraine Safety")}</title>
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
        <meta property="og:site_name" content="Ukraine Safety" />
        <meta property="og:title" content="Leaving Ukraine Information" />
        <meta
          property="og:description"
          content="Information collected from governments and other sources about the situation in Ukraine and how to leave"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}logo.jpg`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechForUkraine" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={BASE_URL} />
        <meta name="keywords" content="leave,ukraine,ua,safety,,safe,invasion,crisis,war,leaving,help,info,information,leaveukraine,russia,putin,zelenskyy" />
        <meta
          name="description"
          content="Information collected from governments and other sources about the situation in Ukraine and how to leave"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <SessionProvider session={session}>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </div>
    </>
  );
}

export default appWithTranslation(App);
