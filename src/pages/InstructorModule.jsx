import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import {
  FaUser,
  FaBook,
  FaAward,
  FaStar,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import { Hero } from "../components/Hero";

function InstructorModule() {
  const { id } = useParams();
  const { instructors } = useData();

  // kalau data belum siap
  if (!instructors || instructors.length === 0) {
    return <p>Loading...</p>;
  }

  const instructor = instructors.find((ins) => ins.id === id);

  return (
    <>
      <InstructorProfile instructor={instructor} />;
    </>
  );
}

function InstructorProfile({ instructor }) {
  if (!instructor) {
    return <p>Instructor not found.</p>;
  }

  return (
    <div className="w-full p-10 bg-gray-200 text-black flex flex-col gap-5">
      <h1>{instructor.name}</h1>
      <p>{instructor.bio || "No description available."}</p>
    </div>
  );
}

export default InstructorModule;
