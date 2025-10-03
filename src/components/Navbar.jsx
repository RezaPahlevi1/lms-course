import { Link } from "react-router-dom";
import Instructors from "../pages/Instructors";

function Navbar() {
  return (
    <div className="w-full h-20 bg-[#293352] text-white flex flex-row justify-between p-5 px-40">
      <h1>LMS COURSE</h1>
      <div className="flex flex-row gap-5">
        <Link to="/" className="font-semibold hover:text-blue-600">
          Courses
        </Link>
        <Link to="/instructors" className="font-semibold hover:text-blue-600">
          Instructors
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
