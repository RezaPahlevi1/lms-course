import { ProgressBar } from "./ProgressBar";

// --- Course Card ---
export function CourseCard({ course, instructor }) {
  if (!course) return null;
  return (
    <article className="border-2 cursor-pointer border-gray-500/50 rounded p-4 shadow-sm bg-white">
      <div className="flex gap-4">
        <div className="w-28 h-28 bg-gray-200 rounded" />

        <div className="flex-1">
          <div className="text-xs text-gray-500">{course.category}</div>
          <h4 className="font-semibold text-lg">{course.title}</h4>

          <div className="text-sm text-gray-600">
            By: {instructor ? instructor.name : "unknown"}
          </div>

          <div className="text-sm text-gray-600 mt-2">
            About: {course.duration_hours} Hours
          </div>

          <div className="mt-3">
            <div className="text-xs text-gray-500">In progress:</div>
            <ProgressBar />
            <div className="text-sm text-green-600 mt-1">69%</div>
          </div>
        </div>
      </div>
    </article>
  );
}
