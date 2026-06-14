import React, { useState, useEffect, useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { NavbarContext, NavbarColorContext } from '../../context/NavContext'

const GlobalFooter = () => {
    const [time, setTime] = useState('')
    const location = useLocation()
    const [navOpen] = useContext(NavbarContext)
    const [navColor] = useContext(NavbarColorContext)

    const textColor = navColor === 'black' ? 'text-black' : 'text-white'
    const borderColor = navColor === 'black' ? 'border-black' : 'border-white'
    const svgColor = navColor === 'black' ? 'text-black/80' : 'text-white/80'

    // Active Indian Standard Time (IST) Clock
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

    // Only render on specific pages and when the hamburger menu is closed
    const allowedPages = ['/', '/skills', '/projects', '/contact', '/resume'];
    if (!allowedPages.includes(location.pathname) || navOpen) {
        return null
    }

    const isHome = location.pathname === '/'
    const bgColor = isHome ? 'bg-transparent' : (navColor === 'black' ? 'bg-white' : 'bg-[#030303]')

    return (
        <div className={`${isHome ? 'absolute bottom-0' : 'relative'} w-full p-6 md:px-12 md:py-8 lg:px-14 lg:py-8 flex justify-between items-center z-[51] pointer-events-none ${bgColor} ${textColor} font-[font1] select-none transition-colors duration-300`}>
            
            {/* Active India Time Clock (Bottom Left) */}
            <div className='flex items-center gap-2.5 tracking-widest text-xs md:text-sm lg:text-base font-light uppercase pointer-events-auto'>
                {/* Minimal Globe Wireframe SVG */}
                <svg className={`w-4 h-4 md:w-5 md:h-5 ${svgColor} animate-[spin_10s_linear_infinite]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                </svg>
                <span>INDIA_{time}</span>
            </div>

            {/* Dynamic Center Button */}
            <div className='absolute left-1/2 -translate-x-1/2 pointer-events-auto flex justify-center'>
                {location.pathname === '/skills' && (
                    <Link 
                        to='/projects' 
                        onClick={() => window.scrollTo(0,0)}
                        className={`border-2 ${borderColor} hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full py-1.5 px-4 md:py-2 md:px-6 lg:py-3 lg:px-10 flex items-center justify-center uppercase tracking-widest font-[font2] text-xs md:text-sm lg:text-lg transition-all duration-300 bg-transparent`}
                    >
                        View Projects
                    </Link>
                )}
                {location.pathname === '/projects' && (
                    <Link 
                        to='/contact' 
                        onClick={() => window.scrollTo(0,0)}
                        className={`border-2 ${borderColor} hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full py-1.5 px-4 md:py-2 md:px-6 lg:py-3 lg:px-10 flex items-center justify-center uppercase tracking-widest font-[font2] text-xs md:text-sm lg:text-lg transition-all duration-300 bg-transparent`}
                    >
                        Contact
                    </Link>
                )}
                {(location.pathname === '/contact' || location.pathname === '/resume') && (
                    <Link 
                        to='/' 
                        onClick={() => window.scrollTo(0,0)}
                        className={`border-2 ${borderColor} hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full py-1.5 px-4 md:py-2 md:px-6 lg:py-3 lg:px-10 flex items-center justify-center uppercase tracking-widest font-[font2] text-xs md:text-sm lg:text-lg transition-all duration-300 bg-transparent`}
                    >
                        Back to Home
                    </Link>
                )}
            </div>

            {/* Sleek Text-Based Social Handles (Bottom Right) */}
            <div className='flex items-center gap-4 md:gap-6 pointer-events-auto'>
                <a 
                    href="https://github.com/HetLadani3" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:text-[#D3FD50] text-xs md:text-sm lg:text-base font-light uppercase tracking-widest font-[font1] transition-colors duration-300`}
                >
                    GH
                </a>
                <a 
                    href="https://www.linkedin.com/in/hetladani/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:text-[#D3FD50] text-xs md:text-sm lg:text-base font-light uppercase tracking-widest font-[font1] transition-colors duration-300`}
                >
                    IN
                </a>
                <a 
                    href="https://leetcode.com/u/7BCkupPs7t/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:text-[#D3FD50] text-xs md:text-sm lg:text-base font-light uppercase tracking-widest font-[font1] transition-colors duration-300`}
                >
                    LC
                </a>
            </div>
        </div>
    )
}

export default GlobalFooter
