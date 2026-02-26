import React from "react";
import picprofile from "@/assets/images/mee.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

export default function MyCard() {
  return (
    <div className="flex items-center justify-center p-2 bg-transparent">
      <div className="w-full max-w-[320px] bg-[#1D1C1D] rounded-[35px] p-6 flex flex-col shadow-2xl border border-white/5">
        
        {/* Name Header - ชิดซ้ายและลดขนาด font */}
        <div className="w-full text-left">
          <h1 className="text-white text-2xl mb-4 tracking-tight font-semibold">
            <span className="text-orange-500">S</span>umet
          </h1>
        </div>

        {/* Profile Image Area - ลดระยะ mb */}
        <div className="w-full aspect-square bg-white rounded-[25px] overflow-hidden mb-5 shadow-lg">
          <img
            src={picprofile.src}
            alt="Sumet Profile"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Info Text - ปรับขนาด Text ลง */}
        <div className="text-center mb-6">
          <p className="text-white text-lg font-medium tracking-[0.1em] mb-1 uppercase">
            STU ID: 6519410035
          </p>
          <p className="text-gray-400 text-base font-light">
            Fullstack Web Developer
          </p>
        </div>

        {/* Social Icons - ลดขนาด Icon จาก 3xl เป็น 2xl */}
        <div className="flex gap-4 mb-8 items-center justify-center text-white/80">
          <a href="#" className="hover:text-blue-500 hover:scale-110 transition-all text-2xl"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400 hover:scale-110 transition-all text-2xl"><FaXTwitter /></a>
          <a href="#" className="hover:text-pink-500 hover:scale-110 transition-all text-2xl"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 hover:scale-110 transition-all text-2xl"><FaLinkedin /></a>
          <a href="#" className="hover:text-red-500 hover:scale-110 transition-all text-2xl"><FaGoogle /></a>
        </div>

        {/* Action Button - font-normal ตามที่ต้องการ และลดความสูงปุ่ม */}
        <button className="w-full bg-[#ff5a00] text-black py-3 rounded-xl hover:bg-orange-600 transition-all active:scale-95 text-xl font-normal uppercase shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
          HIRE ME !
        </button>
      </div>
    </div>
  );
}