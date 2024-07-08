import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import { useEffect } from "react";
import Store from "./context/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Store>
  );
}

export default App;
