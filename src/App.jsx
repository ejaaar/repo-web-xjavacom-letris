import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import OperatingHours from "./components/OperatingHours";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section className="max-w-6xl mx-auto px-6 py-16">
          <About />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Services />
            </div>
            <div className="space-y-6">
              <OperatingHours />
              <ContactInfo />
            </div>
          </div>
          <div className="mt-12">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
