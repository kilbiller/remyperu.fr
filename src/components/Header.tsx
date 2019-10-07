import React from "react";

const Header: React.SFC = () => {
  return (
    <header className="mb5-ns">
      <nav>
        <ul className="list mv0 pl0 f2 f3-ns mt5-ns mr5-ns flex justify-end flex-column flex-row-ns">
          <li className="bg-yellow pa2 mr3-ns">
            <a href="/" className="link underline-hover black">
              Home
            </a>
          </li>
          <li className="bg-yellow pa2 mr3-ns">
            <a href="/cv" className="link underline-hover black">
              CV
            </a>
          </li>
          <li className="bg-yellow pa2 mr3-ns">
            <a
              href="https://github.com/kilbiller"
              className="link underline-hover black"
            >
              Projects
            </a>
          </li>
          <li className="bg-yellow pa2 mr3-ns">
            <a href="/contact" className="link underline-hover black">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
