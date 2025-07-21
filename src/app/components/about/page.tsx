import React from "react";
import ProfileImg from "@/assets/images/PRK.webp";
// interface ProfileProps {
//   ProfileImg: string;
// }
import Image from "next/image";
function About() {
  return (
    <div className="font-shantell relative w-full flex flex-col justify-center gap-4 bg-[var(--bodyBg)] text-teal-50 mx-auto size-[600px]">
      <div className="w-full   flex items-center justify-center my-4">
        <div className="w-[400px] text-center flex items-center justify-center gap-4">
          <span className="flex-1 w-[150px] h-[2px] bg-gradient-to-r from-gray-900 via-teal-100 to-white"></span>
          <span className="text-2xl font-bold text-[var(--colorPrimary)] whitespace-nowrap relative px-4">
            Who I am
          </span>
          <span className="flex-1 w-[150px] h-[2px] bg-gradient-to-r from-white via-teal-100 to-gray-900"></span>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-[50%_30%] items-center justify-center gap-8 my-4 w-[80%] mx-auto">
          <div>
            <p className="text-[var(--bodyColor)] text-shadow-2xl tracking-wide">
              <span className="font-bold text-4xl text-[var(--body-color)]">
                ____Hi
              </span>
              , I’m Pranjay Kumar, a Frontend Developer with 2+ years of
              experience building responsive and user-friendly web applications.
              I work with JavaScript, TypeScript, ReactJS, NextJS, and other UI
              frameworks to create solutions that meet business needs. I’ve
              recently started learning NodeJS/ExpressJS and MongoDB to keep up
              with new trends and grow my skills. I enjoy working in teams,
              solving functional problems, and exploring new technologies to
              build better software. Feel free to connect with me if you’d like
              to chat about opportunities or just share ideas!
            </p>
          </div>

          <div
            className="relative bg-[var(--bgColor)]
    before:content-[''] 
    before:absolute 
    before:w-[90%] 
    before:h-[15px] 
    before:bg-[var(--colorPrimary)]
    before:right-0 
    before:top-[-15px] 
    after:content-[''] 
    after:absolute 
    after:top-[-15px] 
    after:right-[-15px] 
    after:h-[95%] 
    after:w-[15px] 
    after:bg-[var(--colorPrimary)]"
          >
            <Image
              src={ProfileImg.src}       
              alt="Pranjay Kumar"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
