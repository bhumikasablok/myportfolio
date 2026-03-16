import Link from "next/link"
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Bhumika Sablok
            </h3>

            <p className="text-sm leading-relaxed">
              Web Developer focused on building modern, responsive and
              performance-driven websites using modern technologies.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm">

              <Link href="#about" className="hover:text-green-400 transition">
                About
              </Link>

              <Link href="#skills" className="hover:text-green-400 transition">
                Skills
              </Link>

              <Link href="#experience" className="hover:text-green-400 transition">
                Experience
              </Link>

              <Link href="#projects" className="hover:text-green-400 transition">
                Projects
              </Link>

              <Link href="#contact" className="hover:text-green-400 transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-4 text-sm">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400" />
                <span>bhumikasablok426@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-green-400" />
                <span>+91 9711446370</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-green-400" />
                <a
                  href="https://www.linkedin.com/in/bhumika-sablok-64466022b/"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  LinkedIn
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">

        <p>
          © {new Date().getFullYear()} Bhumika Sablok. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer