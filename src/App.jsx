import React, { useState } from "react";
import contactImage from "./assets/contactimg.png";
import {
  BriefcaseBusiness,
  Clock3,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const navLinks = ["About", "Services", "Contact"];

const serviceItems = ["Media", "IT & Web Service", "Digital Marketing", "POSM"];

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F3A8F] text-white">
              <BriefcaseBusiness size={18} />
            </div>
            <div>
              <p className="text-lg font-semibold text-[#2F3A8F]">X-Javacom</p>
              <p className="text-xs text-slate-500">Consulting Media & IT</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#2F3A8F]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#2F3A8F] px-6 py-8 text-white sm:px-10 lg:px-14">
                <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                  X-Javacom
                </p>
                <h1 className="mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">
                  Tetap Terhubung dengan Para Tim Profesional Kami
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-50 sm:text-base">
                  X-Javacom merupakan perusahaan yang bergerak di bidang
                  konsultasi media dan IT. Ditunjang SDM yang ahli dan
                  berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai
                  dari perusahaan swasta, NGO, hingga kementerian/lembaga.
                </p>
              </div>
              <div className="bg-slate-100 p-4 sm:p-6 lg:p-8">
                <img
                  src={contactImage}
                  alt="Services illustration"
                  className="h-full min-h-[240px] w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2F3A8F]">
                About
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Tetap Terhubung dengan Para Tim Profesional Kami
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                X-Javacom merupakan perusahaan yang bergerak di bidang
                konsultasi media dan IT. Ditunjang SDM yang ahli dan
                berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai
                dari perusahaan swasta, NGO, hingga kementerian/lembaga. Puluhan
                project telah kami realisasikan. Press release media, media
                monitoring, digital listening, digital ads, web&apps
                development, POSM, dan banyak lainnya.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#2F3A8F] p-2 text-white">
                  <Clock3 size={18} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Jam Operasional
                </h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold text-[#2F3A8F]">
                    10am - 5pm
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span>Sabtu</span>
                  <span className="font-semibold text-[#2F3A8F]">
                    10am - 4pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#2F3A8F] p-2 text-white">
                  <MapPin size={18} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Alamat</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                Graha Madani Center, Sawangan Kota Depok, Jawa Barat
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-[#2F3A8F]" />
                  <a
                    href="https://www.xjavacom.co.id"
                    className="text-[#2F3A8F] hover:underline"
                  >
                    www.xjavacom.co.id
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#2F3A8F]" />
                  <a
                    href="mailto:info@xjavacom.co.id"
                    className="text-[#2F3A8F] hover:underline"
                  >
                    info@xjavacom.co.id
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#2F3A8F]" />
                  <span>08515-4071</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#2F3A8F] p-2 text-white">
                  <Mail size={18} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Form Kontak
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2F3A8F]"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2F3A8F]"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    No. Handphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2F3A8F]"
                    placeholder="No. Handphone"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2F3A8F]"
                    placeholder="Pesan"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F3A8F] px-4 py-3 font-semibold text-white transition hover:bg-[#24306f]"
                >
                  <Send size={16} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Layanan Kami
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {serviceItems.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#2F3A8F] p-2 text-white">
                <Phone size={18} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Contact Info
              </h3>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-[#2F3A8F]">Alamat</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Graha Madani Center, Sawangan Kota Depok, Jawa Barat
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-[#2F3A8F]">Email</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  info@xjavacom.co.id
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-[#2F3A8F]">Telepon</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  08515-4071
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              className="rounded-full border border-slate-300 p-2 hover:text-[#2F3A8F]"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com"
              className="rounded-full border border-slate-300 p-2 hover:text-[#2F3A8F]"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="rounded-full border border-slate-300 p-2 hover:text-[#2F3A8F]"
            >
              <Linkedin size={16} />
            </a>
          </div>
          <p>© All rights reserved www.xjavacom.co.id</p>
        </div>
      </footer>
    </div>
  );
}
