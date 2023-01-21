import React from "react";
import Tutor from "./Tutor";
import megi from "./images/megi.jpeg";
import luka from "./images/luka.jpeg";
export default function Tutors() {
  return (
    <section className="tutors">
      <div className="megi">
        <Tutor
          megiImg={megi}
          name="მეგი ჯაბანაშვილი"
          profession="Frontend web developer"
        />
      </div>
      <div className="luka">
        <Tutor
          megiImg={luka}
          name="ლუკა ქორიძე"
          profession="Fullstack web developer"
          tech={<li>Node.js</li>}
          tech1={<li>Express</li>}
          tech2={<li>MongoDB</li>}
        />
      </div>
    </section>
  );
}
