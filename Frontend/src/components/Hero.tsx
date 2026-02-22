import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F4FBF9] overflow-hidden px-4 sm:px-6">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#14B08A] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A6A50] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl text-center relative z-10">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827]"
        >
          Hi, I'm{" "}
          <span
            id="hero"
            className="bg-gradient-to-r from-[#0A6A50] to-[#14B08A] bg-clip-text text-transparent"
          >
            Radhika Gupta
          </span>
        </motion.h1>

        {/* Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-[#0A6A50] mt-4 font-medium"
        >
          <Typewriter
            words={[
              "Full Stack Developer",
              "AI Enthusiast",
              "React Developer",
              "Tech Innovator",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm sm:text-base md:text-lg text-[#4B5563] mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable web applications and intelligent AI-powered systems
          with clean architecture and modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[#0A6A50] text-white font-medium 
            transition-all duration-300 hover:bg-[#0E8A67] hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/RadhikaGupta_Resume.pdf"
            download
            className="px-6 py-3 rounded-lg border border-[#0A6A50] text-[#0A6A50] font-medium 
            transition-all duration-300 hover:bg-[#0A6A50] hover:text-white hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mt-16 text-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A6A50]">5+</h2>
            <p className="text-[#4B5563] text-sm sm:text-base">Projects</p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A6A50]">3+</h2>
            <p className="text-[#4B5563] text-sm sm:text-base">Internships</p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A6A50]">8.5</h2>
            <p className="text-[#4B5563] text-sm sm:text-base">CGPA</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;