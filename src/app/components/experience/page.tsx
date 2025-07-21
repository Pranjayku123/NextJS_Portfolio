import React from "react";
import companyLogo from "@/assets/images/pilog-logo-trans-bg.png"
import Image from "next/image";

function Experence() {
  return (
    <div className="font-shantell relative w-full  bg-[var(--bgColor)] text-teal-50 mx-auto size-[500px] px-4 font-shantell">
      <div className="w-full  flex items-center justify-center">
        <div className="w-[400px] text-center flex items-center justify-center gap-4 mt-4">
          <span className="flex-1 w-[150px] h-[2px] bg-gradient-to-r from-gray-900 via-teal-100 to-white"></span>
          <span className="text-2xl font-bold text-[var(--colorPrimary)] whitespace-nowrap relative px-4">
            Professional Experence
          </span>
          <span className="flex-1 w-[150px] h-[2px] bg-gradient-to-r from-white via-teal-100 to-gray-900"></span>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-around gap-4 mt-8">
        <div className="relative ml-10 p-6">
            <div className="absolute top-[38%] left-[45%] h-[50px] w-[1px] bg-[var(--bodyColor)]"></div>
            <div className="border rounded-2xl p-4 bg-[var(--bodyBg)]">
                <div><span> <Image src={companyLogo.src}  alt="current logo" className="w-[80px]" /> </span></div>
                <div className="mt-2 flex align-middle justify-between"><span className="text-[var(--color-accent)]"> Frontend Developer</span><span> Nov-2022 - Present  <sup className="text-[var(--bodyColor)]"> Hyderabad </sup></span></div>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Experence;
