import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { CourseCard } from "../components/CourseCard";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
        setInstructors(data.instructors || []);
      })
      .catch((err) => {
        console.error("Failed to load db.json:", err);
      });
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col p-10 gap-5 text-2xl">
        <h1>Resume Course:</h1>

        <div className="grid grid-cols-3 gap-5">
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

        <h1>Courses:</h1>
        <div className="flex flex-row gap-5">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
