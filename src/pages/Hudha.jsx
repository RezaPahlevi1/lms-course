import { Hero } from "../components/Hero";
import { ProgressBar } from "../components/ProgressBar";
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
      <div className="max-w-8xl mx-auto p-20">
        <h1 className="text-2xl font-medium mb-4">Course Result:</h1>

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
        <Pagination />
      </div>
    </div>
  );
}

// --- Course Card ---
export function CourseCard({ course, instructor }) {
  return (
    <div className="border cursor-pointer border-gray-500/50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex gap-4">
        <div className="w-28 h-28 bg-gray-200 rounded" />

        <div className="flex-1">
          <div className="text-sm text-gray-500">{course.category}</div>
          <h4 className="font-semibold text-lg">{course.title}</h4>

          <div className="text-sm text-gray-600">
            By: {instructor ? instructor.name : "unknown"}
          </div>

          <div className="text-sm text-gray-600 mt-2">
            About: {course.duration_hours} Hours
          </div>

          <div className="mt-3">
            <div className="text-xs text-gray-500">In progress:</div>
            <ProgressBar />
            <div className="text-sm text-green-600 mt-1">69%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Pagination ---
function Pagination({ page = 1, total = 10, onPageChange = () => {} }) {
  const pages = [];
  for (let i = 1; i <= Math.min(total, 10); i++) pages.push(i);

  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex items-center gap-2">
        <button
          className="px-3 py-1 bg-gray-800 text-white rounded"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          ◀
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={`px-3 py-1 rounded border ${
              p === page ? "bg-gray-800 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-800 text-white rounded"
          onClick={() => onPageChange(page + 1)}
          disabled={page === total}
        >
          ▶
        </button>
      </nav>
    </div>
  );
}
