import Student from "./Student";
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
      <h1 style={{ fontSize: 40, marginBottom: 20 }}>
        სტუდენტების გამოცდილება
      </h1>

      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <Student name="თამარ ჭყოიძე" age="31" />
        <Student name="დავით გიგოლაშვილი" age="24" />
      </div>
    </section>
  );
}
