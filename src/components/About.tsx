export default function About() {
  return (
    <div
      className="
        container mx-auto flex flex-col md:flex-row
        items-center gap-8 py-16 px-6
        bg-eerie text-platinum transition-colors duration-300
        rounded-xl
      "
    >
      {/* Headshot placeholder */}
      <div className="w-40 h-40 bg-[#312E30] rounded-full"></div>

      {/* About text */}
      <div className="flex-1 text-platinum">
        <h2 className="text-3xl font-bold mb-4 text-sea">About Me</h2>

        <div className="prose prose-lg prose-invert text-platinum">
          <p>
            Hi, I'm Sandy. I recently graduated from the University of Maryland
            with my bachelor's in Computer Science. I work as a Python developer,
            using remote sensing data to explore various Earth and Lunar science
            questions through Machine Learning. My latest project focused on
            creating a Lunar Foundation Model at NASA Goddard, which has been a
            fun challenge after mostly focusing on Earth-related data.
          </p>
          <br/>
          <p>
            This portfolio contains some projects I've created over the years,
            as well as some of my contact info and information about me.
          </p>
          <br/>
          <p>Scroll down to see more!</p>
        </div>
      </div>
    </div>
  );
}
