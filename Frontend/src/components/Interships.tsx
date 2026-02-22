const Internships = () => {
  const internships = [
    {
      role: "Web Developer",
      company: "National Informatics Centre (NIC), Govt. of India",
      duration: "Jan 2026 – Present",
      description:
        "Developing and maintaining government web applications using ASP.NET MVC, ensuring clean architecture, security, and performance compliance with e-Governance standards.",
    },
    {
      role: "Frontend Developer Intern",
      company: "GoBuild (Remote)",
      duration: "Nov 2025 – Dec 2025",
      description:
        "Building modern responsive UI components using React.js and Tailwind CSS, focusing on scalable frontend architecture and performance optimization.",
    },
    {
      role: "AI Chatbot Intern",
      company: "DRDO – Central University of Jammu",
      duration: "June – July 2024",
      description:
        "Developed an AI-based chatbot using LLMs with conversational memory and real-time assistance capabilities.",
    },
    {
      role: "Frontend Intern",
      company: "Ladybird Web Solution",
      duration: "May – July 2025",
      description:
        "Developed responsive web interfaces, improved browser compatibility, and collaborated using Git and GitHub.",
    },
  ];

  return (
    <section id="internships" className="py-28" style={{ backgroundColor: "#EAF6F3" }}>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12" style={{ color: "#4F6F68" }}>
          Internships & Experience
        </h2>

        <div className="space-y-8">
          {internships.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
            >
              <h3 className="text-xl font-semibold">
                {item.role}
              </h3>
              <p className="text-sm text-gray-500">
                {item.company} | {item.duration}
              </p>
              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internships;