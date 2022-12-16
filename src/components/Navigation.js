import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">მთავარი</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">ბუთკემპის შესახებ</NavLink>
          </li>
          <li>
            <NavLink to="/courses">კურსები</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
