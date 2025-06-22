import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("blue");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Yellow", value: "yellow" },
    { name: "Purple", value: "purple" },
    { name: "Pink", value: "pink" },
    { name: "Orange", value: "orange" },
    { name: "Lime", value: "lime" },
    { name: "Teal", value: "teal" },
    { name: "Indigo", value: "indigo" },
    { name: "Cyan", value: "cyan" },
    { name: "Rose", value: "rose" },
  ];

  return (
    <div className="w-screen h-screen transition-colors duration-300" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-xl">
          {colors.map((col) => (
            <button
              key={col.value}
              onClick={() => setColor(col.value)}
              className={`px-4 py-2 bg-${col.value}-500 text-white rounded hover:bg-${col.value}-600 transition`}
              style={{backgroundColor: col.name}}
            >
              {col.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
