import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Task Management System",
      description:
        "Full-stack task management app with role-based auth, task assignment, and status tracking.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/ronak3846/taskmanager-frontend.git",
      liveDemo: "https://tasksuite.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "Responsive React app fetching and displaying real-time city-specific weather data with clean UI.",
      techStack: ["React", "HTML", "CSS"],
      githubLink: "https://github.com/ronak3846/Weather-info.git",
      liveDemo: "https://weather-info-eta.vercel.app",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-20 border-gradient-to-r from-pink-500 to-cyan-500">
      <h1 className="text-3xl font-bold mb-10 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
    </main>
  );
}
