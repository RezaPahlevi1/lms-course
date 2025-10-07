export function SidebarSection({ modules, setActiveModule, activeModule, completedModules, setCompletedModules }) {
  function handleCheckboxChange(e, moduleId) {
    e.stopPropagation(); // supaya klik checkbox tidak mengaktifkan module
    setCompletedModules(
      (prev) =>
        prev.includes(moduleId)
          ? prev.filter((id) => id !== moduleId) // uncheck
          : [...prev, moduleId] // check
    );
  }
  return (
    <div className="text-justify p-10 flex flex-col w-full">
      {/* <h2>CONTENT OVERVIEW</h2> */}
      <ul className="space-y-2">
        {modules.map((mod) => (
          <li key={mod.id} onClick={() => setActiveModule(mod)} className={`flex items-center justify-between p-2 rounded cursor-pointer ${activeModule?.id === mod.id ? "bg-[#A51C30]" : "hover:bg-[#3a4662]"}`}>
            <span>{mod.title}</span>
            <input type="checkbox" checked={completedModules.includes(mod.id)} onChange={(e) => handleCheckboxChange(e, mod.id)} className="accent-[#A51C30] cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
}
