import React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: React.SFC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <h1 className="text-7xl font-bold my-12">Hello,</h1>
        <p className="text-4xl max-w-3xl my-6">
          My name is Rémy Peru and I am a{' '}
          <span className="bg-yellow">developer</span> from France.
        </p>
        <p className="text-4xl max-w-3xl my-6">
          I make <span className="bg-yellow">fast</span> and{' '}
          <span className="bg-yellow">secure</span> web/mobile apps using the
          lastest technologies and best practices.
        </p>
      </Main>
    </Page>
  );
};

export default Home;
