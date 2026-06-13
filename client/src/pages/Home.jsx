import React, { useState } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Loader from '../components/common/Loader'
import SEO from '../components/common/SEO'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className='text-white h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
            <SEO 
                title="Het Ladani | Software Engineer & Web Developer Portfolio"
                description="Official portfolio of Het Ladani, a Software Engineer, Web Developer, DSA Enthusiast, and AI/ML Enthusiast. Explore creative web builds, technical projects, and design systems."
                keywords="Het Ladani, Portfolio, Software Engineer, Web Developer, Creative Frontend, React, GSAP, DSA, Machine Learning"
            />
            {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
            {/* Background Video with Premium Overlay */}
            <div className='absolute inset-0 -z-10 overflow-hidden'>
                <Video />
                <div className='absolute inset-0 bg-black/40 bg-gradient-to-b from-black/35 via-transparent to-black/60'></div>
            </div>
            
            {/* Main Content Layout */}
            <HomeHeroText />
            <HomeBottomText />
        </div>
    )
}

export default Home