import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

//TODO: Update docstrings for Board props
function App() {
  console.log("In app")
  return (
      <div className="App">
        <Board nrows={3} ncols={3} chanceLightStartsOn={0}/>
      </div>
  );
}

export default App;
