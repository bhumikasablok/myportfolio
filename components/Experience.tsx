import { FaBriefcase } from "react-icons/fa"

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-950 text-white py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Experience
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            My experience working as a professional web developer
            building business websites and real-world applications.
          </p>
        </div>

        {/* Experience Card */}
        <div className="flex justify-center">

          <div className="group max-w-3xl w-full bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-10 hover:border-green-400 transition duration-300 hover:-translate-y-2">

            {/* Top Row */}
            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-lg">
                <FaBriefcase className="text-black text-lg" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Web Developer
                </h3>

                <p className="text-green-400 text-sm">
                  Shulyn Technologies • July 2025 – Present
                </p>
              </div>

            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              Working as a Web Developer at Shulyn Technologies where I design,
              develop, and maintain business websites. My responsibilities
              include responsive UI development, WordPress customization,
              performance optimization, and deployment of production-ready
              websites.
            </p>

            {/* Skills Used */}
            <div className="flex flex-wrap gap-3">

              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                WordPress
              </span>

              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                HTML
              </span>

              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                CSS
              </span>

              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                MySQL
              </span>

              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                Website Deployment
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience