import React from "react";

export default function Logo({ className = "h-8 w-auto" }) {
  return (
    <div className={"flex items-center gap-2 " + className}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#2F3A8F" />
        <circle cx="20" cy="20" r="6" fill="#E63946" />
        <path d="M30 44H44V38L36 34L30 44Z" fill="white" />
      </svg>
      <div>
        <div className="text-sm font-bold text-navy">X-Javacom</div>
        <div className="text-xs text-gray-500">
          Great Branding, Great Handling
        </div>
      </div>
    </div>
  );
}
