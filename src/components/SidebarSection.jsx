export function SidebarSection({ modules, setActiveModule, activeModule }) {
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
