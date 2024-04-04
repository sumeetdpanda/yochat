import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./pages/signup/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Signup />
      </div>
    </>
  );
}

export default App;
