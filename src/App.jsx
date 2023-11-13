import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div style={{ backgroundColor: color ,width:"70rem",height:"30rem"}}></div>
      <button onClick={()=>{
        setColor("red")
      }}>Click to change color to Red</button>
      <button onClick={()=>{
        setColor("white")
      }}>Click to change color to White</button>
      <button onClick={()=>{
        setColor("yellow")
      }}>Click to change color to Yellow</button>
      <button onClick={()=>{
        setColor("olive")
      }}>Click to change color to olive</button>
    </>
  );
}

export default App;
