import React from "react";

// Cara 1
export function CourseTag({ tags = [] }) {
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

// Cara 2
// export function CourseTag({ course }) {
//   // guard: jika tags kosong tampilkan info singkat
//   if (!course.tags || course.tags.length === 0) {
//     return (
//       <div className="flex flex-col gap-3 p-10">
//         <h1 className="font-bold text-xl">Tags</h1>
//         <p className="text-sm text-gray-500">No tags available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-3 p-10">
//       <h1 className="font-bold text-xl">Tags</h1>
//       <div className="flex flex-wrap gap-3">
//         {course.tags.map((tag, idx) => (
//           <div
//             key={`${tag}-${idx}`}
//             className="bg-gray-200 px-3 py-1 rounded-full text-sm w-fit"
//           >
//             <p>{tag}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
