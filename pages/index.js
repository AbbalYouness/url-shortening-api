import Head from "next/head";

import Boost from "../components/Boost/Boost";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Shorten from "../components/Shorten/Shorten";
import Stats from "../components/Stats/Stats";

export default function Index() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Shortly</title>
        <meta
          name="description"
          content="Shortly URL shortening API Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Shorten />
      <Stats />
      <Boost />
      <Footer />
    </>
  );
}
