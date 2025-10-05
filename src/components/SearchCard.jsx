import { Filter } from "./Filter";
import { SearchBar } from "./SearchBar";

export function SearchCard() {
  return (
    <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="bg-gray-700 bg-opacity-90 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">
          What will you learn today?
        </h2>
        <SearchBar />
        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <Filter label="Subject" />
          <Filter label="Instructor" />
          <Filter label="Difficulty" />
        </div>
      </div>
      <div className="hidden md:block">
        {/* image area shown by CSS background */}
      </div>
    </div>
  );
}
