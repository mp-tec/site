import BarberImg from '@/app/assets/barber.png'
import CoffeeImg from '@/app/assets/coffee.png'
import ShopImg from '@/app/assets/shop.png'
import BooksImg from '@/app/assets/books.png'

import Image from 'next/image'

export async function Projects() {
    return (
      <div className='flex md:mt-5 md:pl-52 space-x-5 pl-4 overflow-x-auto pr-2 pb-2 mb-32'>
          <Image src={ShopImg} width={600} quality={100} priority={true} height={600} alt="" className='h-96 rounded-sm'/>
          <Image src={BarberImg} width={600} height={600} loading="eager" alt="" className='h-96 rounded-sm'/> 
          <Image src={CoffeeImg} width={600} height={600} alt="" className='h-96 rounded-sm'/>
          <Image src={BooksImg} width={600} height={600} alt="" className='h-96 rounded-sm'/>
      </div>
    ) 
}
