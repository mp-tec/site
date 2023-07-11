'use client';

import CerroImg from '@/app/assets/cerro.svg'
import System from '@/app/assets/system.svg'
import Terminal from '@/app/assets/terminal.svg'
import DesignPessoal from '@/app/assets/designpessoal.svg'

import Image from 'next/image'

export function Designs() {
    return (
        <div className='flex md:mt-5 md:pl-52 space-x-5 pl-4 overflow-x-auto pr-2 pb-2'>
            <Image src={CerroImg} width={800} height={800} alt="" className='h-96 rounded-sm w-[1000px]' />
            <Image src={System} width={800} height={800} alt="" className='h-96 rounded-sm w-[1000px]' />
            <Image src={Terminal} width={800} height={800} alt="" className='h-96 rounded-sm w-[1000px]' />
            <Image src={DesignPessoal} width={800} height={800} alt="" className='h-96 rounded-sm w-[1000px]' />       
        </div>
    
    ) 
}
