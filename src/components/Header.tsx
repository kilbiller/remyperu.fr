import React from 'react';

interface Props {
  href: string;
}

const NavLink: React.SFC<Props> = ({ children, href }) => {
  return (
    <li className="bg-yellow p-2 sm:mr-4">
      <a href={href} className="hover:underline text-black">
        {children}
      </a>
    </li>
  );
};

const Header: React.SFC = () => {
  return (
    <header>
      <nav>
        <ul className="text-4xl sm:text-2xl leading-tight sm:m-16 flex justify-end flex-col sm:flex-row">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/cv">CV</NavLink>
          <NavLink href="https://github.com/kilbiller">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
