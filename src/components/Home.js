import code from "../images/code.jpg";
import Cards from "./Cards";
import Slider from "./Slider";
export default function Home() {
  return (
    <>
      <section className="homePage">
        <span
          style={{
            color: "red",
            fontSize: 30,
            transform: "rotate(20deg)",
            opacity: 0,
          }}
        >
          div
        </span>
        <h3>
          <span style={{ fontSize: 50, color: "#874B78" }}>
            დაიწყე სწავლა ინტენსიური განათლების კურსზე
          </span>
          <p>და მიიღე უნიკალური გამოცდილება სულ რამდენიმე თვეში</p>
        </h3>
        <span
          style={{
            color: "blue",
            fontSize: 30,
            transform: "rotate(20deg)",
            opacity: 0,
          }}
        >
          input
        </span>
        <span
          style={{
            color: "green",
            fontSize: 30,
            transform: "rotate(30deg)",
            opacity: 0,
          }}
        >
          img
        </span>
        <Slider />
      </section>
      <Cards />
    </>
  );
}
