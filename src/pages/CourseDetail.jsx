import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { FaClock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { LittleDetail } from "../components/LittleDetail";
import { Hero } from "../components/Hero";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

export default function CourseDetail() {
  const { id } = useParams();
  const { courses, instructors, modules } = useData();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);
  const instructor = instructors.find((i) => i.id === course?.instructorId);
  const relatedModules = modules.filter((m) => m.courseId === course?.id);

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
              detail={`${relatedModules.length} Module`}
            />
          </div>
        </div>
      </Hero>
      <Middle navigate={navigate} relatedModules={relatedModules} />
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

function Middle({ relatedModules, navigate }) {
  return (
    <div className="p-10 flex flex-col gap-4 bg-gray-300">
      <div className="flex flex-row justify-between">
        <button className="p-2 px-8 rounded-xl bg-[#293352] text-white cursor-pointer">
          On Going
        </button>
        <button
          onClick={() => navigate(`/module/${relatedModules[0].id}`)}
          className="p-2 px-8 rounded-xl bg-[#293352] text-white cursor-pointer"
        >
          Learn Now
        </button>
      </div>
      <ProgressBar />
      <p>X out of {relatedModules.length} modules finished</p>
    </div>
  );
}

function CourseRating({ rating = 0, enroll_count = 0 }) {
  // jumlah total bintang
  const totalStars = 5;

  return (
    <div className="flex flex-col gap-3 p-10">
      <h1 className="font-bold text-xl">Ratings</h1>
      <div className="flex items-center gap-3 text-gray-700 text-sm">
        {/* Bintang rating */}
        <div className="flex items-center gap-[2px]">
          {[...Array(totalStars)].map((_, idx) => {
            const starValue = idx + 1;

            // Tentukan warna bintang
            const fillColor =
              rating >= starValue
                ? "text-yellow-400" // penuh
                : rating >= starValue - 0.5
                ? "text-yellow-200" // setengah
                : "text-gray-300"; // kosong

            return <FaStar key={idx} className={`${fillColor} text-lg`} />;
          })}
        </div>

        {/* Nilai rating */}
        <span className="font-semibold">{rating.toFixed(1)}</span>

        {/* Garis pemisah */}
        <div className="w-[1px] h-4 bg-gray-300" />

        {/* Jumlah enrolled */}
        <p>{enroll_count.toLocaleString()} enrolled</p>
      </div>
    </div>
  );
}

function CourseTag({ tags = [] }) {
  // guard: jika tags kosong tampilkan info singkat
  if (!tags || tags.length === 0) {
    return (
      <div className="flex flex-col gap-3 p-10">
        <h1 className="font-bold text-xl">Tags</h1>
        <p className="text-sm text-gray-500">No tags available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-10">
      <h1 className="font-bold text-xl">Tags</h1>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, idx) => (
          <div
            key={`${tag}-${idx}`}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm w-fit"
          >
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
