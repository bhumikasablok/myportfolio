import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="bg-gray-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and the technologies
            I use to build modern web experiences.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content */}
          <div>

            <h3 className="text-2xl font-semibold mb-6 text-green-400">
              Web Developer
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Hi, I'm <span className="text-white font-semibold">Bhumika Sablok</span>, 
              a web developer passionate about building responsive and 
              high-performance websites.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I specialize in creating modern websites using 
              WordPress, HTML, CSS and JavaScript while focusing on 
              performance, SEO and user experience.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              My goal is to build websites that are not only visually
              appealing but also optimized for conversions and
              real-world business needs.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-green-400">9+</h4>
                <p className="text-gray-400 text-sm">Months Experience</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
                <h4 className="text-2xl font-bold text-green-400">10+</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

            </div>

          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <div className="relative group">

              <div className="relative rounded-2xl overflow-hidden">

                <Image
                  src="/bhumi.png"
                  alt="Bhumika Sablok"
                  width={420}
                  height={420}
                  className="object-cover h-[420px] w-[320px]"
                />

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About