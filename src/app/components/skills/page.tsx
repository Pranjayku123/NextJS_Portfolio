import React from "react";
import OrbitingCirclesDemo from "./orbitinganimation";  
import { ShineBorder } from "@/components/Magic-UI/shineborder";
function Skills() {
  return (
    <div className="font-shantell bg-[var(--bgColor)] w-full h-auto flex flex-col justify-center size-[500px]">
      <div className="w-full   flex items-center justify-center my-4">
        <div className="w-[400px] text-center flex items-center justify-center gap-4">
          <span className="flex-1 w-[150px] h-[2px] bg-gradient-to-r from-gray-900 via-teal-100 to-white"></span>
          <span className="text-2xl font-bold text-[var(--colorPrimary)] whitespace-nowrap relative px-4">
            Tech Stacks I Know
          </span>
          <span className="flex-1 w-[150px] h-[2px] bg-gradient-to-r from-white via-teal-100 to-gray-900"></span>
        </div>
      </div>
      <div className="grid grid-cols-[30%_50%] items-center justify-center gap-8 w-full mx-auto">
        <div>
          <OrbitingCirclesDemo />
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative flex gap-2 overflow-hidden size-[120px]  text-white font-bold w-full p-4 m-2">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <h6 className="text-[16px] text-nowrap font-bold text-[var(--colorPrimary)]">
              Foundation Stack:
            </h6>
            <div>
              <ul className="flex flex-wrap items-center gap-2 font-bold text-shadow-amber-100 text-[var(--bodyColor)]">
                <li>HTML /</li>
                <li>CSS /</li>
                <li>SCSS /</li>
                <li>Tailwind CSS /</li>
                <li>JavaScript /</li>
                <li>TypeScript /</li>
                <li>jQuery /</li>
                <li>ReactJS /</li>
                <li>React-Router-Dom /</li>
                <li>Redux-Toolkit /</li>
                <li>NextJS /</li>
                <li>Rest API Integration</li>
              </ul>
            </div>
          </div>
          <div className="relative flex gap-2 overflow-hidden size-[100px] text-white font-bold w-full p-4 m-2">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <h6 className="className=text-[16px] text-nowrap font-bold text-[var(--colorPrimary)]">
              Explored UI Ecosystem:
            </h6>
            <div>
              <ul className="flex flex-wrap items-center gap-2 font-bold text-shadow-amber-100 text-[var(--bodyColor)]">
                <li>Material UI /</li>
                <li>Shadcn UI /</li>
                <li>Daisy UI /</li>
                <li>Magic UI /</li>
                <li>Mantine UI /</li>
                <li>Aceternity UI /</li>
              </ul>
            </div>
          </div>
          <div className="relative flex gap-2 overflow-hidden size-[100px] text-white font-bold w-full p-4 m-2">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <h6 className="className=text-[16px] text-nowrap font-bold text-[var(--colorPrimary)]">
              Learning Curve:
            </h6>
            <div>
              <ul className="flex flex-wrap items-center gap-2 font-bold text-[var(--bodyColor)]">
                <li>NodeJS /</li>
                <li>ExpressJS /</li>
                <li>MongoDB /</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-4 bg-[var(--colorPrimary)] size-[50px]">
        <h6 className="text-[var(--bodyBg)] font-bold text-[16px]">
          <span className="font-bold">Note: </span>I know the basics of
          TypeScript and Next.js. I’ve built some client-side projects and keep
          learning to get better at both.
        </h6>
      </div>
    </div>
  );
}

export default Skills;
