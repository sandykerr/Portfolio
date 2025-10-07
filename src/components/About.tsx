import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div
      className="
        w-full
        px-6 md:px-12
        py-6 md:py-12
        flex flex-col md:flex-row
        items-center
        gap-6 md:gap-12
        bg-transparent
        border-2 border-feld
        rounded-xl
        text-platinum
        transition-colors duration-300
      "
    >
      {/* Headshot */}
      <div className="
        w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48
        bg-feld rounded-full
        flex-shrink-0
      "></div>

      {/* Text + contact */}
      <div className="flex-1 min-w-0 flex flex-col justify-center items-center text-center">
        {/* About Me heading */}
        <h2 className="text-sea font-bold text-[clamp(1.5rem,4vw,3rem)] mb-6">
          About Me
        </h2>

        {/* About text */}
        <div className="prose prose-lg prose-invert text-platinum mb-8">
          <p className="text-[clamp(1rem,2vw,1.125rem)]">
            Hi, I'm Sandy. I recently graduated from the University of Maryland
            with my bachelor's in Computer Science. I work as a Python developer,
            using remote sensing data to explore various Earth and Lunar science
            questions through Machine Learning. My latest project focused on
            creating a Lunar Foundation Model at NASA Goddard, which has been a
            fun challenge after mostly focusing on Earth-related data.
          </p>
          <p className="text-[clamp(1rem,2vw,1.125rem)]">
            This portfolio contains some projects I've created over the years,
            as well as some of my contact info and information about me.
          </p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <div className="relative group">
            <a
              href="mailto:your@email.com"
              className="flex items-center justify-center w-12 h-12 bg-feld rounded-full hover:bg-sea transition-colors duration-200"
            >
              <EnvelopeIcon className="w-6 h-6 text-platinum" />
            </a>
            <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
              Email
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/username"
              target="_blank"
              className="flex items-center justify-center w-12 h-12 bg-feld rounded-full hover:bg-sea transition-colors duration-200"
            >
              <FaGithub className="w-6 h-6 text-platinum" />
            </a>
            <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              className="flex items-center justify-center w-12 h-12 bg-feld rounded-full hover:bg-sea transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6 text-platinum" />
            </a>
            <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
              LinkedIn
            </span>
          </div>

          {/* Phone */}
          <div className="relative group">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center w-12 h-12 bg-feld rounded-full hover:bg-sea transition-colors duration-200"
            >
              <PhoneIcon className="w-6 h-6 text-platinum" />
            </a>
            <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
              Phone
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
