import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { CourseCard } from "../components/CourseCard";
import { SearchCard } from "../components/SearchCard";
import { useData } from "../context/DataContext";

export default function CourseList() {
  const { instructors, courses } = useData();

  // state untuk search & filter
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    subject: "", // matches course.category
    instructorId: "", // matches course.instructorId
    level: "", // matches course.level
  });

  // Filtered courses berdasarkan search & filter
  const filteredCourses = courses.filter((course) => {
    const instructor = instructors.find(
      (ins) => ins.id === course.instructorId
    );
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      (instructor?.name || "").toLowerCase().includes(search.toLowerCase());

    const matchesSubject =
      !filters.subject || course.category === filters.subject;

    const matchesInstructor =
      !filters.instructor || course.instructorId === filters.instructor;

    const matchesDifficulty = !filters.level || course.level === filters.level;

    return (
      matchesSearch && matchesSubject && matchesInstructor && matchesDifficulty
    );
  });

  return (
    <div>
      <Hero>
        <SearchCard
          search={search}
          onSearchChange={setSearch}
          filters={filters}
          onFilterChange={setFilters}
          instructors={instructors}
          availableSubjects={[...new Set(courses.map((c) => c.category))]}
        />
      </Hero>

      <div className="flex flex-col p-10 gap-5 text-2xl">
        <h1>Courses:({filteredCourses.length})</h1>

        <div className="grid grid-cols-3 gap-5">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
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
            })
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No courses found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
