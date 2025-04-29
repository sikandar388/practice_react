import { useState } from "react";
import "./App.css";

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl px-3 py-2">
        <button className="px-2 rounded-full text-white" style={{ backgroundColor: "red" }} onClick={()=>setColour('red')}> Red </button>
        <button className="px-2 rounded-full text-white" style={{ backgroundColor: "blue" }} onClick={()=>setColour('blue')}> Blue </button>
        <button className="px-2 rounded-full text-white" style={{ backgroundColor: "green" }} onClick={()=>setColour('green')}> Green </button>
        <button className="px-2 rounded-full text-white" style={{ backgroundColor: "black" }} onClick={()=>setColour('black')}> Black </button>
        <button className="px-2 rounded-full text-white" style={{ backgroundColor: "pink" }} onClick={()=>setColour('pink')}> Pink </button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
