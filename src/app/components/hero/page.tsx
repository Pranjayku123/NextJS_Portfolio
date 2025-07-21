import React from "react";
// import { FlickeringGrid } from "@/components/Magic-UI/flickering-grid";

function Hero() {
  return (
    <div className="font-shantell relative size-[550px] w-full bg-cover bg-center flex justify-center gap-2 flex-col bg-[var(--bodyBg)]">
      <div className="absolute w-full h-full inset-0 bg-[var(--colorWhite)]/5 z-0"></div>
      <div className="size-[550px] overflow-hidden w-full">
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="w-[60%] text-center">
      <h4 className="text-white font-bold text-4xl mb-4">
        Hey there! I am Pranjay 👋
      </h4>
      <p className="text-teal-50 font-bold text-xl mb-6">
        A passionate Software Developer with 2+ years of experience building
        clean, responsive, and interactive web interfaces. Let s build
        something amazing together.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-8 py-3 bg-[var(--colorPrimary)] text-black font-bold shadow">
          Download CV
        </button>
        <button className="px-6 py-3 bg-[var(--colorPrimary)] text-black font-bold shadow">
          Hire Me
        </button>
      </div>
    </div>
  </div>
</div>


  );
}

export default Hero;
