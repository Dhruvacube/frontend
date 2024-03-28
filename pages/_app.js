import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <section>
      <Head>
        <title>IEEE GEMS Web Team Frontend Task</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="author" content="Dhruva Shaw" />

        <meta property="og:title" content="IEEE GEMS Web Team Frontend Task" />
        <meta property="og:type" content="Website" />
        <meta
          property="keywords"
          content="Dhruva Shaw, Dhruva, Shaw, developer, engineer, robotics, robotics engineer, discord, discord.py, cuber, lpu, cubing, electronics, ieee, arduino, esp32, IEEE, ieee, gems, next.js, frontend"
        />
        <meta property="og:url" content="https://dhruvashaw.in" />
        <meta property="og:locale" content="en_us" />
        <meta property="og:locale" content="en" />

        <meta
          property="og:site_name"
          content="IEEE GEMS Web Team Frontend Task"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="apple-mobile-web-app-title"
          content="IEEE GEMS Web Team Frontend Task"
        />

        <meta name="distribution" content="global" />
        <meta name="theme-color" content="#0989d9" />
        <meta itemProp="name" content="IEEE GEMS Web Team Frontend Task" />
        <meta name="author" content="Dhruva Shaw" />
        <meta name="copyright" content="Dhruva Shaw" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <Component {...pageProps} />
    </section>
  );
}
