import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h2>Link to greeting</h2>
      <Link to='/greeting'>Greeting component</Link>
    </>
  );
}

export default App;
