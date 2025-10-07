import React from "react";
import { FaStar } from "react-icons/fa";

export function CourseRating({ course }) {
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
              course.rating >= starValue
                ? "text-yellow-400" // penuh
                : course.rating >= starValue - 0.5
                ? "text-yellow-200" // setengah
                : "text-gray-300"; // kosong

            return <FaStar key={idx} className={`${fillColor} text-lg`} />;
          })}
        </div>

        {/* Nilai rating */}
        <span className="font-semibold">{course.rating.toFixed(1)}</span>

        {/* Garis pemisah */}
        <div className="w-[1px] h-4 bg-gray-300" />

        {/* Jumlah enrolled */}
        <p>{course.enroll_count} enrolled</p>
      </div>
    </div>
  );
}
