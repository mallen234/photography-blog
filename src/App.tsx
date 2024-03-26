import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />

      {/* <div className="w-52 h-52 m-4 bg-slate-200 bg-pano"></div> */}
      <div className="w-128">
        <img className="" src="/photos/misty_hill_tiny_house.jpeg" />
      </div>
    </>
  );
}

export default App;
