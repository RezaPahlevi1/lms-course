// src/pages/CourseDetail.jsx
import React from "react";
import { Hero } from "../components/Hero";

export default function CourseDetail() {
  return (
    <>
      <Hero
        courseTitle="Fundamental Web Development (Get A Certificate!)"
        bgImage="/images/course-detail-bg.jpg"
        showSearchCard={false}
      >
        {/* children: custom content di bawah judul (mis. icons, meta, progress) */}
        <div className="mt-2 flex items-center gap-8 text-sm text-gray-100">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 w-10 h-10 flex items-center justify-center">
              ⏱️
            </span>
            <span>About 69 Hours</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 w-10 h-10 flex items-center justify-center">
              👨‍🏫
            </span>
            <span>GOAT James</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 w-10 h-10 flex items-center justify-center">
              📚
            </span>
            <span>420 Modules</span>
          </div>
        </div>
      </Hero>

      {/* ...about this course dst */}
    </>
  );
}
