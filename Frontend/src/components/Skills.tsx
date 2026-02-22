import React from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Java", "JavaScript", "Python (Basics)", "SQL"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Flask"],
  },
  {
    category: "Backend & Architecture",
    skills: ["REST APIs", "MVC Architecture (ASP.NET MVC – Razor Views)"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Dialogflow", "Postman"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Machine Learning",
      "Internet of Things",
      "Software Development Life Cycle (SDLC)",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6"
      style={{ backgroundColor: "#F6F7F4" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2
          className="text-4xl font-bold mb-14"
          style={{ color: "#4F6F68" }}
        >
          Technical Skills
        </h2>

        {/* Horizontal Cards */}
        <div className="flex gap-8 overflow-x-auto pb-4">

          {skillsData.map((section, index) => (
            <div
              key={index}
              className="min-w-[320px] p-8 rounded-2xl border
                         transition-all duration-300 transform
                         hover:-translate-y-3 hover:shadow-2xl"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#DDE8E4",
              }}
            >
              {/* Category Title */}
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: "#7C9A92" }}
              >
                {section.category}
              </h3>

              {/* Stacked Rounded Skills */}
              <ul className="space-y-3">
                {section.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium
                               transition-all duration-300
                               hover:scale-105 hover:-translate-y-1
                               cursor-pointer"
                    style={{
                      backgroundColor: "#E6F0ED",
                      color: "#1F2937",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;