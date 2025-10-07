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
import Hudha from "./pages/Hudha";
import { DataProvider } from "./context/DataContext";
import InstructorModule from "./pages/InstructorModule";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<CourseList />} />
            <Route path="courses/:id" element={<CourseDetail />} />
            <Route path="instructors/" element={<Instructors />} />
            <Route
              path="courses/:courseId/modules"
              element={<CourseModules />}
            />
            <Route path="rehan/" element={<Rehan />} />
            <Route path="reza/" element={<Reza />} />
            <Route path="hudha/" element={<Hudha />} />
            <Route path="instructors/:id" element={<InstructorModule />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
