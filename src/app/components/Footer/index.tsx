'use client';

import Link from 'next/link'

import { GithubLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
    return (
        <div className="flex justify-center content-center pt-10">
      <Link href="https://github.com/mp-tec" className="text-white hover:text-gray-500 h-8 transition-all duration-300 animate-bounce">
            <GithubLogo size={24} alt="github" />
        </Link>
        <Link href="https://www.instagram.com/mptec.sd" className="text-white hover:text-purple-500 h-8 transition-all duration-300 animate-bounce">
            <InstagramLogo size={24} alt="instagram" />
        </Link>
        <Link href="https://github.com/mp-tec" className="text-white hover:text-green-500 h-8 transition-all duration-200 animate-bounce">
            <WhatsappLogo size={24} alt="whatsapp" />
        </Link>
      </div>
    )
}