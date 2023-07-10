'use client';

import BarberImg from '@/app/assets/barber.png'
import CoffeeImg from '@/app/assets/coffee.svg'
import ShopImg from '@/app/assets/shop.svg'

import Image from 'next/image'

export function Projects() {
    return (
             <div className='flex md:mt-5 md:pl-52 space-x-5 pl-4 overflow-x-auto pr-2 pb-2 mb-32'>
                <Image src={ShopImg} width={800} height={800} alt="" className='h-96 rounded-sm md:w-[800px]'/>
                <Image src={BarberImg} width={800} height={800} alt="" className='h-96 rounded-sm w-[800px]'/>
                <Image src={CoffeeImg} width={800} height={800} alt="" className='h-96 rounded-sm w-[800px]'/>
              </div>
    
    ) 
}