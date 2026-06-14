import React from 'react';

const SkillIconMap = {
    react: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="React.js Logo" 
        />
    ),
    node: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Node.js Logo" 
        />
    ),
    express: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
            className="w-16 h-16 object-contain invert brightness-0 transition-transform duration-300 group-hover:scale-110" 
            alt="Express.js Logo" 
        />
    ),
    flask: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" 
            className="w-16 h-16 object-contain invert brightness-0 transition-transform duration-300 group-hover:scale-110" 
            alt="Flask Logo" 
        />
    ),
    bootstrap: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Bootstrap Logo" 
        />
    ),
    js: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="JavaScript Logo" 
        />
    ),
    ts: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="TypeScript Logo" 
        />
    ),
    python: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Python Logo" 
        />
    ),
    tailwind: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Tailwind CSS Logo" 
        />
    ),
    git: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Git Logo" 
        />
    ),
    mongodb: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="MongoDB Logo" 
        />
    ),
    sql: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="PostgreSQL Logo" 
        />
    ),
    html: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="HTML5 Logo" 
        />
    ),
    java: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Java Logo" 
        />
    ),
    vite: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="Vite Logo" 
        />
    ),
    postgres: (
        <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="PostgreSQL Logo" 
        />
    ),
    dsa: (
        <img 
            src="https://raw.githubusercontent.com/github/explore/main/topics/leetcode/leetcode.png" 
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            alt="LeetCode Logo" 
        />
    ),
    auth: (
        <svg className="w-16 h-16 text-[#10B981] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="11" width="14" height="10" rx="2" ry="2" fill="currentColor" fillOpacity="0.1" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    ),
    default: (
        <svg className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
        </svg>
    )
};

export default SkillIconMap;
