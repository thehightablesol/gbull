import React, { useState } from 'react'
import logo from '../assets/logo.png';

export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between h-32 font-brother">

        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-48' />
        </a>

        <nav>
          <ul className="text-xl tracking-wide flex justify-center gap-10 items-center uppercase text-center">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#story" className="">the story<br></br> behind $pupm</a></li>
            <li><a href="#pumpenomics" className="">Pumpenomics</a></li>
            <li><a href="#buy" className="">how to buy</a></li>
            <li>
              <a href='https://jup.ag/swap/SOL-5oWc1d4Z6sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA'> <button className='bg-red-100 py-2 px-4 border-4 border-black-100 rounded-xl font-chewy text-yellow-100 uppercase text-outline text-2xl'>
                buy now
              </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6 font-montserat">
        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-32' />
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-black-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className='p-5'>
          <div className="flex items-center justify-between" onClick={ToggleSidebar}>

            <a href="/" className="mt-4">
              <img src={logo} alt="Logo" className='w-36' />
            </a>
            <i className="fa fa-times text-2xl"></i>
          </div>

          <div className="sd-body mt-10 font-brother tracking-wide">
            <ul onClick={ToggleSidebar} className='space-y-6 text-xl'>
              <li><a href="/" className="">Home</a></li>
              <li><a href="#story" className="">the story<br></br> behind $pupm</a></li>
              <li><a href="#pumpenomics" className="">Pumpenomics</a></li>
              <li><a href="#buy" className="">how to buy</a></li>
              <li>
                <a href='https://jup.ag/swap/SOL-5oWc1d4Z6sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA'><button className='bg-red-100 py-2 px-4 border-4 border-black-100 rounded-xl font-chewy text-yellow-100 uppercase text-outline text-xl'>
                  buy now
                </button>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>


      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>



    </header >
  )
}
