import type { NextPage } from "next";
import Head from "next/head";

type SeoProps = {
  title: string;
};

const Seo: NextPage<SeoProps> = ({ title = "Home" }) => (
  <Head>
    <title>{title} | Codico</title>
    <meta
      name="description"
      content="Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010."
    />
    <meta
      name="keywords"
      content="Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010."
    />
    <link rel="icon" href="/logo-codico-red.svg" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta property="og:image" content="https://www.codigo.co/img/social.jpg" />
    <link rel="shortcut icon" href="favicon.ico" />
    <meta name="pinterest" content="nopin" />
    <base href="/" />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/13ZL4D5.woff2"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/1D8lW7G.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/1Q0RZdt.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/1cNoVrG.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/23pGLov.woff2"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/2RrPByu.woff2"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/2fCplIK.woff2"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/2ouwpzi.woff2"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/2pyXnS9.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/2vntkyX.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/31B9yHt.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/32pWASy.woff"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/3FA2SJo.woff2"
      rel="preload"
    />
    <link
      as="font"
      crossOrigin="anonymous"
      href="https://www.codigo.co/css/type/ixbr3lb.woff2"
      rel="preload"
    />
    <meta
      name="description"
      content="The best travel app with a collaborative trip planner so that you and your loved ones and friends can plan trips together! Grab travel essentials like Pocket WiFi, Travel Insurance, and instant access to more than 150 airport lounges all over the world. It even comes with a built-in currency converter, weather forecast, and offline mode!"
      data-react-helmet="true"
    />
    <meta
      property="og:image"
      content="https://cdn.codigo.co/uploads/2021/04/RTT-1.png"
      data-react-helmet="true"
    />
  </Head>
);

export default Seo;
