import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@shared/components/Button";
import Title from "@react-app/components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button color="red">react button</Button>
        <Title color="green">I'm react-app Title!</Title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
