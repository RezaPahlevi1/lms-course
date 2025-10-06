import { SidebarSection } from "./SidebarSection";

export function Sidebar({ modules, setActiveModule, activeModule, completedModules, setCompletedModules, courseTitle }) {
  return (
    <div className="bg-[#293352] text-white h-screen w-128 p-5">
      <h1 className="text-center font-bold">{courseTitle}</h1>
      <SidebarSection modules={modules} setActiveModule={setActiveModule} activeModule={activeModule} completedModules={completedModules} setCompletedModules={setCompletedModules} />
    </div>
  );
}
