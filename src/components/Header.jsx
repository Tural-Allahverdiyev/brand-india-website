import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/images/Brand_India_black.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__logo" to="/" aria-label="Brand India Home">
          <img src={logo} alt="Brand India" />
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/people">Our People</NavLink>
          <NavLink to="/offices">Offices</NavLink>
        </nav>
      </div>
    </header>
  );
}
