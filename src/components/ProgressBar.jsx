export function ProgressBar({ percent = 25 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="h-4 rounded-full bg-green-600"
        style={{ width: `${percent}%`, transition: "width 0.4s ease" }}
      />
    </div>
  );
}
