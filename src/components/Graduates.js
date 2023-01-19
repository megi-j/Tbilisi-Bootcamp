import quote from "..//images/quote-right.png";
export default function Graduates() {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 35 }}>სტუდენტების გამოცდილება</h1>

      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            width: "50%",
            border: "2px solid red",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt=""
          />
          <img src={quote} alt="quote" />
          <div>
            <h4 style={{ color: "red" }}>თამარ ჭყოიძე</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur non blanditiis itaque voluptatibus quas pariatur amet
              libero natus? Doloribus fuga at praesentium culpa quisquam esse
              officia sunt, facere a eos. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Praesentium repellendus alias
              pariatur aliquam soluta. Natus, illo reiciendis. Eos eligendi
              dolore, neque facilis nostrum nihil odio laboriosam esse. Dolore,
              rerum optio!
            </p>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            border: "2px solid red",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt=""
          />
          <img src={quote} alt="quote" />
          <div>
            <h4 style={{ color: "green" }}>თამარ ჭყოიძე</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur non blanditiis itaque voluptatibus quas pariatur amet
              libero natus? Doloribus fuga at praesentium culpa quisquam esse
              officia sunt, facere a eos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit perspiciatis perferendis, tenetur magni
              soluta cumque consequuntur aspernatur neque inventore itaque
              officia nulla deleniti eius eaque consequatur aliquam labore
              libero reiciendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
