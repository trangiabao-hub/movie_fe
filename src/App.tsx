import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Movies api="http://localhost:8081/tournament" />
    </>
  );
}

export default App;
