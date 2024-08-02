import React from "react";
import "./App.css";
import Home from "./components/home";
import { PokedexStateProvider } from "./services/stateProvider";

function App() {
  return (
    <PokedexStateProvider>
      <div className="App ">
        <header className="App-header"></header>
        <div>
          <Home />
        </div>
      </div>
    </PokedexStateProvider>
  );
}

export default App;
