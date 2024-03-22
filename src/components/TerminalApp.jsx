import React from "react";
import "../css/terminal.css";

const TerminalApp = () => {
  return (
    <div className="">
      <div className="terminal-window">
        <div className="title-bar">
          <div className="title">Terminal</div>
          <div className="close-button">&#x2715;</div>
        </div>

        <div className="terminal-content">
          <p>
            <span className="text-green-300">{"> "}</span>{" "}
            <span className="text-yellow-500">cd</span> dia
          </p>
          <p>
            <span className="text-green-300">{"> "}</span>{" "}
            <span className="text-yellow-500">cat</span> fecha.txt
          </p>
          <p>
            {" "}
            <span className="text-green-300">{"> "}</span>7 de Mayo
          </p>
          <p>
            <span className="text-green-300">{"> "}</span>{" "}
            <span className="text-yellow-500">cat</span> hora-inicio.txt
          </p>
          <p>
            {" "}
            <span className="text-green-300">{"> "}</span>10:00 hs
          </p>
          <p>
            <span className="terminal-cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalApp;
