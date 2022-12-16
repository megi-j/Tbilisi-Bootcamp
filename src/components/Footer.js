import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com/TbilisiBootCamp">
          <img src={facebook} alt="facebook" />
        </a>
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </footer>
  );
}
