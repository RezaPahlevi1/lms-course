import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { FaClock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { LittleDetail } from "../components/LittleDetail";
import { Hero } from "../components/Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.courses.find((c) => c.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
          const foundInstructor = data.instructors.find(
            (i) => i.id === foundCourse.instructorId
          );
          setInstructor(foundInstructor);
          const relatedModules = data.modules.filter(
            (m) => m.courseId === foundCourse.id
          );
          setModules(relatedModules);
        }
      })
      .catch((err) => console.error("Failed to load db.json:", err));
  }, [id]);

  if (!course) return <p className="p-10 text-xl">Loading course...</p>;

  return (
    <div>
      <Hero>
        <div className="w-full text-white bg-linear-to-r from-black to-[#293352] flex flex-col p-12">
          <h1 className="text-6xl">{course.title}</h1>
          <div className="flex flex-row gap-5 pt-20">
            <LittleDetail
              icon={<FaClock />}
              detail={`About ${course.duration_hours} Hours`}
            />
            <LittleDetail
              icon={<IoPerson />}
              detail={instructor ? instructor.name : "Unknown Instructor"}
            />
            <LittleDetail
              icon={<IoBook />}
              detail={`${modules.length} Module`}
            />
          </div>
        </div>
      </Hero>
      <Middle modules={modules} />
      <CourseDescription course={course} />
    </div>
  );
}

function CourseDescription({ course }) {
  return (
    <div className="flex flex-col gap-5 p-10">
      <h1 className="font-bold text-4xl">About {course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}

function Middle({ modules }) {
  return (
    <div className="p-10 flex flex-col gap-4 bg-gray-300">
      <div className="flex flex-row justify-between">
        <button className="p-2 px-8 rounded-xl bg-[#293352] text-white cursor-pointer">
          On Going
        </button>
        <button className="p-2 px-8 rounded-xl bg-[#293352] text-white cursor-pointer">
          Learn Now
        </button>
      </div>
      <ProgressBar />
      <p>X out of {modules.length} modules finished</p>
    </div>
  );
}
