import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import TeaInfoPage from "./Components/TeaInfoPage";
import CreateUser from "./Components/CreateUser";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/create" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
