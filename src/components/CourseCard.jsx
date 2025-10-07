import { ProgressBar } from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import { LittleDetail } from "./LittleDetail";

// --- Course Card ---
export function CourseCard({ course, instructor }) {
  const navigate = useNavigate();
  if (!course) return null;
  return (
    <article
      onClick={() => navigate(`/courses/${course.id}`)}
      className="border-2 flex flex-col justify-between cursor-pointer border-gray-500/50 rounded p-4 shadow-sm bg-white"
    >
      <div className="flex gap-4 ">
        <div className="w-28 h-28 bg-gray-200 rounded" />

        <div className="flex-1">
          <div className="text-xs text-gray-500">{course.category}</div>
          <h4 className="font-semibold text-lg">{course.title}</h4>

          <div className="text-sm text-gray-600">
            <LittleDetail
              detail={instructor ? `By: ${instructor.name}` : "unknown"}
            />
          </div>

          <div className="text-sm text-gray-600">Level: {course.level}</div>

          <div className="text-sm text-gray-600 mt-2">
            <LittleDetail
              detail={
                course.duration_hours <= 1
                  ? `About ${course.duration_hours} hour`
                  : `About ${course.duration_hours} hours`
              }
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-xs text-gray-500">In progress:</div>
        <ProgressBar />
        <div className="text-sm text-green-600 mt-1">69%</div>
      </div>
    </article>
  );
}
