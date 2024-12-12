import React from 'react'
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import social from '../assets/social.png';
import bottom from '../assets/bottom.jpeg';



export default function Footer() {
  return (

    <footer className='bg-blue-100 lg:px-20 px-5 lg:py-12 py-8'>
      <div className='container mx-auto'>

        <img src={social} alt='' className='flex mx-auto lg:w-8/12 lg:mb-24 mb-8  animate-beat'></img>

        <div className='flex items-center justify-center lg:gap-x-12'>

          <div className='z-10 lg:w-4/12'>
            <img src={bottom} alt='' className='rounded-full lg:w-auto w-56 border-4 border-black-100'></img>
          </div>

          <div className='bg-white-50 border-4 border-black-100 rounded-xl lg:p-10 py-4 pl-12 pr-6 lg:w-6/12 lg:space-y-8 space-y-2 lg:-translate-x-32 -translate-x-12 lg:h-auto h-32'>
            <p className='lg:text-5xl md:text-2xl text-lg uppercase text-red-100 font-brother text-center'>become a $pump bro</p>

            <div className='flex items-center justify-center'>
              <a href='https://t.co/rMNr9LWk3h' target='_blank'><img src={icon1} alt='telegram' className='lg:w-28 w-10 animate-wiggle'></img></a>
              <a href='https://x.com/pumpbysol' target='_blank'><img src={icon2} alt='twitter' className='lg:w-28 w-10 animate-wiggle'></img></a>
              <a href='https://solscan.io/token/5oWc1d4Z6sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA' target='_blank'><img src={icon3} alt='instagram' className='lg:w-28 w-10 animate-wiggle'></img></a>
            </div>
          </div>
        </div>

        <p className='pt-8 text-center font-chewy'>© {new Date().getFullYear()} by PUMP. All rights reserved.</p>
      </div>
    </footer>

  )
}
