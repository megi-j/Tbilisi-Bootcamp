import React from "react";
import Tutor from "./Tutor";
import megi from "./images/megi.jpeg";
export default function Tutors() {
  return (
    <section className="tutors">
      <div className="megi">
        <Tutor
          megiImg="https://img.freepik.com/premium-vector/cartoon-rabbit-holding-carrot_29190-5532.jpg?w=2000"
          name="ლუკა ქორიძე"
          profession="Fullstack web developer"
        />
      </div>
      <div className="megi">
        <Tutor
          megiImg={megi}
          name="მეგი ჯაბანაშვილი"
          profession="Frontend web developer"
        />
      </div>
    </section>
  );
}
