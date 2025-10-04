import { Hero } from "../components/Hero";
import React, { useEffect, useState } from "react";

export default function Hudha() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
        setInstructors(data.instructors || []);
      })
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Course Result:</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => {
            const instructor = instructors.find(
              (ins) => ins.id === course.instructorId
            );
            return (
              <CourseCard
                key={course.id}
                course={course}
                instructor={instructor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- Course Card ---
export function CourseCard({ course, instructor }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="text-sm text-gray-500">{course.category}</div>
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <div className="text-sm text-gray-600">
        By: {instructor ? instructor.name : "unknown"}
      </div>

      <p className="text-sm text-gray-500">{course.duration_hours}</p>

      <div className="mt-3">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" />
        </div>
        <p className="text-xs text-gray-600 mt-1"></p>
      </div>
    </div>
  );
}

// --- Pagination ---
// function Pagination({ page = 1, total = 10, onPageChange = () => {} }) {
//   const pages = [];
//   for (let i = 1; i <= Math.min(total, 10); i++) pages.push(i);

//   return (
//     <div className="flex justify-center mt-8">
//       <nav className="inline-flex items-center gap-2">
//         <button
//           className="px-3 py-1 bg-gray-800 text-white rounded"
//           onClick={() => onPageChange(page - 1)}
//           disabled={page === 1}
//         >
//           ◀
//         </button>
//         {pages.map((p) => (
//           <button
//             key={p}
//             className={`px-3 py-1 rounded border ${
//               p === page ? "bg-gray-800 text-white" : "bg-white text-gray-700"
//             }`}
//             onClick={() => onPageChange(p)}
//           >
//             {p}
//           </button>
//         ))}
//         <button
//           className="px-3 py-1 bg-gray-800 text-white rounded"
//           onClick={() => onPageChange(page + 1)}
//           disabled={page === total}
//         >
//           ▶
//         </button>
//       </nav>
//     </div>
//   );
// }
