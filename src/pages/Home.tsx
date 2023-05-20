import React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';
import HighlightedText from '../components/HighlightedText';

const Home: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <div className="text-4xl max-w-3xl">
          <h1 className="text-7xl font-bold my-12">Hello,</h1>
          <p className="my-6">
            My name is Rémy Peru and I am a{' '}
            <HighlightedText>developer</HighlightedText> living in Montpellier,
            France.
          </p>
          <p className="my-6">
            I make <HighlightedText>fast</HighlightedText> and{' '}
            <HighlightedText>secure</HighlightedText> web/mobile apps using the
            lastest technologies and best practices.
          </p>
          <p>
            I am especially interested in{' '}
            <HighlightedText>software</HighlightedText> design and{' '}
            <HighlightedText>systems</HighlightedText> architecture.
          </p>
        </div>
      </Main>
    </Page>
  );
};

export default Home;
