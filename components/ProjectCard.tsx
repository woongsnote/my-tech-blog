import Link from "next/link";
import Image from "next/image";
import { Project } from "contentlayer/generated";

const ProjectCard = (project: Project) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
    >
      <Image
        width={600}
        height={100}
        src={project.coverImage}
        loading="lazy"
        alt="Project Description"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
      />
      <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
      <div className="relative p-4 mt-auto">
        <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
          {project.title}
        </h2>
        <span className="block text-gray-200 text-sm">
          {project.description}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
