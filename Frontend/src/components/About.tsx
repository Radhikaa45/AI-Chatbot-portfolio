const About = () => {
  return (
    <section
      id="about"
      className="py-28"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: "#4F6F68" }}
        >
          About Me
        </h2>

        {/* Curved Rectangular Box */}
        <div
          className="rounded-3xl p-10 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
          }}
        >
          <div className="space-y-6 leading-relaxed text-lg text-gray-600">

            <p>
              I am a <span style={{ color: "#065F46", fontWeight: 600 }}>
              Full Stack Developer and AI enthusiast</span> currently pursuing
              B.Tech in Computer Science with strong academic foundations and
              hands-on experience in real-world deployment.
            </p>

            <p>
              My expertise lies in building <span style={{ fontWeight: 600, color: "#111827" }}>
              scalable web applications</span> and integrating intelligent systems
              using modern technologies such as React, Node.js, Flask, and AI-powered architectures.
            </p>

            <p>
              I have developed production-ready applications including AI-based chatbots,
              real-time systems, and dynamic portfolio platforms, focusing on clean UI/UX,
              structured backend logic, and maintainable code practices.
            </p>

            <p>
              I am passionate about combining <span style={{ color: "#065F46", fontWeight: 600 }}>
              innovation, problem-solving, and continuous learning</span> to deliver impactful,
              efficient, and scalable digital solutions.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;