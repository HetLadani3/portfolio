import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useContext, useEffect, useState } from 'react'
import { NavbarColorContext } from '../context/NavContext'
import SEO from '../components/common/SEO'

const Contact = () => {
    const [, setNavColor] = useContext(NavbarColorContext)
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const formRef = useRef(null)
    const infoRef = useRef(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: ''
    })
    const [status, setStatus] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        setNavColor('white');
    }, [setNavColor]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', organization: '', message: '' });
            } else {
                setStatus('error');
                console.error(data.message);
            }
        } catch (error) {
            setStatus('error');
            console.error('Error submitting form:', error);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: 0.2
        })
        .from(infoRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.6')
        .from(formRef.current.children, {
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.6');
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className='min-h-screen bg-[#030303] text-white pt-[20vh] pb-32 px-6 md:px-12 lg:px-20 select-none font-[font1] relative z-10'>
            <SEO 
                title="Contact & Collaboration | Het Ladani"
                description="Get in touch with Het Ladani for design/development projects, fullstack software engineering roles, or consulting."
                keywords="Contact Het Ladani, Hire Software Engineer, Hire Frontend Developer, Freelance Developer India"
            />
            {/* Title Section */}
            <div className='max-w-7xl mx-auto'>
                <h1 ref={titleRef} className='text-[16vw] md:text-[12vw] lg:text-[10vw] uppercase leading-none tracking-tighter font-[font2] mb-16 lg:mb-24'>
                    LET'S <span className='text-[#D3FD50]'>TALK</span>
                </h1>
                
                <div className='flex flex-col lg:flex-row justify-between gap-16 lg:gap-24'>
                    
                    {/* Left: Info Section */}
                    <div ref={infoRef} className='lg:w-1/2 flex flex-col gap-10 lg:gap-14'>
                        <div>
                            <h3 className='text-xs md:text-sm tracking-widest text-[#D3FD50] uppercase mb-4 font-[font2]'>The Inbox</h3>
                            <a href="mailto:hello@example.com" className='text-3xl md:text-5xl lg:text-6xl font-light hover:text-[#D3FD50] transition-colors duration-300 pointer-events-auto'>
                                hello@example.com
                            </a>
                        </div>

                        <div>
                            <h3 className='text-xs md:text-sm tracking-widest text-[#D3FD50] uppercase mb-4 font-[font2]'>Location</h3>
                            <p className='text-xl md:text-2xl text-neutral-300 font-light'>
                                Based in India.<br />
                                Working worldwide.
                            </p>
                        </div>

                        <div>
                            <h3 className='text-xs md:text-sm tracking-widest text-[#D3FD50] uppercase mb-4 font-[font2]'>Socials</h3>
                            <div className='flex flex-col gap-2'>
                                {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                                    <a key={social} href="#" className='text-xl text-neutral-300 hover:text-[#D3FD50] hover:translate-x-2 transition-all duration-300 w-max pointer-events-auto'>
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className='lg:w-1/2 pointer-events-auto'>
                        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-8'>

                            <div className='flex flex-col gap-2'>
                                <label className='text-xs tracking-widest uppercase text-neutral-400 font-[font2]'>01. What's your name?</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe *" 
                                    className='w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-xl md:text-2xl outline-none focus:border-[#D3FD50] transition-colors placeholder:text-neutral-700'
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-xs tracking-widest uppercase text-neutral-400 font-[font2]'>02. What's your email?</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@doe.com *" 
                                    className='w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-xl md:text-2xl outline-none focus:border-[#D3FD50] transition-colors placeholder:text-neutral-700'
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-xs tracking-widest uppercase text-neutral-400 font-[font2]'>03. What's your organization?</label>
                                <input 
                                    type="text" 
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Company Name" 
                                    className='w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-xl md:text-2xl outline-none focus:border-[#D3FD50] transition-colors placeholder:text-neutral-700'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-xs tracking-widest uppercase text-neutral-400 font-[font2]'>04. Your message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project... *" 
                                    rows="4"
                                    className='w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-xl md:text-2xl outline-none focus:border-[#D3FD50] transition-colors resize-none placeholder:text-neutral-700'
                                    required
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button 
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className='self-start rounded-full bg-[#D3FD50] text-black font-[font2] text-sm md:text-lg lg:text-xl px-10 py-3 md:px-12 md:py-4 uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 disabled:opacity-50'
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'success' && <p className="text-[#D3FD50]">Message sent successfully!</p>}
                                {status === 'error' && <p className="text-red-500">Failed to send message. Please try again.</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
