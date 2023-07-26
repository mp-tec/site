import CerroImg from '@/app/assets/cerro.png'
import System from '@/app/assets/system.png'
import Terminal from '@/app/assets/terminal.png'
import DesignPessoal from '@/app/assets/designpessoal.png'

import Image from 'next/image'

export function Designs() {
    return (
        <div className='flex md:mt-5 md:pl-52 space-x-5 pl-4 overflow-x-auto pr-2 pb-2'>
            <Image src={CerroImg} alt="" className='h-96 rounded-sm w-[1000px]' />
            <Image src={System} width={600} height={600} loading="eager" alt="" className='h-96 rounded-sm md:w-[1000px]' />
            <Image src={Terminal} width={600} height={600} alt="" className='h-96 rounded-sm w-[1000px]' />
            <Image src={DesignPessoal} width={600} height={600} alt="" className='h-96 rounded-sm w-[1000px]' />       
        </div>
    
    ) 
}
