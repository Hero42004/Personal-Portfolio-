
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, user authentication, and product management.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: 2,
    title: "FaceRecognition Attendance System",
    description: "This project is a real-time attendance system that uses facial recognition technology to automatically identifyindividuals through a webcam and mark their attendance.",
    image: "https://www.kentcam.com/camattendance/blog/wp-content/uploads/2023/01/MicrosoftTeams-image-246-1024x599.jpg",
    demoUrl: "https://face-recognition-attendance-system-gamma.vercel.app/",
    caseStudyUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A custom-built portfolio website showcasing work history, projects, and skills with smooth transitions and animations.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    demoUrl: "https://personal-portfolio-bay-zeta.vercel.app/",
    caseStudyUrl: "#"
  },
  {
    id: 4,
    title: "Currency Converter",
    description: "The Currency Converter is a simple and user-friendly tool that helps you convert one currency into another using real-time exchange rates. Whether you're planning a trip, managing finances, or just curious about currency values, this tool makes it easy to stay updated with the latest conversion rates..",
    image: "data:image/png;base64,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",
    demoUrl: "https://currency-converter-tan-eta.vercel.app/",
    caseStudyUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <h2 className="text-3xl md:text-4xl text-center mb-16 animate-fade-in">Design Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="project-card transform transition-all duration-300 hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500"
            />
            <div className="project-overlay transform transition-opacity duration-300">
              <h3 className="text-xl md:text-2xl mb-3">{project.title}</h3>
              <p className="mb-6 text-gray-300">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  className="px-4 py-2 bg-teal text-dark rounded-md font-medium hover:bg-opacity-80 transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.caseStudyUrl}
                  className="px-4 py-2 border border-teal text-teal rounded-md font-medium hover:bg-teal hover:bg-opacity-10 transition-all duration-300"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
