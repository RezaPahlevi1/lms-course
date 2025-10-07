import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ModuleLayout from "./ModuleLayout";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import CourseModules from "./pages/CourseModules";
import Instructors from "./pages/Instructors";
import Rehan from "./pages/Rehan";
import Reza from "./pages/Reza";
import Hudha from "./pages/Hudha";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<CourseList />} />
            <Route path="courses/:id" element={<CourseDetail />} />
            <Route path="instructors/" element={<Instructors />} />
            {/* <Route path="modules/" element={<CourseModules />} /> */}
            <Route path="rehan/" element={<Rehan />} />
            <Route path="reza/" element={<Reza />} />
            <Route path="hudha/" element={<Hudha />} />
          </Route>
          {/* Routes modul tanpa Navbar/Footer */}
          <Route element={<ModuleLayout />}>
            <Route path="/module/:id" element={<CourseModules />} />
            {/* <Route path="/modul/:id" element={<ModuleDetail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
