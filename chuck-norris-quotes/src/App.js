import React from "react";
import Quotes from "./components/Quotes";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      {/* <MainPage /> */}
      <Quotes />
    </div>
  );
}

export default App;
