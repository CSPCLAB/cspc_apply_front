import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container); // container에 대한 루트 생성

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
