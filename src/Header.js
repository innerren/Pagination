import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="App-header">
    <Link className="HeadButton" to="/">
      Домой
    </Link>
    <Link className="HeadButton" to={`/Bash/perPage=5&page=1`}>
      Читать шутки юмора
    </Link>
    <Link className="HeadButton" to={`/Zadolbali/perPage=2&page=1`}>
      Все задолбали :(
    </Link>
  </header>
);

export default Header;
