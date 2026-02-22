import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <footer id="contact"  className="bg-[#2F5E54] pt-6 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Name */}
        <h3 className="text-3xl font-bold text-white tracking-tight">
         Collaboration drives innovation.
        </h3>

        {/* Role */}
        <p className="text-[#EAF4F2] mt-3 text-base md:text-lg">
          I’m open to opportunities in AI, full stack development, and innovative tech collaborations. Feel free to reach out — I’d love to connect.
        </p>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 text-[#CFE5E0] text-sm mt-3">
          <MapPin size={16} />
          <span>Jammu & Kashmir, India</span>
        </div>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#7FD1B9] mx-auto my-8 rounded-full" />

        {/* Horizontal Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white font-medium text-base">

          <a
            href="mailto:radhikagupta45ig@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                       hover:text-[#7FD1B9] transition duration-300"
          >
            <Mail size={18} />
            radhikagupta45ig@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/radhika-gupta-2671b1326/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                       hover:text-[#7FD1B9] transition duration-300"
          >
            <Linkedin size={18} />
           Radhika-gupta-2671b1326
          </a>

          <a
            href="https://github.com/Radhikaa45"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                       hover:text-[#7FD1B9] transition duration-300"
          >
            <Github size={18} />
            Radhikaa45
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-[#B7D3CE] mt-10">
          © {new Date().getFullYear()} Radhika Gupta. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Contact;