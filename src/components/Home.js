import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import top from '../assets/top.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import about from '../assets/about.png'
import about1 from '../assets/32.png'
import a from '../assets/a.png'
import b from '../assets/b.png'
import d from '../assets/d.png'
import buy from '../assets/buy.png'
// import partners from '../assets/partners.png'
import pumpenomics from '../assets/pumpenomics.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import copy from '../assets/copy.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer'


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className="overflow-hidden text-black-100 bg-white-50">

            <div className="lg:px-20 px-5 bg-yellow-100 md:h-auto h-screen">
                <div className='container mx-auto'>

                    <Menu />

                    <div className='py-6 flex flex-col items-stretch justify-center gap-y-10 md:pt-0 pt-12'>
                        <img data-aos='zoom-in-up' src={top} alt='' className='flex mx-auto lg:w-7/12'></img>

                        <div className='flex items-center lg:justify-start justify-center lg:-translate-y-20'>
                            <a href='https://t.co/rMNr9LWk3h' target='_blank' rel="noreferrer"><img src={icon1} alt='telegram' className='md:w-24 w-16 duration-150 animate-wiggle'></img></a>
                            <a href='https://x.com/pumpbysol' target='_blank' rel="noreferrer"><img src={icon2} alt='twitter' className='md:w-24 w-16 duration-150 animate-wiggle'></img></a>
                            <a href='https://solscan.io/token/5oWc1d4Z6sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA' target='_blank' rel="noreferrer"><img src={icon3} alt='' className='md:w-24 w-16 duration-150 animate-wiggle'></img></a>
                            <a href='https://www.dextools.io/app/en/solana/pair-explorer/BnWyvLffiDViDrhvKoLZ24XwjCZwsjjFbuEuaT2Sbha2?t=1732941262458' target='_blank' rel="noreferrer"><img src={icon4} alt='dextools' className='md:w-24 w-16 duration-150 animate-wiggle'></img></a>
                            <a href='https://dexscreener.com/solana/bnwyvlffidvidrhvkolz24xwjczwsjjfbueuat2sbha2' target='_blank' rel="noreferrer"><img src={icon5} alt='dexscreener' className='md:w-24 w-16 duration-150 animate-wiggle'></img></a>
                        </div>

                        <div className='md:flex hidden items-center lg:justify-end justify-center lg:-translate-y-16'>
                            <p className='p-2 border-4 border-r-0 rounded-r-none border-black-100 bg-white-50 rounded-md font-chewy md:text-2xl text-sm tracking-wide'>
                                CA: 50Wc1d426sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA
                            </p>
                            <button onClick={() => copyToClipBoard('50Wc1d426sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA')} ><img src={copy} alt='' className='w-16'></img></button>
                            <span className="absolute duration-300 translate-y-12 -translate-x-3 font-chewy text-sm">
                                {copySuccess}
                            </span>
                        </div>

                        <div className='md:hidden flex items-center justify-between lg:-translate-y-12 border-4 bg-white-50 rounded-md p-3'>
                            <p className='border-r-0 rounded-r-none border-black-100 font-chewy md:text-2xl text-sm tracking-wide break-words w-10/12'>
                                CA:50Wc1d426sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA
                            </p>

                            <button onClick={() => copyToClipBoard('50Wc1d426sbrH75J4jSgCCwpgpmJwkpLQbNxiP15qGAA')} ><img src={copy} alt='' className='w-12'></img></button>
                            <span className="absolute font-chewy -translate-y-14 text-sm">
                                {copySuccess}
                            </span>
                        </div>

                    </div>


                </div>
            </div>


            {/* pump story section */}

            <div id='story' className="lg:px-20 px-5 lg:pt-20 pt-6 bg-story border-t-4 border-black-100">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-end gap-x-12">

                        <div className='lg:w-6/12 pb-12'>

                            <img src={a} alt='' className='md:w-28 w-24 absolute z-10 lg:-mt-10 -mt-6 lg:-ml-16 -ml-1'></img>
                            <div className='text-center'>
                                <div className='-rotate-6'>
                                    <p className='rounded-full py-2 px-8 border border-black-100 bg-yellow-50 text-outline font-bangers text-red-100 md:text-6xl text-3xl lg:w-1/2 animate-beat'>
                                        THE STORY
                                    </p>
                                </div>

                                <div className='rotate-3'>
                                    <p className='rounded-full py-2 px-5 border border-black-100 bg-white-100 text-outline font-bangers text-red-100 md:text-6xl text-3xl lg:w-1/2 lg:ml-72 lg:-mt-6 animate-beat'>
                                        BEHIND $PUMP
                                    </p>
                                </div>

                            </div>

                            <div className='md:space-y-8 space-y-5 mt-8 text-yellow-100 text-outline md:text-3xl text-xl font-chewy'>
                                <p data-aos='fade-in' className=''>
                                    What's the secret behind all those legendary green candles and meme coin runs? It wasn't luck. It wasn't magic. It was a trainer, working tirelessly behind the Scenes.
                                </p>

                                <p data-aos='fade-in' data-aos-delay='50' className=''>
                                    For years, while the dog and cat memes grabbed the headlines, the Trainer was in the dojo, pushing them to their limits. Every pump, every breakout-it was the result of hard work, discipline, and focus.
                                </p>

                                <p data-aos='fade-in' data-aos-delay='100' className=''>
                                    Now, the Trainer is ready to step out of the shadows and take its own path. Built on Solana and powered by a community that doesn't quit, it's here to show what happens when the Trainer becomes the star.
                                </p>

                                <p data-aos='fade-in' data-aos-delay='150' className=''>
                                    This isn't just another coin. It's a movement built on hustle, heart, and a drive to redefine what it means to pump.
                                </p>
                            </div>

                        </div>


                        <div className='lg:w-6/12'>
                            <img data-aos='fade-up' data-aos-delay='200' src={about} alt='about'></img>
                        </div>

                    </div>

                </div>
            </div>

            {/* pumpenomics */}

            <div id='pumpenomics' className="lg:pt-20 pt-5 bg-yellow-100 lg:px-20 px-5 border-t-4 border-black-100">

                <div className='container mx-auto'>
                    <div className='flex items-end'>
                        <img src={b} alt='' className='md:w-28 w-20 translate-x-12 z-10 rotate-6 md:-translate-y-12 -translate-y-5'></img>

                        <div className='animate-beat lg:pb-20 pb-8'>
                            <button className='rounded-full py-2 px-12 border border-black-100 bg-yellow-50 text-outline font-bangers text-red-100 md:text-6xl text-3xl -rotate-6 text-center uppercase'>
                                pumpenomics
                            </button>
                        </div>
                    </div>

                    <div className='lg:flex items-center justify-center lg:space-y-0 space-y-6  mt-8'>

                        <div className='lg:w-3/12 lg:space-y-24 space-y-5'>

                            <div data-aos='fade-in' data-aos-delay='150' className='text-blue-100 md:text-5xl text-3xl font-brother text-outline tracking-wide text-center uppercase'>
                                <p>total supply</p>
                                <p>-</p>
                                <p>1,000,000,000</p>
                            </div>

                            <div data-aos='fade-in' data-aos-delay='150' className='text-blue-100 md:text-5xl text-3xl font-brother text-outline tracking-wide text-center uppercase'>
                                <p>network</p>
                                <p>-</p>
                                <p>solana</p>
                            </div>

                            <div data-aos='fade-in' className='text-blue-100 md:text-5xl text-3xl font-brother text-outline tracking-wide text-center uppercase lg:hidden block'>
                                <p>token ticker</p>
                                <p>-</p>
                                <p>$pump</p>
                            </div>
                        </div>

                        <div className='lg:w-6/12'>
                            <img data-aos='fade-up' src={pumpenomics} alt='' className=''></img>
                        </div>

                        <div data-aos='fade-in' data-aos-delay='150' className='lg:w-3/12'>
                            <div className='text-blue-100 md:text-5xl text-2xl font-brother text-outline tracking-wide text-center uppercase lg:block hidden -translate-x-44'>
                                <p>token ticker</p>
                                <p>-</p>
                                <p>$pump</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* how to buy section */}

            <div id='buy' className="lg:px-20 px-5 lg:pt-20 pt-6 bg-white-50 lg:-mt-0 -mt-6 border-t-4 border-black-100">
                <div className='container mx-auto'>

                    <div className='lg:flex hidden items-center justify-center gap-x-12'>

                        <div className='lg:w-5/12'>
                            <div className='space-y-6'>

                                <div className='border-4 border-black-100 card-shadow md:p-8 p-6 rounded-lg flex items-center lg:gap-x-0 gap-x-5 duration-150 hover:scale-105'>
                                    <p className='border-4 border-black-100 rounded-md p-5 text-center md:w-14 w-8 md:h-16 h-10 flex items-center justify-center bg-blue-50 text-yellow-100 text-outline md:text-5xl text-xl font-brother lg:-translate-x-16'>
                                        1
                                    </p>

                                    <p className='md:text-4xl text-2xl font-semibold font-chewy tracking-wider'>Create a wallet</p>
                                </div>

                                <div className='border-4 border-black-100 card-shadow md:p-8 p-6 rounded-lg flex items-center lg:gap-x-0 gap-x-5 duration-150 hover:scale-105'>
                                    <p className='border-4 border-black-100 rounded-md p-5 text-center md:w-14 w-8 md:h-16 h-10 flex items-center justify-center bg-feature-100 text-yellow-100 text-outline md:text-5xl text-xl font-brother lg:-translate-x-16'>
                                        2
                                    </p>

                                    <p className='md:text-4xl text-2xl font-semibold font-chewy tracking-wider'>Get Solana</p>
                                </div>

                                <div className='border-4 border-black-100 card-shadow md:p-8 p-6 rounded-lg flex items-center lg:gap-x-0 gap-x-5  duration-150 hover:scale-105'>
                                    <p className='border-4 border-black-100 rounded-md p-5 text-center md:w-14 w-8 md:h-16 h-10 flex items-center justify-center bg-feature-200 text-yellow-100 text-outline md:text-5xl text-xl font-brother lg:-translate-x-16'>
                                        3
                                    </p>

                                    <p className='md:text-4xl text-2xl font-semibold font-chewy tracking-wider'>Go to Meteora</p>
                                </div>

                                <div className='border-4 border-black-100 card-shadow md:p-8 p-6 rounded-lg flex items-center lg:gap-x-0 gap-x-5  duration-150 hover:scale-105'>
                                    <p className='border-4 border-black-100 rounded-md p-5 text-center md:w-14 w-8 md:h-16 h-10 flex items-center justify-center bg-feature-300 text-yellow-100 text-outline md:text-5xl text-xl font-brother lg:-translate-x-16'>
                                        4
                                    </p>

                                    <p className='md:text-4xl text-2xl font-semibold font-chewy tracking-wider'>Switch Solana for Pump</p>
                                </div>

                            </div>
                        </div>

                        <div className='lg:w-7/12'>
                            <div className='flex items-end justify-end'>
                                <div className='animate-beat'>
                                    <button className='rounded-full py-2 px-16 border border-black-100 bg-yellow-50 text-outline font-bangers text-red-100 md:text-6xl text-3xl rotate-6 text-center uppercase lg:float-right'>
                                        how to buy
                                    </button>
                                </div>
                                <img src={d} alt='' className='md:w-28 w-20 rotate-6 -ml-12 translate-y-4'></img>
                            </div>

                            <img data-aos='fade-up' src={buy} alt=''></img>
                        </div>
                    </div>

                    <div className='lg:hidden block md:h-auto h-screen'>

                        <div className=''>
                            <div className='flex items-end justify-center pb-12'>
                                <div className='animate-beat'>
                                    <button className='rounded-full py-2 px-16 border border-black-100 bg-yellow-50 text-outline font-bangers text-red-100 md:text-6xl text-3xl rotate-6 text-center uppercase lg:float-right'>
                                        how to buy
                                    </button>
                                </div>
                                <img src={d} alt='' className='md:w-28 w-20 rotate-6 -ml-12 translate-y-4'></img>
                            </div>

                            <img data-aos='fade-up' src={buy} alt=''></img>
                        </div>

                        <div className='pb-6'>
                            <div className='space-y-6'>

                                <div className='flex items-start justify-between gap-6'>

                                    <div className='border-2 border-black-100 shadow-buy p-3 rounded-lg flex items-center duration-150 hover:scale-105 w-1/2'>
                                        <p className='border-2 border-black-100 rounded-md p-3 text-center w-6 h-6 flex items-center justify-center bg-feature-100 text-yellow-100 text-outline text-lg font-brother absolute -ml-7'>
                                            1
                                        </p>

                                        <p className='md:text-xl text-lg font-chewy tracking-wide pl-3'>Create a Wallet</p>
                                    </div>

                                    <div className='border-2 border-black-100 shadow-buy p-3 rounded-lg flex items-center duration-150 hover:scale-105 w-1/2'>
                                        <p className='border-2 border-black-100 rounded-md p-3 text-center w-6 h-6 flex items-center justify-center bg-feature-100 text-yellow-100 text-outline text-lg font-brother absolute -ml-7'>
                                            2
                                        </p>

                                        <p className='md:text-xl text-lg font-chewy tracking-wide pl-3'>Get Solana</p>
                                    </div>
                                </div>

                                <div className='flex items-start justify-between gap-6'>

                                    <div className='border-2 border-black-100 shadow-buy p-3 rounded-lg flex items-center duration-150 hover:scale-105 w-1/2'>
                                        <p className='border-2 border-black-100 rounded-md p-3 text-center w-6 h-6 flex items-center justify-center bg-feature-100 text-yellow-100 text-outline text-lg font-brother absolute -ml-7'>
                                            3
                                        </p>

                                        <p className='md:text-xl text-lg font-chewy tracking-wide pl-3'>Go to Meteora</p>
                                    </div>

                                    <div className='border-2 border-black-100 shadow-buy p-3 rounded-lg flex items-center duration-150 hover:scale-105 w-1/2'>
                                        <p className='border-2 border-black-100 rounded-md p-3 text-center w-6 h-6 flex items-center justify-center bg-feature-100 text-yellow-100 text-outline text-lg font-brother absolute -ml-7'>
                                            4
                                        </p>

                                        <p className='md:text-xl text-lg font-chewy tracking-wide pl-3'>Swap Solana for Pump</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 lg:py-24 py-6 bg-blue-100 border-t-4 border-black-100">
                <div className='container mx-auto'>

                    <div className='lg:mb-20 mb-8'>
                        <img src={about1} alt='' className='lg:w-8/12 flex mx-auto animate-beat'></img>
                    </div>

                    <div className='grid md:grid-cols-3 grid-cols-1 items-start justify-center lg:gap-x-24 md:gap-x-6 gap-y-6'>

                        <div data-aos='fade-up' className='bg-white-50 p-6 border-3 border-black-100 rounded-md card-shadow'>
                            <img src={card1} alt='card' className='border-3 border-black-100 rounded-md'></img>
                            <div className='text-center font-chewy pt-5 space-y-5'>
                                <p className='md:text-2xl text-xl'>The Bull Awakens</p>
                                <p className='md:text-xl text-lg'>The energy is unmatched, the strength is legendary. The bull's journey has just begun.</p>
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='150' className='bg-white-50 p-6 border-3 border-black-100 rounded-md card-shadow'>
                            <img src={card2} alt='card' className='border-3 border-black-100 rounded-md'></img>
                            <div className='text-center font-chewy pt-5 space-y-5'>
                                <p className='md:text-2xl text-xl'>Bullish Moves</p>
                                <p className='md:text-xl text-lg'>From the boardroom to the dojo, it's all about making power plays.</p>
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='bg-white-50 p-6 border-3 border-black-100 rounded-md card-shadow'>
                            <img src={card3} alt='card' className='border-3 border-black-100 rounded-md'></img>
                            <div className='text-center font-chewy pt-5 space-y-5'>
                                <p className='md:text-2xl text-xl'>Full Throttle</p>
                                <p className='md:text-xl text-lg'>No limits, no brakes—just raw power charging ahead.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Our Partners section */}

            {/* <div id="partners" className="lg:pt-20 pt-5 lg:px-20 px-5 bg-white-50 border-y-4 border-black-100">
                <div className='container mx-auto'>
                    <h2 className='text-outline font-bangers text-red-100 md:text-6xl text-3xl text-center'>
                        Our Partners
                    </h2>


                    <div className='lg:flex items-center justify-center gap-x-12'>
                        <div className='lg:w-6/12'>
                            <img data-aos='fade-up' src={partners} alt='partner'></img>
                        </div>

                        <div className='lg:w-6/12 lg:space-y-16 space-y-8 pb-6'>

                            <div className='lg:flex items-center justify-center gap-12 lg:space-y-0 space-y-8'>
                                <div className='border-4 border-black-100 card-shadow p-6 rounded-lg lg:w-1/2 w-full h-24 bg-white-100 lg:-rotate-6 duration-150 animate-wiggle'>

                                </div>

                                <div className='border-4 border-black-100 card-shadow p-6 rounded-lg lg:w-1/2 w-full h-24 bg-feature-400 lg:rotate-6 duration-150 animate-wiggle'>

                                </div>
                            </div>

                            <div className='lg:flex items-center justify-center gap-12 lg:space-y-0 space-y-8'>
                                <div className='border-4 border-black-100 card-shadow p-6 rounded-lg lg:w-1/2 w-full h-24 bg-feature-100 lg:rotate-6 duration-150 animate-wiggle'>

                                </div>

                                <div className='border-4 border-black-100 card-shadow p-6 rounded-lg lg:w-1/2 w-full h-24 bg-blue-100 lg:-rotate-3 duration-150 animate-wiggle'>

                                </div>
                            </div>

                            <div className='lg:flex items-center justify-center gap-12 lg:space-y-0 space-y-8'>
                                <div className='border-4 border-black-100 card-shadow p-6 rounded-lg lg:w-1/2 w-full h-24 bg-feature-300 lg:-rotate-6 duration-150 animate-wiggle'>

                                </div>

                                <div className='border-4 border-black-100 card-shadow p-6 rounded-lg lg:w-1/2 w-full h-24 bg-feature-200 lg:rotate-12 duration-150 animate-wiggle'>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <Footer />

        </div>
    )
}
