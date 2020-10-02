import React from "react";
import DropdownList from "./Dropdownlist";
import Categories from "./Categories";
import Table from "./Table";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>City Mini Guide</h1>
      </header>
      <DropdownList />
      <Categories />
      <Table />
    </div>
  );
}

export default App;
