const Projects = () => {
  const projects = [
    {
      name: "Weather Forecast App",
      description:
        "Real-time weather application built using HTML, CSS, and JavaScript, integrated with OpenWeather API for live updates.",
      link: "https://radhikaa45.github.io/WeatherForecast/",
    },
    {
      name: "Post Office AI Chatbot",
      description:
        "Flask-based intelligent chatbot designed to handle postal service queries with structured responses and backend integration.",
      link: "https://postoffice-chatbot-2q86.onrender.com/",
    },
    {
      name: "Tadka Tales – Recipe Finder",
      description:
        "React.js powered recipe finder platform with responsive UI and rich visuals for traditional and modern dishes.",
      link: "https://tadka-tales.vercel.app",
    },
    {
      name: "AI-Based Assistance (GitHub)",
      description:
        "AI-driven automation system integrating intelligent backend logic and smart interaction workflows.",
      link: "https://github.com/Radhikaa45/AI-based-assistance",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28"
      style={{ backgroundColor: "#EAF6F3" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: "#4F6F68" }}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl p-8 transition duration-300 block"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#111827" }}
              >
                {project.name}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#111827", opacity: 0.7 }}
              >
                {project.description}
              </p>

              <div
                className="mt-4 text-sm font-medium"
                style={{ color: "#065F46" }}
              >
                View Project →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;