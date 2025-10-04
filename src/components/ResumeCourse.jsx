import { ProgressBar } from "./ProgressBar";

// --- Resume Course Card ---
function ResumeCourse({ course }) {
  if (!course) return null;
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-serif mb-6">Resume course:</h3>
      <div className="border rounded p-4 max-w-md">
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-gray-200 rounded" />
          <div className="flex-1">
            <div className="text-xs text-gray-500">{course.category}</div>
            <h4 className="font-semibold text-lg">{course.title}</h4>
            <div className="text-sm text-gray-600">by: {course.author}</div>
            <div className="text-sm text-gray-600 mt-2">{course.hours}</div>
            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-1">In progress:</div>
              <ProgressBar percent={course.progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
