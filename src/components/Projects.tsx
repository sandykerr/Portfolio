import React, { useState } from "react";

const projectList = [
  { title: "Project One", description: "A cool project I worked on." },
  { title: "Project Two", description: "Another project with some interesting features." },
  { title: "Project Three", description: "Yet another example project." },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? projectList.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projectList.length - 1 ? 0 : i + 1));

  return (
    <div className="bg-jet py-16 px-6 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-sea">Projects</h2>

        <div
          className="
            bg-eerie border border-feld
            shadow rounded-lg p-8 max-w-lg mx-auto
            transition-colors duration-300
          "
        >
          <h3 className="text-xl font-semibold mb-4 text-sage">
            {projectList[index].title}
          </h3>
          <p className="prose prose-lg prose-invert text-sage">
            {projectList[index].description}
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={prev}
            className="
              px-4 py-2 bg-feld text-platinum
              rounded hover:bg-sea hover:text-eerie
              transition-colors duration-200
            "
          >
            Prev
          </button>
          <button
            onClick={next}
            className="
              px-4 py-2 bg-feld text-platinum
              rounded hover:bg-sea hover:text-eerie
              transition-colors duration-200
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
