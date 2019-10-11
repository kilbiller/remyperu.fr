import React from 'react';

const Main: React.FunctionComponent = ({ children }) => {
  return (
    <main className="px-8 lg:px-32" role="main">
      {children}
    </main>
  );
};

export default Main;
