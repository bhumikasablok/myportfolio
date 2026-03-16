import { FaGraduationCap } from "react-icons/fa"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "GNIOT College, Greater Noida",
    university: "Dr. A.P.J Abdul Kalam Technical University (AKTU)",
    year: "2023 – 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "ITS College, Mohan Nagar",
    university: "Chaudhary Charan Singh University (CCSU)",
    year: "2020 – 2023",
  },
  {
    degree: "Higher Secondary Education (12th)",
    institute: "Ram Kishan Institute",
    university: "",
    year: "2020",
  },
  {
    degree: "Secondary Education (10th)",
    institute: "Shree Thakur Dwara Balika Vidhyalaya, Ghaziabad",
    university: "",
    year: "2018",
  },
]

const Education = () => {
  return (
    <section id="education" className="bg-gray-950 text-white py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey that built the foundation of my
            technical and problem-solving skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-800"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative pl-16 mb-16">

              {/* Timeline Icon */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-black text-sm" />
              </div>

              {/* Card */}
              <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:border-green-400 hover:-translate-y-1 transition duration-300">

                <h3 className="text-xl font-semibold">
                  {edu.degree}
                </h3>

                <p className="text-green-400 text-sm mt-1">
                  {edu.year}
                </p>

                <p className="text-gray-400 text-sm mt-3">
                  {edu.institute}
                </p>

                {edu.university && (
                  <p className="text-gray-500 text-sm">
                    Affiliated to {edu.university}
                  </p>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education