import React from "react";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

export default function contactme() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-start justify-center p-8 md:p-24 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        
        <div className="shrink-0 transform scale-[0.85] origin-top-left">
          <MyCard />
        </div>

        <div className="flex-1 text-white py-2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">Let's get in touch!</p>

          <form className="space-y-8 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Email */}
              <div className="relative border-b border-gray-700 py-2">
                <label className="block text-orange-500 text-sm mb-1">Email</label>
                <input type="email" className="w-full bg-transparent border-none outline-none text-white p-0 focus:ring-0" />
              </div>

              {/* Phone */}
              <div className="relative border-b border-gray-700 py-2">
                <label className="block text-orange-500 text-sm mb-1">Phone</label>
                <input type="text" className="w-full bg-transparent border-none outline-none text-white p-0 focus:ring-0" />
              </div>

              {/* Name */}
              <div className="relative border-b border-gray-700 py-2">
                <label className="block text-orange-500 text-sm mb-1">Name</label>
                <input type="text" className="w-full bg-transparent border-none outline-none text-white p-0 focus:ring-0" />
              </div>

              {/* Address */}
              <div className="relative border-b border-gray-700 py-2">
                <label className="block text-orange-500 text-sm mb-1">Address</label>
                <input type="text" className="w-full bg-transparent border-none outline-none text-white p-0 focus:ring-0" />
              </div>
            </div>

            {/* Content / Message */}
            <div className="relative border-b border-gray-700 py-2">
              <label className="block text-orange-500 text-sm mb-1">Content</label>
              <textarea rows={1} className="w-full bg-transparent border-none outline-none text-white p-0 focus:ring-0 resize-none" />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="w-4 h-4 rounded border-gray-700 bg-transparent text-orange-500 focus:ring-offset-[#121212]" />
              <label htmlFor="newsletter" className="text-gray-400 text-sm font-light">
                I would like to receive the newsletter.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full md:w-auto px-12 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
              Submit
            </button>
          </form>
        </div>

        <SideMenu activeTab="contactme" />
      </div>
    </main>
  );
}