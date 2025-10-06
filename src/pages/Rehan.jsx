import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { CourseContent } from "../components/CourseContent";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

function Rehan() {
  const { courseId } = useParams();
  const { courses, modules } = useData();

  const courseModules = modules.filter((m) => m.courseId === courseId).sort((a, b) => a.position - b.position);
  const currentCourse = courses.find((c) => c.id === courseId);
  const [activeModule, setActiveModule] = useState(courseModules[0] || null);
  const [completedModules, setCompletedModules] = useState([]);
  // const [modules, setModules] = useState([]);
  // const [courseTitle, setCourseTitle] = useState(null);
  // const [activeModule, setActiveModule] = useState(null);

  // const activeCourseId = "course_01"; // course aktif sekarang

  // useEffect(() => {
  //   fetch("/db.json")
  //     .then((res) => res.json())berk
  //     .then((data) => {
  //       const courseModules = data.modules.filter((module) => module.courseId === activeCourseId).sort((a, b) => a.position - b.position);
  //       const currentCourse = data.courses.find((course) => course.id === activeCourseId);
  //       setModules(courseModules);
  //       setActiveModule(courseModules[0]);
  //       setCourseTitle(currentCourse ? currentCourse.title : "-");
  //     })
  //     .catch((err) => console.error("Failed to load db.json:", err));
  // }, []);

  return (
    <div className="flex flex-row">
      <Sidebar modules={courseModules} activeModule={activeModule} setActiveModule={setActiveModule} courseTitle={currentCourse?.title || "-"} completedModules={completedModules} setCompletedModules={setCompletedModules} />
      <CourseContent activeModule={activeModule} setActiveModule={setActiveModule} modules={courseModules} completedModules={completedModules} setCompletedModules={setCompletedModules} />
    </div>
  );
}

export default Rehan;
