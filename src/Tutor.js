export default function Tutor(props) {
  return (
    <>
      <div className="tutorImg">
        <img src={props.megiImg} alt="" />
      </div>
      <div className="tutorInfo">
        <h1>{props.name}</h1>
        <p>{props.profession}</p>
        <p>1+ წლიანი გამოცდილებით</p>
        <p>ფლობს Web development-ის ხელსაწყოებსა და ტექნოლოგიებს: </p>
        <ul>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>Bootstrap/Tailwind</li>
          <li>Javascript</li>
          <li>typescript</li>
          <li>React.JS</li>
          <li>Rest API</li>
          <li>Git/Github</li>
          {props.tech}
          {props.tech1}
          {props.tech2}
        </ul>
      </div>
    </>
  );
}
