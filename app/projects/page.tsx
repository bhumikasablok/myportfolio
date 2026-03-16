import Image from "next/image"
import { projects } from "@/lib/projects"
import { FaExternalLinkAlt } from "react-icons/fa"

const ProjectsPage = () => {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">
          All Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition duration-500 hover:-translate-y-2"
            >

              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-800 border border-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Website */}
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition"
                >
                  <FaExternalLinkAlt />
                  Visit Website
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default ProjectsPage