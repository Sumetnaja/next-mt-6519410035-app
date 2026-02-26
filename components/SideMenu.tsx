import React from 'react'
import Link from 'next/link' // นำเข้า Link เพื่อใช้ทำลิงก์ระหว่างหน้า
import { HousePlus, UserSearch, BookSearch , SquareMenu, Briefcase, SquareTerminal, MessageSquare } from 'lucide-react'

interface SideMenuProps {
  activeTab?: 'home' | 'aboutme' | 'eduexp' | 'spec' | 'projects' | 'skills' | 'contactme';
}

export default function SideMenu({ activeTab = 'home' }: SideMenuProps) {
  // กำหนด href ให้ตรงกับชื่อโฟลเดอร์ใน app directory 
  const menuItems = [
    { icon: <HousePlus size={18} />, id: 'home', href: '/' },
    { icon: <UserSearch size={18} />, id: 'aboutme', href: '/aboutme' },
    { icon: <BookSearch size={18} />, id: 'eduexp', href: '/eduexp' },
    { icon: <SquareMenu size={18} />, id: 'spec', href: '/spec' },
    { icon: <Briefcase size={18} />, id: 'projects', href: '/projects' },
    { icon: <SquareTerminal size={18} />, id: 'skills', href: '/skills' },
    { icon: <MessageSquare size={18} />, id: 'contactme', href: '/contactme' },
  ]

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 bg-[#1e1e1e]/60 backdrop-blur-md p-3 rounded-full border border-white/10 z-50">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center ${
            activeTab === item.id 
            ? 'text-orange-500 border border-orange-500/40 bg-orange-500/10' 
            : 'text-gray-500 hover:text-white'
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}