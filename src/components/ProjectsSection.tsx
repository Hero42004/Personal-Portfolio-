
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
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    demoUrl: "#",
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
    title: "Real Estate Listing App",
    description: "A property listing application with advanced search functionality, map integration, and virtual tour features.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    demoUrl: "#",
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
