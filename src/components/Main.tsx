import React from "react";

const Main: React.FunctionComponent = ({ children }) => {
  return (
    <main className="ph6-l ph4 f4" role="main">
      {children}
    </main>
  );
};

export default Main;
