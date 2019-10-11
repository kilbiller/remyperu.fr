import React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';
import Link from '../components/Link';

const CV: React.SFC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <h2 className="f2">
          <span className="bg-yellow ph2">Skills</span>
        </h2>
        <p>
          <span className="b">Frontend:</span> HTML, CSS (Sass, Bootstrap,
          Tachyons), Javascript (ES6/Typescript), React/Redux, AngularJS
        </p>
        <p>
          <span className="b">Backend:</span> PHP (Laravel/Symfony/CakePHP),
          Node.js (express, koa), Databases (MySQL, Postgres, SQLite), Nginx,
          Devops (Ansible, Docker, Kubernetes), API Design
        </p>
        <p>
          <span className="b">Mobile:</span> React Native, Ionic, Cordova,
          Offline-first
        </p>
        <h2 className="f2">
          <span className="bg-yellow ph2">Work Experience</span>
        </h2>
        <p>
          <span className="b">August 2015 - present:</span> Web developer{' '}
          <Link href="https://www.invityou.com">@Corpo'Events</Link>
        </p>
        <p>
          <span className="b">November 2013 - April 2014:</span> Hybrid app
          developer (Intern){' '}
          <Link href="https://www.cirad.fr/en/home-page">
            @CIRAD Montpellier
          </Link>
        </p>
        <p>
          <span className="b">April 2012 - July 2012:</span> PHP developer
          (Intern){' '}
          <Link href="https://www.ville-arles.fr/mairie">@Mairie d'Arles</Link>
        </p>
        <h2 className="f2">
          <span className="bg-yellow ph2">Education</span>
        </h2>
        <p>
          <span className="b">2012 - 2013:</span> Bachelor's degree (Licence) in
          computer science{' '}
          <Link href="https://www.umontpellier.fr/en/">
            @Montpellier 2 University
          </Link>
        </p>
        <p>
          <span className="b">2010 - 2012:</span> University Degree (DUT) in
          computer science{' '}
          <Link href="https://iut.univ-amu.fr/sites/arles">@IUT d'Arles</Link>
        </p>
        <p className="mt4 mt5-ns">
          You can get my full resume in PDF{' '}
          <Link href="https://drive.google.com/uc?export=download&id=0B-HUrU55uuTtTHlSNWdqVzZMaVk">
            here
          </Link>
          .
        </p>
      </Main>
    </Page>
  );
};

export default CV;
