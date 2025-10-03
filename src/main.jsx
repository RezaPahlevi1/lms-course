import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import CourseModules from "./pages/CourseModules";
import Instructors from "./pages/Instructors";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CourseList />} />
          <Route path="courses/" element={<CourseDetail />} />
          <Route path="instructors/" element={<Instructors />} />
          <Route path="modules/" element={<CourseModules />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
