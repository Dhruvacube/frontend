import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
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
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

        <Script strategy="beforeInteractive" id="theme-toggler">
          {`if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          } else {
              document.documentElement.classList.remove('dark')
          }`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
