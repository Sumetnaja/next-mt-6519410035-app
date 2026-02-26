import React from "react";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";
import Image from "../../assets/images/task.png";

export default function projects() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        <div className="shrink-0 transform scale-[0.85] origin-top-left">
          <MyCard />
        </div>

        <div className="flex-1 text-white py-2 text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-[0.1em]">
            Featured <span className="text-orange-500">Projects</span>
          </h2>

          <div className="space-y-8">
            <div className="group">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Manage Task App - fullstack web development
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed font-light max-w-2xl">
                Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end. 
                Watch the video to see the responsive landing page in action!
              </p>
              
              {/* ส่วนใส่รูปภาพโปรเจกต์ */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e]">
                {/* <img src="/path-to-your-image.png" alt="Manage Task App" className="object-cover w-full h-full" /> */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 italic text-sm">
                  <img src={Image.src} alt="Manage Task App" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <SideMenu activeTab="projects" />
      </div>
    </main>
  );
}