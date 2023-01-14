import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Index from "./pages/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
