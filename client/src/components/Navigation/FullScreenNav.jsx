import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navigate = useNavigate()
    const [time, setTime] = useState('')

    // Active Indian Standard Time (IST) running clock
    useEffect(() => {
        const updateClock = () => {
            try {
                const options = {
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                };
                const formatter = new Intl.DateTimeFormat('en-US', options);
                setTime(formatter.format(new Date()));
            } catch (err) {
                const now = new Date();
                setTime(now.toTimeString().split(' ')[0]);
            }
        };
        
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block',
            duration: 0
        })
        tl.to('.stairing', {
            height: '100%',
            duration: 0.5,
            ease: "power3.inOut",
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: {
                amount: 0.15
            }
        })
        tl.to('.navlink-top, .navlink-bottom', {
            opacity: 1,
            duration: 0.3
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.navlink-top, .navlink-bottom', {
            opacity: 0,
            duration: 0.2
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 45,
            duration: 0.3,
            ease: "power2.in",
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            duration: 0.5,
            ease: "power3.inOut",
            stagger: {
                amount: -0.15
            }
        })
        tl.to('.fullscreennav', {
            display: 'none',
            duration: 0
        })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div 
            ref={fullScreenRef} 
            id='fullscreennav' 
            className='fullscreennav text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0 bg-transparent select-none'
            style={{ display: 'none' }}
        >
            {/* Staircase Background Panels */}
            <div className='absolute inset-0 z-0 pointer-events-none'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                </div>
            </div>

            {/* Layout Wrapper - Tight spacing to fit all screen sizes perfectly */}
            <div className='relative z-10 h-full w-full flex flex-col justify-between p-5 pb-3 md:pt-8 md:px-8 md:pb-5 lg:pt-10 lg:px-10 lg:pb-6'>
                
                {/* Top Header Row */}
                <div className="navlink-top opacity-0 flex w-full justify-between items-center z-20">
                    {/* Brand Logo */}
                    <div 
                        className='font-[font2] text-2xl lg:text-3xl tracking-tighter uppercase select-none cursor-pointer text-white hover:text-[#D3FD50] transition-colors duration-300' 
                        onClick={() => { navigate('/'); setNavOpen(false); }}
                    >
                        HET<span className='text-[#D3FD50]'>.</span>
                    </div>

                    {/* Giant Minimal Close Icon */}
                    <div 
                        onClick={() => setNavOpen(false)} 
                        className='h-10 w-10 md:h-14 md:w-14 flex items-center justify-center cursor-pointer relative group'
                    >
                        <div className='absolute h-0.5 w-8 md:w-10 bg-white rotate-45 group-hover:bg-[#D3FD50] transition-colors duration-300'></div>
                        <div className='absolute h-0.5 w-8 md:w-10 bg-white -rotate-45 group-hover:bg-[#D3FD50] transition-colors duration-300'></div>
                    </div>
                </div>

                {/* Centered Navigation Links Menu - Reduced Padding to fit footer comfortably */}
                <div ref={fullNavLinksRef} className='w-full flex flex-col justify-center flex-grow py-4 md:py-6 lg:py-8 max-w-7xl mx-auto'>
                    
                    {/* Link 1: WORK */}
                    <div 
                        className='link opacity-0 origin-center relative border-t border-white/20 cursor-pointer overflow-hidden group' 
                        onClick={() => { navigate('/projects'); setNavOpen(false); }}
                    >
                        <h1 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] text-center leading-[1.1] py-3 md:py-4 lg:py-5 uppercase tracking-tight text-white transition-transform duration-300 group-hover:scale-105'>
                            Projects
                        </h1>
                        <div className='moveLink absolute top-0 left-0 w-full h-full text-black flex items-center bg-[#D3FD50] overflow-hidden z-10 pointer-events-none'>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>See Everything</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>See Everything</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>See Everything</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>See Everything</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Link 2: SKILLS */}
                    <div 
                        className='link opacity-0 origin-center relative border-t border-white/20 cursor-pointer overflow-hidden group' 
                        onClick={() => { navigate('/skills'); setNavOpen(false); }}
                    >
                        <h1 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] text-center leading-[1.1] py-3 md:py-4 lg:py-5 uppercase tracking-tight text-white transition-transform duration-300 group-hover:scale-105'>
                            Skills
                        </h1>
                        <div className='moveLink absolute top-0 left-0 w-full h-full text-black flex items-center bg-[#D3FD50] overflow-hidden z-10 pointer-events-none'>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Tech Stack</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Tech Stack</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Tech Stack</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Tech Stack</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Link 3: CONTACT */}
                    <div 
                        className='link opacity-0 origin-center relative border-t border-white/20 cursor-pointer overflow-hidden group' 
                        onClick={() => { navigate('/contact'); setNavOpen(false); }}
                    >
                        <h1 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] text-center leading-[1.1] py-3 md:py-4 lg:py-5 uppercase tracking-tight text-white transition-transform duration-300 group-hover:scale-105'>
                            Contact
                        </h1>
                        <div className='moveLink absolute top-0 left-0 w-full h-full text-black flex items-center bg-[#D3FD50] overflow-hidden z-10 pointer-events-none'>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Send us a fax</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Send us a fax</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Send us a fax</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Send us a fax</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Link 4: RESUME */}
                    <div 
                        className='link opacity-0 origin-center relative border-y border-white/20 cursor-pointer overflow-hidden group' 
                        onClick={() => { navigate('/resume'); setNavOpen(false); }}
                    >
                        <h1 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] text-center leading-[1.1] py-3 md:py-4 lg:py-5 uppercase tracking-tight text-white transition-transform duration-300 group-hover:scale-105'>
                            Resume
                        </h1>
                        <div className='moveLink absolute top-0 left-0 w-full h-full text-black flex items-center bg-[#D3FD50] overflow-hidden z-10 pointer-events-none'>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Download PDF</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Download PDF</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                            <div className='moveX flex items-center shrink-0 whitespace-nowrap'>
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Download PDF</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                <h2 className='font-[font2] text-4xl md:text-[6vw] lg:text-[5vw] uppercase leading-none px-4'>Download PDF</h2>
                                <img className='lg:h-24 h-10 rounded-full shrink-0 lg:w-56 w-24 object-cover mx-4' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Row - Fades in/out alongside top header elements */}
                <div className="navlink-bottom opacity-0 w-full flex justify-between items-center z-20 font-[font1] select-none">
                    {/* Active India Time Clock (Bottom Left) */}
                    <div className='flex items-center gap-2.5 text-white/95 tracking-widest text-xs md:text-sm lg:text-base font-light uppercase pointer-events-auto'>
                        {/* Globe SVG */}
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white/80 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            <path d="M2 12h20" />
                        </svg>
                        <span>INDIA_{time}</span>
                    </div>

                    {/* Sleek Text-Based Social Handles (Bottom Right) */}
                    <div className='flex items-center gap-4 md:gap-6 pointer-events-auto'>
                        <a 
                            href="https://github.com/HetLadani3" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-white/95 hover:text-[#D3FD50] text-xs md:text-sm lg:text-base font-light uppercase tracking-widest font-[font1] transition-colors duration-300'
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/hetladani/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-white/95 hover:text-[#D3FD50] text-xs md:text-sm lg:text-base font-light uppercase tracking-widest font-[font1] transition-colors duration-300'
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="https://leetcode.com/u/7BCkupPs7t/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-white/95 hover:text-[#D3FD50] text-xs md:text-sm lg:text-base font-light uppercase tracking-widest font-[font1] transition-colors duration-300'
                        >
                            LeetCode
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FullScreenNav