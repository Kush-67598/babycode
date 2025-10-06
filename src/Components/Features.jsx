import React from 'react';
import { AiOutlineAudio, AiOutlineFileText, AiOutlineRobot, AiOutlineUser } from 'react-icons/ai';
import { motion } from 'framer-motion';

const features = [
  { icon: <AiOutlineAudio className="text-indigo-600 w-10 h-10"/>, title: "Speaking Practice", desc: "Improve your speaking skills with expert feedback." },
  { icon: <AiOutlineFileText className="text-indigo-600 w-10 h-10"/>, title: "Mock Tests", desc: "Simulate real IELTS exams for better preparation." },
  { icon: <AiOutlineRobot className="text-indigo-600 w-10 h-10"/>, title: "AI Band Score", desc: "Get AI-based scoring and performance insights." },
  { icon: <AiOutlineUser className="text-indigo-600 w-10 h-10"/>, title: "Personalized Feedback", desc: "Tailored guidance to focus on your weak areas." },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-lg transition cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
