import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { CourseContent } from "../components/CourseContent";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

function CourseModules() {
  const { courseId } = useParams();
  const { courses, modules } = useData();

  const courseModules = modules
    .filter((m) => m.courseId === courseId)
    .sort((a, b) => a.position - b.position);
  const currentCourse = courses.find((c) => c.id === courseId);
  const [activeModule, setActiveModule] = useState(courseModules[0] || null);
  const [completedModules, setCompletedModules] = useState([]);

  return (
    <div className="flex flex-row">
      <Sidebar
        modules={courseModules}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        courseTitle={currentCourse?.title || "-"}
        completedModules={completedModules}
        setCompletedModules={setCompletedModules}
      />
      <CourseContent
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        modules={courseModules}
        completedModules={completedModules}
        setCompletedModules={setCompletedModules}
      />
    </div>
  );
}

export default CourseModules;
