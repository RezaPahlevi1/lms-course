import { Filter } from "./Filter";
import { SearchBar } from "./SearchBar";

export function SearchCard({
  search,
  onSearchChange,
  filters,
  onFilterChange,
  instructors,
  availableSubjects = [],
}) {
  return (
    <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="bg-gray-700 bg-opacity-90 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">
          What will you learn today?
        </h2>
        <SearchBar value={search} onChange={onSearchChange} />
        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <Filter
            label="Subject:"
            value={filters.subject}
            onChange={(v) => onFilterChange((f) => ({ ...f, subject: v }))}
            options={availableSubjects}
          />
          <Filter
            label="Instructor"
            value={filters.instructor}
            onChange={(v) => onFilterChange((f) => ({ ...f, instructor: v }))}
            options={instructors.map((ins) => ({
              label: ins.name,
              value: ins.id,
            }))}
          />
          <Filter
            label="Difficulty"
            value={filters.level}
            onChange={(v) => onFilterChange((f) => ({ ...f, level: v }))}
            options={["Beginner", "Intermediate", "Advanced"]}
          />
        </div>
      </div>
      <div className="hidden md:block">
        {/* image area shown by CSS background */}
      </div>
    </div>
  );
}
