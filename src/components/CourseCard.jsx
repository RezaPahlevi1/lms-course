import { ProgressBar } from "./ProgressBar";

// --- Course Card ---
export function CourseCard({ course }) {
  return (
    <article className="border rounded p-4 shadow-sm bg-white">
      <div className="flex gap-4">
        <div className="w-28 h-28 bg-gray-200 rounded" />
        <div className="flex-1">
          <div className="text-xs text-gray-500">{course.category}</div>
          <h4 className="font-semibold text-lg">{course.title}</h4>
          <div className="text-sm text-gray-600">by: {course.author}</div>
          <div className="text-sm text-gray-600 mt-2">{course.hours}</div>
          <div className="mt-3">
            <div className="text-xs text-gray-500">In progress:</div>
            <ProgressBar percent={course.progress} />
            <div className="text-sm text-green-600 mt-1">
              {course.progress}%
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
