'use client';
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import Link from 'next/link';
const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Find your favourite cars and rent them in a hassle-free way. </h1>
            <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
            <Link href='/cars'><CustomButton title='Explore Cars' containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} btnType='button'/></Link>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/public/hero.png" alt="hero" fill className='object-contain'/>

                <div className='hero__image-overlay' />
            </div>
        </div>
    </div>
  )
}

export default Hero