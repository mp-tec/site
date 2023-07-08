'use client';

import BarberImg from '@/app/assets/barber.png'
import CoffeeImg from '@/app/assets/coffee.png'
import ShopImg from '@/app/assets/shop.png'

import Image from 'next/image'

export function Projects() {
    return (
        <div className='flex' >
             <div id="keen-slider__slide" className='flex pl-60 space-x-5 overflow-x-auto pr-2'>
                <Image src={ShopImg} width={600} height={20} alt="" className='h-96 rounded-sm'/>
                <Image src={BarberImg} width={600} height={20} alt="" className='h-96 rounded-sm'/>
                <Image src={CoffeeImg} width={600} height={20} alt="" className='h-96 rounded-sm'/>
              </div>
          
         </div>
    
    ) 
}