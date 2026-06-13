import React, { useState, useEffect, useRef } from 'react';
import Video from './Video';
import gsap from 'gsap';

const HomeHeroText = () => {
    const roles = [
        "Web Developer",
        "Software Engineer",
        "DSA Enthusiast",
        "AI/ML Enthusiast"
    ];
    const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
    const roleRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Smooth GSAP transition for role text
            gsap.to(roleRef.current, {
                y: -10,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
                    gsap.fromTo(roleRef.current,
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
                    );
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <div className='font-[font1] w-full px-6 md:px-16 lg:px-24 pt-28 md:pt-32 lg:pt-36 flex flex-col items-start text-left select-none z-10'>
            {/* Row 1: Name First Word */}
            <div className='text-[10.5vw] lg:text-[8.5vw] uppercase leading-[9.5vw] lg:leading-[7.5vw] tracking-tight font-[font1] text-white'>
                Het
            </div>

            {/* Row 2: Capsule + Name Second Word */}
            <div className='text-[10.5vw] lg:text-[8.5vw] flex items-center uppercase leading-[9.5vw] lg:leading-[7.5vw] tracking-tight font-[font1] text-white mt-1 md:mt-2'>
                <div className='h-[6vw] w-[13vw] rounded-full overflow-hidden mr-[2vw] inline-block flex-shrink-0 relative border border-white/10 shadow-lg'>
                    <Video />
                </div>
                Ladani
            </div>

            {/* Row 3: Cycling Tech Roles with Ellipse */}
            <div className='relative mt-4 md:mt-6 pl-1.5 md:pl-3 flex items-center justify-start min-h-[9vw] lg:min-h-[7.5vw] overflow-visible w-full'>
                <div className='relative inline-block'>
                    {/* The dynamic text */}
                    <span 
                        ref={roleRef}
                        className='block text-[7.5vw] md:text-[6.5vw] lg:text-[5vw] uppercase leading-[8vw] lg:leading-[5.5vw] font-[font2] text-white tracking-tight pr-6 pl-4 py-2 whitespace-nowrap'
                    >
                        {roles[currentRoleIdx]}
                    </span>
                    
                    {/* Hand-drawn Neon Yellow Ellipse */}
                    <svg 
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[130%] pointer-events-none z-10 overflow-visible' 
                        viewBox="0 0 100 100" 
                        preserveAspectRatio="none"
                    >
                        <path 
                            d="M 3,45 C 10,15 85,10 95,40 C 102,68 35,92 12,80 C -5,68 18,50 45,46" 
                            fill="none" 
                            stroke="#D3FD50" 
                            strokeWidth="1.8" 
                            strokeLinecap="round"
                            className="stroke-draw"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HomeHeroText;