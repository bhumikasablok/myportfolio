import {
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt
} from "react-icons/fa"

import {
  SiElementor,
  SiTailwindcss,
  SiGoogle
} from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to build responsive and
          high-performing websites.
        </p>

        <div className="relative flex items-center justify-center h-[420px] md:h-[550px]">

          {/* Center */}
          <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shadow-[0_0_40px_rgba(34,197,94,0.6)] z-10">
            Bhumika
          </div>

          {/* Orbit 1 */}
          <div className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] border border-gray-800 rounded-full animate-orbit">

            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <FaWordpress className="text-blue-500 text-3xl md:text-4xl" />
            </div>

            <div className="absolute top-1/2 -right-3 -translate-y-1/2">
              <FaHtml5 className="text-orange-500 text-3xl md:text-4xl" />
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <FaCss3Alt className="text-blue-400 text-3xl md:text-4xl" />
            </div>

          </div>

          {/* Orbit 2 */}
          <div className="absolute w-65 h-65 md:w-95 md:h-95 border border-gray-800 rounded-full animate-orbit-reverse">

            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <FaJs className="text-yellow-400 text-3xl md:text-4xl" />
            </div>

            <div className="absolute bottom-0 right-20">
              <SiElementor className="text-pink-500 text-3xl md:text-4xl" />
            </div>

            <div className="absolute top-1/2 -left-5 -translate-y-1/2">
              <FaGitAlt className="text-orange-500 text-3xl md:text-4xl" />
            </div>

          </div>

          {/* Orbit 3 */}
          <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] border border-gray-800 rounded-full animate-orbit">

            <div className="absolute bottom-0 left-1/3 -translate-x-1/2">
              <SiTailwindcss className="text-sky-400 text-3xl md:text-4xl" />
            </div>

            <div className="absolute top-1/3 -right-3">
              <SiGoogle className="text-green-500 text-3xl md:text-4xl" />
            </div>

            <div className="absolute top-1/2 -left-5 -translate-y-1/2">
              <FaWordpress className="text-blue-500 text-3xl md:text-4xl" />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills