import React from "react";

const items = ["Media", "IT & Web Service", "Digital Marketing", "POSM"];

export default function Services() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy">Layanan Kami</h3>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((t) => (
          <li key={t} className="p-4 border rounded bg-white">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
