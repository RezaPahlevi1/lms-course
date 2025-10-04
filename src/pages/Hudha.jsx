import { Hero } from "../components/Hero";

export default function Hudha() {
  return (
    <div>
      <Hero />
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
