import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Popular from "./component/Page/Popular";
import Battle from "./component/Page/Battle";
import Layout from "./component/Layout";
import Result from "./component/Page/Result";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Popular />} />

        <Route path="/battle" element={<Battle />} />
        <Route path="/battle/result" element={<Result />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
