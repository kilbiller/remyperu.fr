import React from 'react';

interface Props {
  href: string;
}

const Link: React.FunctionComponent<Props> = ({ children, href }) => {
  return (
    <a href={href} className="link blue dim">
      {children}
    </a>
  );
};

export default Link;
