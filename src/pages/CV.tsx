import React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';
import Link from '../components/Link';

const CV: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <h2 className="text-4xl font-bold my-6">
          <span className="bg-yellow">Skills</span>
        </h2>
        <p className="my-5">
          <span className="font-bold">Frontend:</span> HTML, CSS (Sass,
          Bootstrap, Tailwind CSS), Javascript (ES6/Typescript), React
        </p>
        <p className="my-5">
          <span className="font-bold">Backend:</span> PHP (Laravel/Symfony),
          Node.js (express, koa, nextjs), Databases (MySQL, Postgres, SQLite),
          Nginx, Devops (Ansible, Docker, Kubernetes), API Design, Systems
          architecture
        </p>
        <p className="my-5">
          <span className="font-bold">Mobile:</span> React Native, Offline-first
          apps
        </p>
        <h2 className="text-4xl font-bold my-6">
          <span className="bg-yellow">Work Experience</span>
        </h2>
        <p className="my-5">
          <span className="font-bold">August 2015 - present:</span> Web
          developer &gt; Lead developer{' '}
          <Link href="https://www.invityou.com">@Corpo'Events</Link>
        </p>
        <p className="my-5">
          <span className="font-bold">November 2013 - April 2014:</span> Hybrid
          app developer (Intern){' '}
          <Link href="https://www.cirad.fr/en/home-page">
            @CIRAD Montpellier
          </Link>
        </p>
        <p className="my-5">
          <span className="font-bold">April 2012 - July 2012:</span> PHP
          developer (Intern){' '}
          <Link href="https://www.ville-arles.fr/mairie">@Mairie d'Arles</Link>
        </p>
        <h2 className="text-4xl font-bold my-6">
          <span className="bg-yellow">Education</span>
        </h2>
        <p className="my-5">
          <span className="font-bold">2012 - 2013:</span> Bachelor's degree
          (Licence) in computer science{' '}
          <Link href="https://www.umontpellier.fr/en/">
            @Montpellier 2 University
          </Link>
        </p>
        <p className="my-5">
          <span className="font-bold">2010 - 2012:</span> University Degree
          (DUT) in computer science{' '}
          <Link href="https://iut.univ-amu.fr/sites/arles">@IUT d'Arles</Link>
        </p>
        <p className="my-5 mt-12">
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
