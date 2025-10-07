import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CourseList from "./pages/CourseList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
