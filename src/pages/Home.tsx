import React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <div className="text-4xl max-w-3xl">
          <h1 className="text-7xl font-bold my-12">Hello,</h1>
          <p className="my-6">
            My name is Rémy Peru and I am a{' '}
            <span className="bg-yellow">developer</span> living in Montpellier,
            France.
          </p>
          <p className="my-6">
            I make <span className="bg-yellow">fast</span> and{' '}
            <span className="bg-yellow">secure</span> web/mobile apps using the
            lastest technologies and best practices.
          </p>

          <p>
            I am especially interested in{' '}
            <span className="bg-yellow">software</span> design and{' '}
            <span className="bg-yellow">systems</span> architecture.
          </p>
        </div>
      </Main>
    </Page>
  );
};

export default Home;
