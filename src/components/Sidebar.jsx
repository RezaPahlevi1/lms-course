import { SidebarSection } from "./SidebarSection";

export function Sidebar({ modules, setActiveModule, activeModule }) {
  return (
    <div className="bg-[#293352] text-white h-screen w-128 p-5">
      <h1>Introduction to React JS</h1>
      <SidebarSection modules={modules} setActiveModule={setActiveModule} activeModule={activeModule} />
    </div>
  );
}
