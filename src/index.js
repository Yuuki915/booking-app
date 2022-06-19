import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Hotels from "./components/pages/Hotels";
import HotelsDetail from "./components/detailPage/HotelsDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/hotels`} element={<Hotels />} />
        <Route path={`/hotel`} element={<HotelsDetail />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
