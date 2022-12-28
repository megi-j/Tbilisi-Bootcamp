import React, { useEffect, useState } from "react";
import one from "..//images/one.jpg";
import two from "..//images/two.jpg";
import three from "..//images/three.jpg";
import four from "..//images/four.jpg";
import five from "..//images/five.jpg";

export default function Slider() {
  const [counter, setCounter] = useState(0);
  let images = [one, two, three, four, five];

  function next() {
    if (counter < images.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }
  useEffect(() => {
    let sliderInterval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(sliderInterval);
  });
  return (
    <>
      <div
        className="slider-box"
        style={{
          backgroundImage: `url(${images[counter]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}
