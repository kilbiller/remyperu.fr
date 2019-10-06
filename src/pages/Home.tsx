import React from "react";

import Page from "../components/Page";
import Header from "../components/Header";

const Home: React.SFC = () => {
  return (
    <Page>
      <Header />
      <main className="ph6-l ph4 f4">
        <h1 className="f-subheadline">Hello,</h1>
        <p className="f2 measure-narrow">
          My name is Rémy Peru and I am a{" "}
          <span className="bg-yellow">developer</span> from France.
        </p>
        <p className="f2 measure-narrow">
          I make <span className="bg-yellow">fast</span> and{" "}
          <span className="bg-yellow">secure</span> web/mobile apps using the
          lastest technologies and best practices.
        </p>
      </main>
    </Page>
  );
};

export default Home;
