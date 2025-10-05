import { useEffect, useState } from "react";

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

function Sidebar({ modules, setActiveModule, activeModule }) {
  return (
    <div className="bg-[#293352] text-white h-screen w-128 p-5">
      <h1>Introduction to React JS</h1>
      <SidebarSection modules={modules} setActiveModule={setActiveModule} activeModule={activeModule} />
    </div>
  );
}

function SidebarSection({ modules, setActiveModule, activeModule }) {
  return (
    <div className="text-justify p-10 flex flex-col w-full">
      <h2>CONTENT OVERVIEW</h2>
      <ul>
        {modules &&
          modules.map((mod) => (
            <li key={mod.id} onClick={() => setActiveModule(mod)} className={`p-2 rounded ${activeModule?.id === mod.id ? "bg-[#A51C30]" : "hover:bg-[#3a4662]"}`}>
              {mod.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

function CourseContent({ activeModule, setActiveModule, modules }) {
  if (!activeModule) return <p>Loading...</p>; // handle saat module belum terisi

  const currentIndex = modules.findIndex((m) => m.id === activeModule.id);

  const handleNext = () => {
    if (currentIndex < modules.length - 1) {
      setActiveModule(modules[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveModule(modules[currentIndex - 1]);
    }
  };

  console.log(modules.length);

  return (
    <div className="p-15">
      <div className="flex justify-between mb-15">
        <p>Lesson 69 of 420</p>
        <button className="bg-[#A51C30] text-white rounded p-2">EXIT COURSE</button>
      </div>
      <div className="bg-[#293352] text-white p-15 rounded-md w-350">
        <h1 className="text-center mb-20">{activeModule.title}</h1>
        {activeModule.type === "video" && <video src={activeModule.content.video_url} controls className="w-full mt-5" />}
        {activeModule.type === "article" && <div dangerouslySetInnerHTML={{ __html: activeModule.content.html }} />}
        {activeModule.type === "project" && <p>{activeModule.content.instructions}</p>}
      </div>
      <div className="flex justify-between mt-15">
        <button className="bg-[#A51C30] text-white rounded p-2" onClick={handlePrevious}>
          Previous
        </button>
        <button className="bg-[#A51C30] text-white rounded p-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Rehan;
