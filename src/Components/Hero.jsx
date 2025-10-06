import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-100 to-indigo-200 overflow-hidden pt-40 md:pt-44 pb-32 rounded-b-3xl">
      {/* Floating decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full opacity-30 -translate-x-32 -translate-y-32 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full opacity-20 translate-x-32 translate-y-32 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 text-center flex flex-col items-center gap-8 relative z-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 drop-shadow-md">
            Achieve Your <span className="text-indigo-600">Dream IELTS Score</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Join our institute and take your IELTS preparation to the next level with <span className="font-semibold text-indigo-600">AI scoring</span>, <span className="font-semibold text-indigo-600">mock tests</span>, and <span className="font-semibold text-indigo-600">personalized guidance</span>.
          </p>
          <motion.button
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-lg font-semibold"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
