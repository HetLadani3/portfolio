import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='w-full relative flex flex-col items-center justify-center pt-8 pb-20 md:pb-24 lg:pb-28 select-none font-[font1] z-10'>
            {/* Core Buttons Flex Container (Centered Horizontally) */}
            <div className='flex flex-col items-center gap-5 z-10 w-full'>
                {/* Mobile-only Summary - rendered above centered buttons to prevent overlap */}
                <p className='block md:hidden text-[11px] leading-relaxed text-neutral-300 font-light text-center max-w-xs px-4 pb-2'>
                    I am a passionate software engineer and web developer focused on constructing elegant, high-performance systems and interactive digital interfaces. I specialize in building robust full-stack applications and solving complex algorithms.
                </p>

                {/* Side-by-side Centered Outline Pill Buttons */}
                <div className='flex items-center justify-center gap-3.5 md:gap-6'>
                    {/* PROJECTS Pill Button */}
                    <Link 
                        to='/projects' 
                        className='border-2 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full py-2.5 px-6 md:py-4 md:px-11 lg:py-5 lg:px-16 flex items-center justify-center uppercase tracking-widest font-[font2] text-sm md:text-[2.2vw] lg:text-[2vw] transition-all duration-300 bg-transparent pointer-events-auto'
                    >
                        Projects
                    </Link>

                    {/* SKILLS Pill Button */}
                    <Link 
                        to='/skills' 
                        className='border-2 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full py-2.5 px-6 md:py-4 md:px-11 lg:py-5 lg:px-16 flex items-center justify-center uppercase tracking-widest font-[font2] text-sm md:text-[2.2vw] lg:text-[2vw] transition-all duration-300 bg-transparent pointer-events-auto'
                    >
                        Skills
                    </Link>
                </div>
            </div>

            {/* Desktop-only Summary Paragraph (Absolute Positioned Bottom Right - elevated above global footer social handles) */}
            <p className='hidden md:block absolute right-6 md:right-16 lg:right-24 bottom-24 md:bottom-28 lg:bottom-32 text-[12px] lg:text-[13px] leading-relaxed text-neutral-300 font-light text-left max-w-[260px] lg:max-w-xs z-10 pointer-events-auto'>
                I am a passionate software engineer and web developer focused on constructing elegant, high-performance systems and interactive digital interfaces. I specialize in building robust full-stack applications, solving complex algorithms, and developing state-of-the-art AI/ML modules. Honest in collaboration, rigorous in code architecture, and dedicated to pixel-perfect craft.
            </p>
        </div>
    )
}

export default HomeBottomText