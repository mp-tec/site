'use client';
import { useState, useEffect } from "react";
import Logo from '@/app/assets/mp.gif'
import Image from 'next/image'


export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(state => !state)
  }, [1000]) 

   return (
    <header className="justify-center bg-zinc-950 w-full h-28 flex items-center px-40">
      {isOpen ? <Image src={Logo} width={50} height={20} alt="" /> : <h1 className="text-white text-5xl">MP Tec</h1>}
       
    </header>
   )
}