// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { useData } from "../context/DataContext";

export default function Navbar() {
  const { users } = useData();
  const user = users && users.length > 0 ? users[0] : null; // ambil user pertama (demo)

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  // Tutup dropdown kalau klik di luar atau tekan ESC
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function handleLogout() {
    // TODO: ganti dengan logic logout asli
    setOpen(false);
    navigate("/login");
  }

  const initials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <header className="w-full h-20 bg-[#293352] text-white flex items-center justify-between px-6 md:px-20">
      {/* Left side */}
      <h1 className="font-bold text-lg">LMS COURSE</h1>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="font-semibold hover:text-blue-300">
            Courses
          </Link>
          <Link to="/instructors" className="font-semibold hover:text-blue-300">
            Instructors
          </Link>
        </nav>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-md px-3 py-1 hover:bg-white/10"
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                {initials(user?.name || "U")}
              </div>
            )}

            <span className="hidden sm:inline-block">
              {user?.name?.split(" ")[0] || "User"}
            </span>
            <FaChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg ring-1 ring-black/10 overflow-hidden z-30"
            >
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <FaUser className="w-4 h-4" />
                <span className="text-sm">Profile</span>
              </Link>

              <Link
                to="/settings"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <FaCog className="w-4 h-4" />
                <span className="text-sm">Settings</span>
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
