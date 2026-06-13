import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


import { useState, useEffect } from 'react'
import SEO from '../components/common/SEO'

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null)

    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Fetch projects from the backend
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/projects`);
                if (response.ok) {
                    const data = await response.json();
                    setProjectsData(data);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const rows = [];
    if (!loading) {
        for (let i = 0; i < projectsData.length; i += 2) {
            rows.push(projectsData.slice(i, i + 2));
        }
    }

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from('.hero', {
            height: '100px',
            stagger: {
                amount: 0.4
            },
            scrollTrigger: {
                trigger: '.lol',
                start: 'top 100%',
                end: 'top -150%',
                scrub: true
            }
        })
    })

    return (
        <div className='lg:p-4 p-2 mb-[100vh] relative'>
            <SEO 
                title="Projects & Case Studies | Het Ladani"
                description="Browse the portfolio of projects built by Het Ladani. Interactive web apps, real-time multiplayer platforms, database systems, and dev tools."
                keywords="Het Ladani Projects, DevHub, NextCall, Indi Gro, React Portfolio, Node.js applications"
            />
            {/* Hover Banner */}
            <div className={`fixed top-20 lg:top-24 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${hoveredProject ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                <div className="bg-black text-white font-[font2] lg:text-2xl text-base uppercase tracking-widest px-8 lg:px-12 py-3 lg:py-4 rounded-full border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md whitespace-nowrap">
                    {hoveredProject?.title}
                </div>
            </div>

            <div className='pt-[25vh] lg:pt-[35vh] pl-2 lg:pl-6 pb-12'>
                <h1 className='font-[font2] lg:text-[14vw] text-7xl uppercase tracking-tighter leading-none flex items-start'>
                    PROJECTS
                </h1>
            </div>
            
            <div className='lol flex flex-col'>
                {rows.map(function (row, idx) {
                    return (
                        <div key={idx} className='hero w-full h-[50vh] lg:h-[80vh] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
                            {row.map((elem, eIdx) => (
                                <div key={eIdx} className='w-full lg:w-1/2 h-full'>
                                    <ProjectCard 
                                        project={elem} 
                                        onHover={() => setHoveredProject(elem)} 
                                        onLeave={() => setHoveredProject(null)} 
                                    />
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects