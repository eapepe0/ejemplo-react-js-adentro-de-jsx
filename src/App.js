import "./styles.css";

export default function App() {
  const firstName = "Joe";
  const lastName = "Schmoe";

  const date = new Date();

  const horas = date.getHours();
  const minutos = date.getMinutes();
  let imagen = "";
  let timeOfDay;

  if (horas < 12) {
    timeOfDay = "mañana";
    imagen =
      "https://images.unsplash.com/photo-1526385159909-196a9ac0ef64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
  } else if (horas >= 12 && horas < 17) {
    timeOfDay = "tardes";
    imagen =
      "https://images.unsplash.com/photo-1577257108037-e85032e84049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
  } else {
    timeOfDay = "noches";
    imagen =
      "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        {/* alineamos el texto */}
        Hello, {firstName} {lastName}.{" "}
        {/* corremos javascript dentro de las llaves */}
      </h1>
      <p style={{ textAlign: "center", fontSize: "33px" }}>
        {" "}
        {/* centramos el parrafo y agrandamos la fuente */}
        Buenas {timeOfDay} , son las {horas} horas y {minutos} minutos !{" "}
        {/* mostramos las variables */}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem"
        }}
      >
        <img src={imagen} alt="imagen"></img>{" "}
        {/* depende de la hora muestra una imagen o la otra */}
      </div>
    </div>
  );
}
