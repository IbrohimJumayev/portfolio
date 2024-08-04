import React from "react";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <div id="projects" className="sm:px-14 px-10 mb-10">
      <div className="text-center mt-20 mb-16 max-sm:mt-5 max-sm:mb-5 text-4xl max-sm:text-2xl font-bold">
        <h2>My Projects</h2>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="relative group">
          <Image
            id="projectImg"
            className="cursor-pointer hover:opacity-55"
            src="/gameGeek.png"
            width={400}
            height={400}
            alt="Game Geek"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href="https://github.com/IbrohimJumayev/GameGeek"
              className="text-white mb-2 font-bold  cursor-pointer"
              target="_blank"
            >
              View Code
            </a>
            <a
              href="https://game-geek.vercel.app/"
              className="text-white font-bold  cursor-pointer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="relative group">
          <Image
            id="projectImg"
            className="cursor-pointer hover:opacity-55"
            src="/postly.png"
            width={400}
            height={400}
            alt="Postly"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href="https://github.com/IbrohimJumayev/postly"
              className="text-white mb-2 font-bold  cursor-pointer"
              target="_blank"
            >
              View Code
            </a>
            <a
              href="https://postly-wine.vercel.app/"
              className="text-white font-bold  cursor-pointer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="relative group">
          <Image
            id="projectImg"
            className="cursor-pointer hover:opacity-55"
            src="/todo.png"
            width={400}
            height={400}
            alt="Todo App"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href="https://github.com/IbrohimJumayev/ReactTodoApp"
              className="text-white mb-2 font-bold  cursor-pointer"
              target="_blank"
            >
              View Code
            </a>
            <a
              href="https://react-todo-app-gold-xi.vercel.app/"
              className="text-white font-bold  cursor-pointer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
