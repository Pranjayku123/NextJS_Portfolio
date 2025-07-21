'use client';

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import projectOneImg from "@/assets/images/ProjectOne.png";
import projectTwoImg from "@/assets/images/ProjectTwo.png";
import ProjectThreeImg from "@/assets/images/ProjectThree.png";
import ProjectFourImg from "@/assets/images/ProjectFour.png";

const projectsData = [
  {
    id: 1,
    title: "Music School App",
    description: "An app for managing music courses, teachers, and schedules with a beautiful UI.",
    image: projectOneImg.src,
    url: "https://next-js-music-school-three.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "This portfolio showcases my work using Next.js, Tailwind CSS, and MagicUI.",
    image: projectTwoImg.src,
    url: "blank",
  },
  {
    id: 3,
    title: "MYRO Business Solution",
    description: 'To deliver accurate, trustworthy, and client-focused tax solutions tailored for both individuals and businesses.We specialize in simplifying tax complexities and enhancing financial outcomes through expert guidance and personalized service.',
    image: ProjectThreeImg.src,
    url: "https://www.myrobusinesssolutions.com/",
  },
  {
    id: 4,
    title: "SmartBecho",
    description: "To build an efficient and user-friendly inventory management system tailored for mobile sellers and their customers. The goal was to simplify stock tracking, sales, and customer interactions through a modern web interface.",
    image: ProjectFourImg.src,
    url: "https://mobistock.vercel.app/en/login",
  },
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const handleOpen = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <div className="font-shantell relative w-full bg-[var(--bodyBg)] text-teal-50 mx-auto h-auto min-h-[600px] sm:min-h-[650px] md:min-h-[700px] px-4 sm:px-6 font-shantell py-8">
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] sm:w-[400px] text-center flex items-center justify-center gap-2 sm:gap-4 mt-4">
          <span className="flex-1 w-[80px] sm:w-[150px] h-[2px] bg-gradient-to-r from-gray-900 via-teal-100 to-white"></span>
          <span className="text-lg sm:text-2xl font-bold text-[var(--colorPrimary)] whitespace-nowrap relative px-2 sm:px-4">
            What I’ve Built
          </span>
          <span className="flex-1 w-[80px] sm:w-[150px] h-[2px] bg-gradient-to-r from-white via-teal-100 to-gray-900"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-around mt-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative bg-[var(--bgColor)] shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full flex justify-center h-[150px] sm:h-[180px]">
              <img src={project.image} alt={project.title} className="w-full h-full object-contain rounded-md" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[var(--colorPrimary)] mt-4">
              {project.title}
            </h4>
            <button
              onClick={() => handleOpen(project)}
              className="px-6 sm:px-8 py-2 mt-4 rounded-full bg-[var(--colorPrimary)] text-black font-bold shadow hover:opacity-80 text-sm sm:text-base"
            >
              Explore More →
            </button>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[90%] sm:max-w-[600px] md:max-w-[800px] bg-[var(--bodyBg)] rounded-lg shadow-xl border border-[var(--colorPrimary)]/20">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl text-[var(--colorPrimary)]">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="flex flex-col gap-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-contain rounded-md"
              />
              <p className="text-sm sm:text-base text-teal-50">{selectedProject.description}</p>
              <div className="flex justify-center">
                {selectedProject.url !== "blank" ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-[var(--colorPrimary)] text-black font-bold shadow hover:opacity-80 text-sm sm:text-base"
                  >
                    Live Preview
                  </a>
                ) : (
                  <span className="px-6 py-2 rounded-full bg-gray-500 text-black font-bold shadow text-sm sm:text-base opacity-50 cursor-not-allowed">
                    Live Preview Unavailable
                  </span>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Projects;