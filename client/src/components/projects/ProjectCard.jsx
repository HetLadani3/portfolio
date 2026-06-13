import React from 'react'

const ProjectCard = ({ project, onHover, onLeave }) => {
    return (
        <div 
            className='w-full h-full group transition-all duration-500 relative rounded-none hover:rounded-[70px] overflow-hidden'
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <img className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' src={project.image} alt={project.title} />
            
            <div className='opacity-0 transition-all duration-500 group-hover:opacity-100 absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 bg-black/40 backdrop-blur-sm'>
                <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className='uppercase text-xl lg:text-4xl font-[font1] border-2 lg:border-4 py-3 lg:py-4 px-6 lg:px-8 text-white border-white rounded-full hover:bg-white hover:text-black transition-colors'
                >
                    View Project
                </a>
                <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className='uppercase text-xl lg:text-4xl font-[font1] border-2 lg:border-4 py-3 lg:py-4 px-6 lg:px-8 text-white border-white rounded-full hover:bg-white hover:text-black transition-colors'
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default ProjectCard