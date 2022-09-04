import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CourseTopic from "./Pages/CourseTopic";
import Earning from "./Pages/Earning";
import Topics from "./Pages/Topics";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<CourseTopic />} />
        <Route path="topics" element={<Topics />} />
        <Route path="earning" element={<Earning />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
