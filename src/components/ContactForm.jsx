import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setForm({ name: "", email: "", phone: "", message: "" });
          alert("Pesan terkirim, terima kasih.");
        } else {
          alert("Gagal mengirim pesan. Silakan coba lagi.");
        }
      } catch (err) {
        alert("Gagal mengirim pesan. Periksa koneksi Anda.");
      }
    } else {
      console.log("submit", form);
      alert(
        "Pesan terkirim (demo). Atur VITE_FORMSPREE_ENDPOINT untuk mengaktifkan pengiriman nyata.",
      );
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-3xl bg-white p-6 border rounded-lg"
    >
      <h3 className="text-xl font-semibold text-navy">Kontak Kami</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          onChange={handle}
          value={form.name}
          placeholder="Nama Lengkap"
          className="p-3 border rounded"
          required
        />
        <input
          name="email"
          onChange={handle}
          value={form.email}
          placeholder="Email"
          type="email"
          className="p-3 border rounded"
          required
        />
        <input
          name="phone"
          onChange={handle}
          value={form.phone}
          placeholder="No. Handphone"
          className="p-3 border rounded md:col-span-2"
        />
        <textarea
          name="message"
          onChange={handle}
          value={form.message}
          placeholder="Pesan"
          className="p-3 border rounded md:col-span-2 h-32"
        />
      </div>
      <div className="mt-4">
        <button type="submit" className="px-6 py-2 bg-navy text-white rounded">
          Kirim Pesan
        </button>
      </div>
    </form>
  );
}
