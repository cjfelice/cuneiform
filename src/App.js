import React from "react";
import "./App.scss";
import Row from "./Row";
import Workspace from "./Workspace";
import Title from "./Title";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Title text="chiMera" />
      </div>
      <div>
        <Workspace className="workspace" />
      </div>
      <Row title="Suggested Canvi" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
