import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Link: React.FunctionComponent<Props> = ({ children, href }) => {
  return (
    <a href={href} className="text-blue hover:opacity-50">
      {children}
    </a>
  );
};

export default Link;
