import React from "react";
import Login from "./components/LoginPage/LoginPage";
import Signup from './Signup/Signup'

function App() {
  return (
    <Router>
      <Login />
      <Signup />
      </Router>
  );
}

export default App;
