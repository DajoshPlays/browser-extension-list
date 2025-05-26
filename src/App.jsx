import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import "./index.css";

function App() {
  const [isLight, setIsLight] = useState(false);

  function handleToggle() {
    setIsLight((prev) => !prev);
  }
  return (
    <div>
      <Header isLight={isLight} handleToggle={handleToggle} />
      <List />
    </div>
  );
}

export default App;
