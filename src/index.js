import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Hoppers from "./Hoppers.js"


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hoppers />}> </Route>
      <Route path="/home" element={<Hoppers />}> </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);