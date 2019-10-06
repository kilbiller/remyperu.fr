import React from "react";

import Page from "../components/Page";
import Header from "../components/Header";

const Contact: React.SFC = () => {
  return (
    <Page>
      <Header />
      <main className="ph6-l ph4 f4">
        <p>
          <a className="link blue dim" href="https://github.com/kilbiller">
            <img src="/img/octocat.svg" alt="Octocat" className="v-mid" />{" "}
            kilbiller
          </a>
        </p>

        <p>
          <a className="link blue dim" href="https://twitter.com/remy_peru">
            <img src="/img/twitter.svg" alt="Twitter" className="v-mid" />{" "}
            @remy_peru
          </a>
        </p>

        <p>
          <a
            className="link blue dim"
            href="https://www.linkedin.com/in/remyperu"
          >
            <img src="/img/linkedin.svg" alt="LinkedIn" className="v-mid" />{" "}
            remyperu
          </a>
        </p>

        <p>
          <a className="link blue dim" href="mailto:peru.remy@gmail.com">
            <img src="/img/gmail.svg" alt="Mail" className="v-mid" />{" "}
            peru.remy@gmail.com
          </a>
        </p>

        <p>
          <code
            style={{ wordBreak: "break-all" }}
            className="db mt4 mt5-ns mw7 center bg-light-gray pa3 ph4-ns code"
          >
            <span className="db tc">-----BEGIN PGP PUBLIC KEY BLOCK-----</span>
            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 =znxT
            <span className="db tc">-----END PGP PUBLIC KEY BLOCK-----</span>
          </code>
        </p>
      </main>
    </Page>
  );
};

export default Contact;
