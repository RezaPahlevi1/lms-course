import React from "react";

export function Filter({ label, value, options = [], onChange = () => {} }) {
  return (
    <div className="">
      <label className="block text-l mb-1 text-white/90">{label}</label>
      <select
        className="bg-white w-full px-3 py-2 rounded text-gray-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((opt, i) => {
          const optionValue = typeof opt === "string" ? opt : opt.value;
          const optionLabel = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={i} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}
