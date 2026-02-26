import React from "react";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";
import { Code2, Globe, PenTool } from "lucide-react";

export default function spec() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        <div className="shrink-0 transform scale-[0.85] origin-top-left">
          <MyCard />
        </div>

        <div className="flex-1 text-white py-2 text-left">
          <h2 className="text-lg md:text-xl font-bold mb-6 tracking-[0.1em]">
            My <span className="text-orange-500">Specializations</span>
          </h2>

          <div className="space-y-4">
            <div className="relative p-6 rounded-[25px] border border-orange-500 bg-transparent hover:bg-orange-500/5 transition-all">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg md:text-xl font-bold text-white">Front end-developer</h3>
                <Code2 className="text-orange-500" size={20} />
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-snug font-light max-w-[95%]">
                Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.
              </p>
            </div>

            <div className="relative p-6 rounded-[25px] border border-orange-500 bg-transparent hover:bg-orange-500/5 transition-all">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg md:text-xl font-bold text-white">UI/UX Designer</h3>
                <Globe className="text-orange-500" size={20} />
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-snug font-light max-w-[95%]">
                UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.
              </p>
            </div>

            <div className="relative p-6 rounded-[25px] border border-orange-500 bg-transparent hover:bg-orange-500/5 transition-all">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg md:text-xl font-bold text-white">Graphic designer</h3>
                <PenTool className="text-orange-500" size={20} />
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-snug font-light max-w-[95%]">
                As a graphic designer, I transform ideas into visually striking and impactful designs.
              </p>
            </div>
          </div>
        </div>

        <SideMenu activeTab="spec" />
      </div>
    </main>
  );
}