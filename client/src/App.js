import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import TeaInfoPage from "./Components/TeaInfoPage";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
