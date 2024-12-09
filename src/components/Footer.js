import React from 'react'
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import footer from '../assets/footer.png';
import social from '../assets/social.png';



export default function Footer() {
  return (

    <footer className='bg-blue-100 lg:px-20 px-5 pt-12 pb-20 lg:h-screen'>
      <div className='container mx-auto'>

        <img src={social} alt='' className='flex mx-auto lg:w-8/12 lg:mb-24 mb-8  animate-beat'></img>


        <div>
          <img src={footer} alt='' className='lg:w-8/12 flex mx-auto absolute left-0 right-0'></img>

          <div className='relative z-20 flex lg:-mt-12'>
            <div className='w-1/2'>

            </div>

            <div className='lg:mt-28 md:mt-16 mt-10 space-y-3 lg:-ml-12 -ml-6'>
              <p className='md:text-5xl text-xl uppercase text-center text-red-100 font-brother'>become a $pump bro</p>

              <div className='flex items-center justify-center'>
                <a href='https://t.co/rMNr9LWk3h'><img src={icon1} alt='telegram' className='lg:w-28 w-10'></img></a>
                <a href='https://x.com/pumpbysol'><img src={icon2} alt='twitter' className='lg:w-28 w-10'></img></a>
                <a href='https://solscan.io/token/5oWc1d4Z6sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA'><img src={icon3} alt='instagram' className='lg:w-28 w-10'></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
