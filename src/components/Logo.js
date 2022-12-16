import logo from "../images/logo.jpg";

export default function Logo() {
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo" />
      <h2>
        <span>Tbilisi</span> Bootcamp
      </h2>
    </div>
  );
}
