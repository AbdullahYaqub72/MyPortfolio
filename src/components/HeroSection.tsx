'use client';

import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-4xl mx-auto mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Abdullah Yaqub
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Software Engineer crafting digital experiences with code
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 hover:scale-105 hover:-translate-y-1 transform"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200 hover:scale-105 hover:-translate-y-1 transform"
          >
            Contact
          </a>
        </div>
      </div>
      
      <div className="w-full">
        <HeroScene />
      </div>
    </section>
  );
}
