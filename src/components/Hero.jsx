import { Filter } from "./Filter";
import { SearchBar } from "./SearchBar";

// --- Hero with search and filters ---
export function Hero() {
  return (
    <section className="relative bg-[url('/hero-placeholder.jpg')] bg-cover bg-right">
      <div className="bg-[rgba(0,0,0,0.45)] px-6 py-12">
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
      </div>
    </section>
  );
}
