import React from "react";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        <div className="shrink-0 transform scale-[0.85] origin-top-left">
          <MyCard />
        </div>

        <div className="flex-1 text-white text-left py-2">
          <h2 className="text-lg md:text-xl font-medium mb-3 tracking-[0.1em]">
            About <span className="text-orange-500">Me</span>
          </h2>

          <h1 className="text-2xl md:text-[40px] font-bold leading-[1.1] tracking-[0.02em] mb-5 text-white">
            I find fulfillment in blending visual design with the power of
            coding to create meaningful experiences.
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex provident accusamus, sapiente impedit voluptatem molestias corrupti culpa at facere ad nesciunt incidunt eveniet porro totam deleniti ullam asperiores ab expedita quisquam iusto praesentium nemo quod libero nostrum. Molestias, qui distinctio?
          </p>
        </div>

        <SideMenu activeTab="aboutme" />
      </div>
    </main>
  );
}