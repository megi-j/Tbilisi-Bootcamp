import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo-box" onClick={() => navigate("/")}>
      <img src={logo} alt="logo" className="logo" />
      <h2>
        <span>Tbilisi</span> Bootcamp
      </h2>
    </div>
  );
}
