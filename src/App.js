import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainRouter from "./Components/MainRouter";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ScrollToTop> */}
        <MainRouter />
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
