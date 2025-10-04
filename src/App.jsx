import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./pages/CourseList";
import { Outlet } from "react-router-dom";
import Hudha from "./pages/Hudha";

function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
