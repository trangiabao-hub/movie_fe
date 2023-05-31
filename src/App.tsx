import { useState } from "react";
import "./App.css";
import Home from "./pages/home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Movies api="https://api.themoviedb.org/3/discover/tv?api_key=a10ee5569194b352bcca20840b7f8a32&with_networks=213" /> */}
      <Home />
    </>
  );
}

export default App;
