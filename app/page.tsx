import React from 'react'
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden relative">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        <div className="shrink-0 transform scale-[0.85] origin-top-left transition-transform">
          <MyCard />
        </div>

        <div className="flex-1 text-white text-left py-2">
          
          <h2 className="text-lg md:text-xl font-medium mb-3 tracking-[0.1em]">
            Lets Work <span className="text-orange-500">Together !</span>
          </h2>

          <h1 className="text-3xl md:text-[44px] font-bold leading-tight mb-5 text-white">
            Hi From <span className="text-orange-500">Sumet</span> ,<br />
            Interactive Designer & Fullstack Web Developer
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur libero sed voluptatem, quam inventore fuga eum alias odio veniam aut.
          </p>

          <div className="flex flex-row justify-start gap-12">
            <div className="flex flex-col">
              <h3 className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">3+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-[11px] leading-4">
                Years of<br/>Experience
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">10+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-[11px] leading-4">
                Projects<br/>Completed
              </p>
            </div>
          </div>
        </div>

        <SideMenu activeTab="home" />

      </div>
    </main>
  )
}