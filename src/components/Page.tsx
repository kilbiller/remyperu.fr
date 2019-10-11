import React from 'react';

const Page: React.SFC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Rémy Peru | Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Homepage of Rémy Peru, Web developer."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <link rel="stylesheet" href="css/main.css" />

        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono w-full text-xl">{children}</body>
    </html>
  );
};

export default Page;
