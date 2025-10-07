import React from "react";

export function SyllabusCard({ course }) {
  // lindungi jika course atau syllabus tidak tersedia
  const syllabus = course?.syllabus ?? [];

  return (
    <div className="flex flex-col gap-5 p-6">
      <h1 className="font-bold text-xl">Syllabus Course</h1>

      {syllabus.length === 0 ? (
        <p className="text-sm text-gray-500">Syllabus belum tersedia.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {syllabus.map((s) => (
            <article
              key={`${course.id}-week-${s.week}`}
              className="border-2 flex flex-col justify-between border-gray-300 rounded p-4 shadow-sm bg-white"
              aria-labelledby={`${course.id}-week-${s.week}-title`}
            >
              <header className="mb-2">
                <div className="text-xs text-gray-500">Week {s.week}</div>
                <h4
                  id={`${course.id}-week-${s.week}-title`}
                  className="font-semibold text-lg"
                >
                  {s.title}
                </h4>
              </header>

              <div className="text-sm text-gray-600 mb-3">
                <div className="text-xs text-gray-400">What you'll learn:</div>
                <ul className="list-disc list-inside mt-2">
                  {Array.isArray(s.items) && s.items.length > 0 ? (
                    s.items.map((item, idx) => (
                      <li key={`${course.id}-week-${s.week}-item-${idx}`}>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">Detail belum tersedia</li>
                  )}
                </ul>
              </div>

              <footer className="text-sm text-gray-500">
                {/* contoh detail tambahan */}
                {s.duration_hours
                  ? `Durasi kursus: ~${s.duration_hours} jam`
                  : null}
              </footer>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
