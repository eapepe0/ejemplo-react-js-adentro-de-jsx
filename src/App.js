import "./styles.css";

export default function App() {
  const firstName = "Joe";
  const lastName = "Schmoe";

  const date = new Date();

  const horas = date.getHours();
  const minutos = date.getMinutes();

  let timeOfDay;

  if (horas < 12) {
    timeOfDay = "mañana";
  } else if (horas >= 12 && horas < 17) {
    timeOfDay = "tardes";
  } else {
    timeOfDay = "noches";
  }

  return (
    <h1 style={{ textAlign: "center" }}>
      Hello, {firstName} {lastName}.
      <p style={{ textAlign: "center" }}>
        Buenas {timeOfDay} , son las {horas} horas y {minutos} minutos !
      </p>
    </h1>
  );
}
