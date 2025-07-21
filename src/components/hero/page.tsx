import React from "react";
import Image from "next/image";
import heroBGImg from '@/assets/images/heroBG.jpg';
const Hero: React.FC = () => {
  return (
    <div className="font-shantell relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[520px] bg-cover bg-center flex justify-center gap-2 flex-col bg-[var(--bodyBg)]">
      <div className="absolute w-full h-full inset-0 bg-black/60 z-10"></div>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image src={heroBGImg} alt="HTML" />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-center px-4">
          <h4 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Hey there! I am Pranjay 👋
          </h4>
          <p className="text-teal-50 font-bold text-base sm:text-lg md:text-xl mb-6">
            A passionate Software Developer with 2+ years of experience building
            clean, responsive, and interactive web interfaces. Let s build
            something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[var(--colorPrimary)] text-black font-bold shadow text-sm sm:text-base">
              Download CV
            </button>
            <button className="px-6 py-2 sm:px-6 sm:py-3 bg-[var(--colorPrimary)] text-black font-bold shadow text-sm sm:text-base">
              Hire Me
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
