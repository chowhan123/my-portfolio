import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {PROJECTS.map((project) => (
    <div
      key={project.id}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-gray-900"
    >

    {/* Project Image */}
    <div className="group h-64 w-full overflow-hidden flex items-center justify-center rounded-xl  border-gray-300 shadow-lg transition duration-300">
      <img
        src={project.image}
        alt={project.name}
        className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 drop-shadow-xl"
     />
    </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-lg ${
          project.id === 4 || project.id === 6 ? "text-black" : "text-white"
        } opacity-0`}
      >
        <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
        <p className="mb-6 text-sm">{project.description}</p>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
        >
          <div className="flex items-center gap-1">
            <span>View on GitHub</span>
            <MdArrowOutward />
          </div>
        </a>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Projects;
