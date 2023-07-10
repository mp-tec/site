'use client';
import Logo from '@/app/assets/logo.gif'
import Image from 'next/image'
import Link from 'next/link'

import { Envelope, GithubLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Header() {
   return (
    <header className="bg-zinc-950 w-full h-24 flex justify-between items-center border-b-2 border-gray-500 space-x-10 px-4 md:px-52">
      <Link href="/"><Image src={Logo} width={60} height={60} alt="logo MP Tec" /></Link>
       
       <div className="flex items-center justify-center ">
       <Link href="https://github.com/mp-tec" className="text-white hover:text-zinc-600 h-8 transition-all duration-300 animate-bounce" target='blank'>
            <GithubLogo size={32} alt="github" />
        </Link>
        <Link href="https://www.instagram.com/mptec.sd" className="text-white hover:text-purple-500 h-8 transition-all duration-300 animate-bounce" target='blank'>
            <InstagramLogo size={32} alt="instagram"/>
        </Link>
        <Link href="https://wa.me/5555991077852/?text=Olá,tenho interesse em comprar um site!" className="text-white hover:text-green-500 h-8 transition-all duration-200 animate-bounce" target='blank'>
            <WhatsappLogo size={32} alt="whatsapp" />
        </Link>
        <Link href="mailto:mptec24@gmail.com" className="text-white hover:text-gray-400 h-8 transition-all duration-200 animate-bounce" target='blank'>
            <Envelope size={32} alt="email" />
        </Link>
        </div>
    </header>
   )
}