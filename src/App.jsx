import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CourseList from "./pages/CourseList";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname.includes("/modules");
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
