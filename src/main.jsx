import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import CourseModules from "./pages/CourseModules";
import Instructors from "./pages/Instructors";
import Rehan from "./pages/Rehan";
import Reza from "./pages/Reza";

// Hudha Learning Import //
import HudhaCourseList from "./hudha-learning/pages/CourseList";
import HudhaCourseDetail from "./hudha-learning/pages/CourseDetail";
import HudhaCourseModules from "./hudha-learning/pages/CourseModules";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CourseList />} />
          <Route path="courses/" element={<CourseDetail />} />
          <Route path="instructors/" element={<Instructors />} />
          <Route path="modules/" element={<CourseModules />} />
          <Route path="rehan/" element={<Rehan />} />
          <Route path="reza/" element={<Reza />} />

          {/* Hudha Learning Route */}
          <Route
            path="hudha-learning/course-list"
            element={<HudhaCourseList />}
          />
          <Route
            path="hudha-learning/course-detail"
            element={<HudhaCourseDetail />}
          />
          <Route
            path="hudha-learning/course-modules"
            element={<HudhaCourseModules />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
