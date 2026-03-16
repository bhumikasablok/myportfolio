'use client'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa"

import { TypeAnimation } from "react-type-animation"



import {
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiMongodb
} from "react-icons/si"

const Hero = () => {
  return (
    <section id='home' className="relative min-h-screen flex items-center bg-gray-950 text-white overflow-hidden ">

      {/* Floating Tech Icons (Hidden on small screens) */}

      <FaReact className="hidden md:block absolute text-blue-400 text-4xl lg:text-5xl top-20 left-20 animate-bounce opacity-70" />
      <SiNextdotjs className="hidden md:block absolute text-white text-4xl lg:text-5xl bottom-32 left-40 animate-pulse opacity-70" />
      <FaNodeJs className="hidden md:block absolute text-green-500 text-4xl lg:text-5xl top-40 right-20 animate-bounce opacity-70" />
      <SiMysql className="hidden md:block absolute text-blue-300 text-4xl lg:text-5xl bottom-24 right-40 animate-pulse opacity-70" />
      <SiTailwindcss className="hidden lg:block absolute text-sky-400 text-5xl top-60 left-1/2 animate-bounce opacity-70" />
      <FaGitAlt className="hidden lg:block absolute text-orange-500 text-5xl bottom-40 right-1/3 animate-pulse opacity-70" />
      <FaHtml5 className="hidden lg:block absolute text-orange-600 text-5xl top-1/3 left-10 animate-bounce opacity-70" />
      <FaCss3Alt className="hidden lg:block absolute text-blue-500 text-5xl bottom-10 left-1/3 animate-pulse opacity-70" />
      <FaJs className="hidden lg:block absolute text-yellow-400 text-5xl top-10 right-1/3 animate-bounce opacity-70" />
      <SiTypescript className="hidden lg:block absolute text-blue-500 text-5xl bottom-1/3 right-10 animate-pulse opacity-70" />
      <SiMongodb className="hidden lg:block absolute text-green-400 text-5xl top-1/2 right-1/4 animate-bounce opacity-70" />

      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center z-10">

        {/* Left Content */}

        <div className="text-center md:text-left">

          <p className="text-green-400 mb-3 font-mono">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Bhumika Sablok
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6">
            Web Developer
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            I build modern, scalable, and high-performance web applications.
            Passionate about creating clean UI, efficient backend systems,
            and solving real-world problems using modern technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">

            <a
              href="#projects"
              className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-green-400 hover:text-green-400 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Developer Card */}

      <div className="flex justify-center">

  <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-900">

    {/* Terminal Header */}
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">

      {/* Mac Dots */}
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* File Name */}
      <p className="text-xs text-gray-400 font-mono">
        developer.ts
      </p>

      <div className="w-12"></div>

    </div>

    {/* Terminal Body */}
    <div className="p-5 font-mono text-xs sm:text-sm">

      <pre className="text-gray-300 whitespace-pre-wrap">
        <TypeAnimation
          sequence={[
`const developer = {
  name: "Bhumika Sablok",
  role: "Web Designer & WordPress Developer",
  skills: [
    "WordPress",
    "HTML",
    "CSS",
    "Basic JavaScript",
    "Elementor",
    "Responsive Design",
    "SEO Optimization",
    "Theme Customization",
    "Website Performance Optimization"
  ],
  tools: [
    "VS Code",
    "WordPress Page Builders",
    "Git"
  ],
  passion: "Building responsive and conversion-focused websites"
};`,
            2000
          ]}
          speed={55}
          cursor={true}
          repeat={0}
          style={{ display: "inline-block" }}
        />
      </pre>

    </div>

  </div>

</div>

      </div>
    </section>
  )
}

export default Hero