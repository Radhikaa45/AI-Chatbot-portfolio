import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full border-b z-50 bg-white"
      style={{
        backgroundColor: "#FAFAF9",
        borderColor: "#E5E7EB",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-2xl tracking-wide">
          <a
            href="#hero"
            style={{ color: "#065F46" }}
            className="font-bold cursor-pointer hover:opacity-80 transition"
          >
            Radhika Gupta
          </a>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-base font-medium">
          <a href="#about" className="hover:text-black transition relative after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            About
          </a>
          <a href="#projects" className="hover:text-black transition relative after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Projects
          </a>
          <a href="#skills" className="hover:text-black transition relative after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Skills
          </a>
          <a href="#internships" className="hover:text-black transition relative after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Experiences
          </a>
          <a href="#contact" className="hover:text-black transition relative after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 text-base font-medium">
          <a href="#about" className="block">About</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#internships" className="block">Experiences</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;