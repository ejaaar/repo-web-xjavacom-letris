import React from "react";

export default function ContactInfo() {
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
            d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243 4.243z"
          />
        </svg>
        <h3 className="text-lg font-medium">Alamat & Kontak</h3>
      </div>
      <div className="mt-4 text-gray-700 space-y-2">
        <div>Graha Madani Center, Sawangan Kota Depok, Jawa Barat</div>
        <div>
          Website:{" "}
          <a className="text-navy" href="https://www.xjavacom.co.id">
            www.xjavacom.co.id
          </a>
        </div>
        <div>
          Email:{" "}
          <a href="mailto:info@xjavacom.co.id" className="text-navy">
            info@xjavacom.co.id
          </a>
        </div>
        <div>Telp: 08515-4071</div>
      </div>
    </div>
  );
}
