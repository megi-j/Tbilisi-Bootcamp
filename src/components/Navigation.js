import { NavLink } from "react-router-dom";
import down from "..//images/down.png";
export default function Navigation(props) {
  return (
    <nav>
      <ul>
        <li onClick={props.changeHidden}>
          <NavLink to="/">მთავარი</NavLink>
        </li>
        <li onClick={props.changeHidden}>
          <NavLink to="/aboutus">ბუთკემპის შესახებ</NavLink>
        </li>
        <li onClick={props.handleClick}>
          {/* <NavLink to="/courses"> */}
          კურსები
          <img src={down} alt="down-arrow" />
          {/* </NavLink> */}
        </li>
        <li onClick={props.changeHidden}>
          <NavLink to="/tutors">ტუტორები</NavLink>
        </li>
      </ul>
    </nav>
  );
}
