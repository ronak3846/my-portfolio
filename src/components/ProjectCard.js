export default function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  liveDemo,
}) {
  return (
    <div className="bg-black/30 border-amber-200 backdrop-blur-lg p-6 rounded-lg shadow hover:shadow-pink-500/50 transition transform hover:scale-105">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-pink-500/20 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
