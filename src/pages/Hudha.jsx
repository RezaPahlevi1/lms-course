export default function Hudha() {
  return (
    <div>
      <Hero />
    </div>
  );
}

// --- Hero with search and filters ---
function Hero() {
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

function SearchBar() {
  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded w-full bg-white text-gray-700">
        <svg
          className="w-5 h-5 ml-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          className="w-full px-3 py-2 focus:outline-none"
          placeholder="Search learning"
          aria-label="search"
        />
      </div>
    </div>
  );
}

function Filter({ label }) {
  return (
    <button className="flex items-center gap-2 bg-transparent text-white/90 hover:text-white">
      <span>{label}</span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

// --- Resume Course Card ---
function ResumeCourse({ course }) {
  if (!course) return null;
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-serif mb-6">Resume course:</h3>
      <div className="border rounded p-4 max-w-md">
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-gray-200 rounded" />
          <div className="flex-1">
            <div className="text-xs text-gray-500">{course.category}</div>
            <h4 className="font-semibold text-lg">{course.title}</h4>
            <div className="text-sm text-gray-600">by: {course.author}</div>
            <div className="text-sm text-gray-600 mt-2">{course.hours}</div>
            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-1">In progress:</div>
              <ProgressBar percent={course.progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ percent = 0 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="h-4 rounded-full bg-green-600"
        style={{ width: `${percent}%`, transition: "width 0.4s ease" }}
      />
    </div>
  );
}

// --- Course Card ---
function CourseCard({ course }) {
  return (
    <article className="border rounded p-4 shadow-sm bg-white">
      <div className="flex gap-4">
        <div className="w-28 h-28 bg-gray-200 rounded" />
        <div className="flex-1">
          <div className="text-xs text-gray-500">{course.category}</div>
          <h4 className="font-semibold text-lg">{course.title}</h4>
          <div className="text-sm text-gray-600">by: {course.author}</div>
          <div className="text-sm text-gray-600 mt-2">{course.hours}</div>
          <div className="mt-3">
            <div className="text-xs text-gray-500">In progress:</div>
            <ProgressBar percent={course.progress} />
            <div className="text-sm text-green-600 mt-1">
              {course.progress}%
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// --- Course Grid / List ---
function CourseGrid({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-serif mb-6">Course Result:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}

// --- Pagination ---
function Pagination({ page = 1, total = 10, onPageChange = () => {} }) {
  const pages = [];
  for (let i = 1; i <= Math.min(total, 10); i++) pages.push(i);

  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex items-center gap-2">
        <button
          className="px-3 py-1 bg-gray-800 text-white rounded"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          ◀
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={`px-3 py-1 rounded border ${
              p === page ? "bg-gray-800 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-800 text-white rounded"
          onClick={() => onPageChange(page + 1)}
          disabled={page === total}
        >
          ▶
        </button>
      </nav>
    </div>
  );
}
