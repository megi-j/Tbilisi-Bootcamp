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
          <span className="title-word title-word-1" style={{ fontSize: 50 }}>
            დაიწყე <span className="title-word title-word-2">სწავლა</span>{" "}
            <span className="title-word title-word-3">ინტენსიური</span>{" "}
            <span className="title-word title-word-4">განათლების</span>{" "}
            <span className="title-word title-word-5">კურსზე</span>
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
