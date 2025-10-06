import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
