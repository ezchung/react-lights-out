import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

//TODO: Update docstrings for Board props
function App() {
  console.log("In app")
  return (
      <div className="App">
        <Board nrows={5} ncols={5} chanceLightStartsOn={.5}/>
      </div>
  );
}

export default App;
