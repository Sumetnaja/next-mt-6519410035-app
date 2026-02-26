import React from "react";
import MyCard from "../../components/MyCard";
import SideMenu from "../../components/SideMenu";

export default function skills() {
  const skillList = [
    { name: "React", percent: "60%", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", active: true },
    {name: "Figma", percent: "85%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", active: false },
    { name: "HTML/CSS", percent: "80%", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg", active: false },
    { name: "Next.js", percent: "80%", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg", active: false },
    { name: "Java Script", percent: "60%", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", active: false },
    { name: "GitHub", percent: "90%", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg", active: false },
  ];

  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        <div className="shrink-0 transform scale-[0.85] origin-top-left">
          <MyCard />
        </div>

        <div className="flex-1 text-white py-2 text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-10 tracking-[0.1em]">
            My <span className="text-orange-500">Skills</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
            {skillList.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className={`
                  w-24 h-40 rounded-full border-2 flex flex-col items-center justify-center gap-6 transition-all bg-[#1a1a1a]/40
                  ${skill.active ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]' : 'border-gray-800'}
                `}>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      /* เอา grayscale และ opacity ออกเพื่อให้เห็นสีจริง */
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <span className="text-orange-500 text-lg font-medium">
                    {skill.percent}
                  </span>
                </div>
                <span className="text-gray-400 text-sm md:text-base font-light">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <SideMenu activeTab="skills" />
      </div>
    </main>
  );
}