import { CourseCard } from "./CourseCard";

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
