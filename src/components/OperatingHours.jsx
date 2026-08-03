import React from "react";

export default function OperatingHours() {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-navy"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3v5h6v-5zM17 7h.01M21 7h.01M3 7h.01"
          />
        </svg>
        <h3 className="text-lg font-medium">Jam Operasional</h3>
      </div>
      <ul className="mt-4 text-gray-700">
        <li>Senin - Jumat: 10am - 5pm</li>
        <li>Sabtu: 10am - 4pm</li>
      </ul>
    </div>
  );
}
