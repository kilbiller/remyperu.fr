import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ children, href }) => {
  return (
    <li className="bg-yellow p-2">
      <a href={href} className="hover:underline text-black">
        {children}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="text-2xl sm:text-4xl leading-tight m-2 sm:m-16 flex justify-center space-x-2 sm:space-x-4 sm:justify-end flex-row">
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
