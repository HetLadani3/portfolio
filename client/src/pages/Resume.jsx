import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useContext, useEffect } from 'react'
import { NavbarColorContext } from '../context/NavContext'
import SEO from '../components/common/SEO'

const Resume = () => {
    const [, setNavColor] = useContext(NavbarColorContext)
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        setNavColor('white');
    }, [setNavColor]);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: 0.2
        })
        .from(contentRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className='min-h-screen bg-[#030303] text-white pt-[20vh] pb-32 px-6 md:px-12 lg:px-20 select-none font-[font1] relative z-10'>
            <SEO 
                title="Resume & CV | Het Ladani"
                description="View and download the professional resume of Het Ladani. Learn about my education, experience, accomplishments, and tech stack."
                keywords="Het Ladani Resume, Het Ladani CV, Software Engineer Resume, Web Developer Resume"
            />
            {/* Title Section */}
            <div className='max-w-7xl mx-auto flex flex-col items-center'>
                <h1 ref={titleRef} className='text-[16vw] md:text-[12vw] lg:text-[10vw] uppercase leading-none tracking-tighter font-[font2] mb-12 text-center'>
                    MY <span className='text-[#D3FD50]'>RESUME</span>
                </h1>
                
                <div ref={contentRef} className='w-full flex flex-col items-center gap-10'>
                    {/* Action Buttons */}
                    <div className='flex gap-4 pointer-events-auto'>
                        <a 
                            href="/resume.pdf" 
                            download="Resume.pdf"
                            className='rounded-full bg-[#D3FD50] text-black font-[font2] text-sm md:text-lg px-8 py-3 uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 text-center flex items-center justify-center'
                        >
                            Download PDF
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className='rounded-full border border-white/20 text-white font-[font2] text-sm md:text-lg px-8 py-3 uppercase tracking-widest hover:border-white transition-colors duration-300 text-center flex items-center justify-center'
                        >
                            Open in New Tab
                        </a>
                    </div>

                    {/* PDF Viewer Embed */}
                    <div className='w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5 pointer-events-auto shadow-2xl relative group flex items-center justify-center'>
                        <iframe 
                            src="/resume.pdf" 
                            className='w-full h-full'
                            title="Resume PDF Viewer"
                        ></iframe>
                        {/* Fallback overlay in case PDF fails to load (usually visible for a split second or if missing) */}
                        <div className='absolute inset-0 -z-10 flex flex-col items-center justify-center text-white/50 gap-4'>
                            <svg className='w-12 h-12 animate-pulse' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className='font-light tracking-widest uppercase text-sm'>Loading Document...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
