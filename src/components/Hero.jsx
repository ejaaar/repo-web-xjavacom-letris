import React from "react";

export default function Hero() {
  const bg =
    import heroImg from '../assets/hero.svg';
    const bg = heroImg;
  return (
    <section
      className="hero-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.35), rgba(15,23,42,0.15)), url(${bg})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-3xl">
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
