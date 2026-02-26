import React from "react";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

export default function eduexp() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        {/* ฝั่งซ้าย: Profile Card - ปรับให้ชิดบนด้วย origin-top-left */}
        <div className="shrink-0 transform scale-90 origin-top-left">
          <MyCard />
        </div>

        {/* ฝั่งขวา: Content Section - ชิดซ้ายและเริ่มจากด้านบนเสมอการ์ด */}
        <div className="flex-1 text-white text-left py-2">
          <h2 className="text-xl md:text-2xl font-bold mb-8 tracking-[0.1em]">
            Education & <span className="text-orange-500">Experience</span>
          </h2>

          <div className="space-y-10">
            {/* รายการที่ 1: 2022 - Present */}
            <div className="group">
              <p className="text-orange-500 text-sm font-medium mb-3 italic">
                2022 - Present
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    Bachelor of Engineering in Computer Engineering
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Southeast Asia University</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">Fullstack Developer</h3>
                  <p className="text-gray-500 text-sm mt-1">Freelance</p>
                </div>
              </div>
            </div>

            {/* รายการที่ 2: 2016 - 2022 */}
            <div className="group">
              <p className="text-gray-500 text-sm font-medium mb-3 italic">
                2016 - 2022
              </p>
              <div>
                <h3 className="text-lg md:text-xl font-bold leading-tight">High School</h3>
                <p className="text-gray-500 text-sm mt-1">Theerasart School</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <SideMenu activeTab="eduexp" />
      </div>
    </main>
  );
}