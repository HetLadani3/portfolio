import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const navigate = useNavigate()

    return (
        <div className='z-40 flex fixed top-0 w-full items-start justify-between'>
            <div className='lg:p-5 p-2'>
                <div 
                    className={`font-[font2] text-2xl lg:text-3xl tracking-tighter uppercase select-none cursor-pointer transition-colors duration-300 ${
                        navColor === 'black' ? 'text-black' : 'text-white'
                    }`} 
                    onClick={() => navigate('/')}
                >
                    HET<span className='text-[#D3FD50]'>.</span>
                </div>
            </div>
            <div className="flex items-center">
                <a 
                    href="/resume.pdf" 
                    download="Resume.pdf"
                    className="flex items-center justify-center lg:h-10 h-8 px-6 lg:px-8 bg-[#D3FD50] text-black font-[font2] text-xs lg:text-sm tracking-widest uppercase rounded-full border border-[#D3FD50] hover:bg-black hover:text-[#D3FD50] transition-colors duration-300 mr-4 lg:mr-8"
                >
                    Resume
                </a>
                <div onClick={() => {
                    setNavOpen(true)
                }} onMouseEnter={() => {
                    navGreenRef.current.style.height = '100%'
                }}
                    onMouseLeave={() => {
                        navGreenRef.current.style.height = '0%'
                    }}
                    className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-32 md:w-48 cursor-pointer'>
                    <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                    <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5 pointer-events-none'>
                        <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                        <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar