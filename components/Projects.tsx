import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
import { projects } from "@/lib/projects"

const Projects = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects built for businesses focusing on performance,
            scalability, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition duration-500 hover:-translate-y-2"
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

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

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

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-green-400 transition"
                >
                  <FaExternalLinkAlt />
                  Visit Website
                </a>

              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10" />

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-20">

          <Link
            href="/projects"
            className="relative px-10 py-4 bg-green-500 text-black font-semibold rounded-lg overflow-hidden transition hover:scale-105"
          >
            Explore More Projects
          </Link>

        </div>

      </div>
    </section>
  )
}

export default Projects