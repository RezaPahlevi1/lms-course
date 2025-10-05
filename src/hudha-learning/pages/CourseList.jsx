import { Hero } from "../components/Hero";
import { Filter } from "../components/Filter";
import { SearchBar } from "../components/SearchBar";
import React, { useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("../../db.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
        setInstructors(data.instructors || []);
      })
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div>
      <Hero
        title="What will you learn today huh?"
        bgImage="/hero-placeholder.jpg"
        showSearchCard={true}
      />
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
      </div>
    </div>
  );
}
