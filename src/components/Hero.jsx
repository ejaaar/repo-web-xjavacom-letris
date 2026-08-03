import React from "react";

export default function Hero() {
  return (
    <section className="relative">
      <picture className="block w-full">
        <source
          type="image/webp"
          srcSet="/src/assets/hero-2000.webp 2000w, /src/assets/hero-1600.webp 1600w, /src/assets/hero-800.webp 800w"
          sizes="(min-width: 1024px) 1600px, 100vw"
        />
        <source
          type="image/jpeg"
          srcSet="/src/assets/hero-2000.jpg 2000w, /src/assets/hero-1600.jpg 1600w, /src/assets/hero-800.jpg 800w"
          sizes="(min-width: 1024px) 1600px, 100vw"
        />
        <img
          src="/src/assets/hero.svg"
          alt="Flatlay meja kerja"
          className="w-full h-64 md:h-96 object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-6">
          <h1 className="text-3xl md:text-4xl font-bold text-navy">
            Great Branding, Great Handling
          </h1>
          <p className="mt-4 text-gray-700">
            Solusi konsultasi media dan IT untuk memperkuat identitas dan
            operasional digital perusahaan Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
