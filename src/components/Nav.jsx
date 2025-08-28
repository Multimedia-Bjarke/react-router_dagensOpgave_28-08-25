import { NavLink } from "react-router-dom";

function Nav(params) {
  return (
    <nav>
      <NavLink to="/">Forside</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
  );
}

export default Nav;
