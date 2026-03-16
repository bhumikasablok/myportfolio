import { FaGithub, FaLinkedin, FaEnvelope , FaMapMarkerAlt} from "react-icons/fa"
          import { FaPhone } from "react-icons/fa"


const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?  
            Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">

  {/* Email */}
  <div className="flex items-center gap-4">
    <FaEnvelope className="text-green-400 text-xl" />
    <span className="text-gray-300">
      bhumikasablok426@gmail.com
    </span>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4">
    <FaPhone className="text-green-400 text-xl" />
    <a
      href="tel:9711446370"
      className="text-gray-300 hover:text-green-400"
    >
      +91 9711446370
    </a>
  </div>

  {/* LinkedIn */}
  <div className="flex items-center gap-4">
    <FaLinkedin className="text-green-400 text-xl" />
    <a
      href="https://www.linkedin.com/in/bhumika-sablok-64466022b/"
      target="_blank"
      className="text-gray-300 hover:text-green-400"
    >
      LinkedIn Profile
    </a>
  </div>

  {/* Address */}
  <div className="flex items-start gap-4">
    <FaMapMarkerAlt className="text-green-400 text-xl mt-1" />
    <span className="text-gray-300">
      Noida - 201310 Uttar Pradesh India
    </span>
  </div>

</div>

          {/* Contact Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-400"
            />

            <button
              type="submit"
              className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact