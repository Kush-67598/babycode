import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Ankit Sharma", text: "I scored 8.5 in IELTS thanks to their guidance!", avatar: "https://i.pravatar.cc/50?img=1" },
  { name: "Priya Singh", text: "Mock tests and AI scoring were extremely helpful.", avatar: "https://i.pravatar.cc/50?img=2" },
  { name: "Rahul Verma", text: "Personalized feedback improved my writing skills.", avatar: "https://i.pravatar.cc/50?img=3" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-indigo-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mx-auto mb-4"/>
              <p className="text-gray-700 mb-2">"{t.text}"</p>
              <h4 className="font-semibold text-indigo-600">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
