import quote from "..//images/left-quote.png";

export default function Student(props) {
  return (
    <div
      style={{
        width: "50%",
        border: "2px solid red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 200,
          height: 200,
          borderRadius: "50%",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt=""
        />
        <img
          src={quote}
          alt="quote"
          style={{ position: "absolute", bottom: -50, right: 50 }}
        />
      </div>

      <div style={{ width: "70%", marginTop: 150 }}>
        <h4 style={{ color: "green", fontSize: 30 }}>{props.name}</h4>
        <h6 style={{ marginBottom: 10, marginTop: 10, fontSize: 25 }}>
          {props.age} წლის React დეველოპერი
        </h6>
        <p style={{ lineHeight: 1.2, fontSize: 20 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          non blanditiis itaque voluptatibus quas pariatur amet libero natus?
          Doloribus fuga at praesentium culpa quisquam esse officia sunt, facere
          a eos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit perspiciatis perferendis, tenetur magni soluta cumque
          consequuntur aspernatur neque inventore itaque officia nulla deleniti
          eius eaque consequatur aliquam labore libero reiciendis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nostrum, totam? Culpa
          magnam doloribus distinctio ipsam tenetur repellendus soluta pariatur
          autem sint. Minus illo nam dignissimos dicta ex veritatis tempora sit.
        </p>
      </div>
    </div>
  );
}
