import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { CourseContent } from "../components/CourseContent";

function Rehan() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);
  const activeCourseId = "course_01"; // course aktif sekarang

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const courseModules = data.modules.filter((module) => module.courseId === activeCourseId).sort((a, b) => a.position - b.position);
        setModules(courseModules);
        setActiveModule(courseModules[0]);
      })
      .catch((err) => console.error("Failed to load db.json:", err));
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar modules={modules} activeModule={activeModule} setActiveModule={setActiveModule} />
      <CourseContent activeModule={activeModule} setActiveModule={setActiveModule} modules={modules} />
    </div>
  );
}

export default Rehan;
