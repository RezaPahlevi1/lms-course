import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./pages/CourseList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}

export default App;
