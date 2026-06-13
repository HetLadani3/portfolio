import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useMemo, useContext, useState, useEffect } from 'react'
import { NavbarColorContext } from '../context/NavContext'
import { Link } from 'react-router-dom'
import { ActivityCalendar } from 'react-activity-calendar';
import SkillIconMap from '../components/skills/SkillIconMap';
import SEO from '../components/common/SEO';

const Skills = () => {
    const [, setNavColor] = useContext(NavbarColorContext)
    gsap.registerPlugin(ScrollTrigger)

    const parentRef = useRef(null)
    const titleRef = useRef(null)
    const craftTextRef = useRef(null)
    const heatmapRef = useRef(null)



    // Custom theme for the calendars to match #D3FD50
    const explicitTheme = {
        light: ['#2d2d2d', '#7ba11b', '#9ccc2e', '#b4e83c', '#d3fd50'],
        dark: ['#1e1e1e', '#597911', '#85b01e', '#aadf2d', '#d3fd50'],
    };

    const [skillsData, setSkillsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [calendarData, setCalendarData] = useState([]);
    const [calendarLoading, setCalendarLoading] = useState(true);
    const [calendarError, setCalendarError] = useState(null);

    useEffect(() => {
        const fetchCalendarData = async () => {
            try {
                const username = import.meta.env.VITE_GITHUB_USERNAME || "HetLadani3";
                // Fetch from jogruber API directly (which returns the correct schema and works perfectly)
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                if (response.ok) {
                    const data = await response.json();
                    setCalendarData(data.contributions || []);
                } else {
                    // Fallback to the working deno endpoint without /v1/
                    const responseFallback = await fetch(`https://github-contributions-api.deno.dev/${username}`);
                    if (responseFallback.ok) {
                        const dataFallback = await responseFallback.json();
                        setCalendarData(dataFallback.contributions || []);
                    } else {
                        throw new Error('Failed to fetch GitHub contributions data');
                    }
                }
            } catch (error) {
                console.error('Error fetching calendar data:', error);
                setCalendarError(error.message);
            } finally {
                setCalendarLoading(false);
            }
        };

        fetchCalendarData();
    }, []);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/skills`);
                if (response.ok) {
                    const data = await response.json();
                    setSkillsData(data);
                } else {
                    console.error('Failed to fetch skills');
                }
            } catch (error) {
                console.error('Error fetching skills:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    useGSAP(function () {
        // Fade out title text
        gsap.to(titleRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: craftTextRef.current,
                start: 'top 100%',
                end: 'top 30%',
                scrub: true
            }
        })

        // Change background to black
        gsap.to(parentRef.current, {
            backgroundColor: '#030303',
            scrollTrigger: {
                trigger: craftTextRef.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true
            }
        })

        // Toggle Navbar color midway through transition
        ScrollTrigger.create({
            trigger: craftTextRef.current,
            start: 'top 55%',
            onEnter: () => setNavColor('white'),
            onLeaveBack: () => setNavColor('black')
        });

        // Change paragraph text to light
        gsap.to(craftTextRef.current, {
            color: '#d4d4d4',
            scrollTrigger: {
                trigger: craftTextRef.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true
            }
        });

        // Heatmap Section Animation
        if (heatmapRef.current) {
            gsap.from(heatmapRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: heatmapRef.current,
                    start: 'top 80%'
                }
            });
        }
    }, [skillsData]);

    return (
        <div ref={parentRef} className='parent select-none bg-white min-h-screen pb-32'>
            <SEO 
                title="Technical Skills | Het Ladani"
                description="Explore the technical capabilities and skillset of Het Ladani. Includes React, Node.js, system design, data structures & algorithms (DSA), and machine learning."
                keywords="Technical Skills, Het Ladani Skills, Fullstack Developer, React developer, Node.js developer, DSA expertise"
            />
            <div id='page1' className='py-1 relative'>
                {/* Big Title Row */}
                <div className='relative font-[font2] z-10 pointer-events-none'>
                    <div className='lg:mt-[40vh] mt-[25vh]'>
                        <h1 ref={titleRef} className='text-[16vw] text-center uppercase leading-[14vw] tracking-tighter text-black'>
                            TECHNICAL <br /> SKILLS
                        </h1>
                    </div>

                    {/* Developer Manifesto Paragraph */}
                    <div className='lg:pl-[55%] lg:mt-16 mt-8 p-4 lg:p-6 pointer-events-auto'>
                        <p ref={craftTextRef} className='lg:text-2xl text-lg lg:leading-relaxed leading-snug font-light text-neutral-800 max-w-xl font-[font1]'>
                            I believe in craft-driven development that prioritizes clean, optimized code, scalable systems, and pixel-perfect design. From building high-performance APIs to designing fluid user interfaces, every line of code is an opportunity to shape a modern, robust, and beautiful experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid of cards showing all 14 skills with matching custom micro-interactions */}
            <div id='page2' className="min-h-screen py-24 relative z-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <h2 className="text-4xl lg:text-6xl text-center mb-20 font-[font2] tracking-tight uppercase text-white">
                        THE DECK // SKILLS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {loading && <div className="text-white">Loading skills...</div>}
                        {!loading && skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between min-h-[300px] overflow-hidden select-none hover:border-[#D3FD50] hover:shadow-[0_0_25px_rgba(211,253,80,0.15)] transition-all duration-500 pointer-events-auto"
                            >
                                {/* Glowing Accent Ring */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D3FD50]/15 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

                                {/* Top Segment */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        {/* Icon Container */}
                                        <div className="text-[#D3FD50] p-2 bg-neutral-800/80 rounded-xl border border-white/5 transition-all duration-300 group-hover:border-[#D3FD50]/20">
                                            {SkillIconMap[skill.iconKey] || SkillIconMap['default']}
                                        </div>
                                        {/* Category Badge */}
                                        <span className="text-[10px] tracking-widest font-[font2] text-[#D3FD50] bg-neutral-800 px-3 py-1 rounded-full border border-white/5 uppercase whitespace-nowrap">
                                            {skill.category}
                                        </span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-2">
                                        <h3 className="text-xl font-[font2] text-white uppercase tracking-wider group-hover:text-[#D3FD50] transition-colors duration-300">
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Bottom Paragraph Description */}
                                <p className="text-xs lg:text-[13px] leading-relaxed font-light text-neutral-300 font-[font1] mt-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {skill.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Activity Heatmaps Section */}
            <div ref={heatmapRef} id='page3' className="py-24 relative z-10 border-t border-white/10 bg-neutral-900/40 mt-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <h2 className="text-3xl lg:text-5xl text-center mb-16 font-[font2] tracking-tight uppercase text-white">
                        Activity & Contributions
                    </h2>

                    <div className="flex flex-col gap-12 justify-center items-center pointer-events-auto">

                        {/* GitHub Heatmap */}
                        <div className="w-full max-w-4xl flex flex-col items-center bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl hover:border-[#D3FD50]/50 transition-colors duration-500">
                            <div className="flex items-center gap-3 mb-8 w-full justify-center md:justify-start">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                <h3 className="text-xl md:text-2xl font-[font2] text-white uppercase tracking-wider">GitHub Commits</h3>
                            </div>
                            <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center">
                                <div className="min-w-max text-white">
                                    {calendarError ? (
                                        <div className="text-neutral-500 text-sm">Could not load contributions calendar.</div>
                                    ) : (
                                        <ActivityCalendar
                                            data={calendarData}
                                            theme={explicitTheme}
                                            colorScheme="dark"
                                            blockSize={14}
                                            blockMargin={5}
                                            fontSize={14}
                                            loading={calendarLoading}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
