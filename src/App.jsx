import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Intro from "./Intro.jsx";
import Working from "./Working.jsx";
import Demo from "./Demo.jsx";
import background from "./assets/header-bg.svg";

function App() {
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        className="bg-cover bg-center z-20 "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Navbar />
        <Intro />
      <Working />

      </div>
      <Demo />{" "}
    </div>
  );
}

export default App;
