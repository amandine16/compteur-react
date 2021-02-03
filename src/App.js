import "./App.scss";
import { useState } from "react";
import Counter from "./component/Counter";
import Header from "./component/Header";

function App() {
  // initialisation du compteur à 0
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header />
      <Counter counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
