import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

const Title = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <Router>
      <Title>Hello World</Title>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Route path="/" exact component={Home} />
      <Route path="/about/" exact component={About} />
    </Router>
  );
};

export default App;
