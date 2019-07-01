import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles/global.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";

const Title = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <Router>
      <Route path="/login/" exact component={Login} />
      <Route path="/about/" exact component={About} />
    </Router>
  );
};

export default App;
