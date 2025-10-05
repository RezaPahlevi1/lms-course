export function SearchBar() {
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
