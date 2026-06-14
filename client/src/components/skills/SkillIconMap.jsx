const SkillIconMap = {
    react: (
        <svg className="w-16 h-16 text-[#61DAFB] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </svg>
    ),
    node: (
        <svg className="w-16 h-16 text-[#339933] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 0v20m-8-15.5L12 11M20 6.5L12 11" />
        </svg>
    ),
    express: (
        <svg className="w-16 h-16 text-[#ffffff] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="4" strokeDasharray="3 3" />
            <text x="12" y="14.5" fontWeight="bold" fontSize="8" textAnchor="middle" fill="currentColor" fontFamily="monospace">Ex</text>
        </svg>
    ),
    flask: (
        <svg className="w-16 h-16 text-[#ffffff] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 3h6M12 3v4M8 7h8M6 21h12M7.5 8L10 14h4l2.5-6M5.5 18c0 1.5 1 2 2.5 2h8c1.5 0 2.5-.5 2.5-2L16 9H8l-2.5 9z" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
            <circle cx="10" cy="13" r="0.7" fill="currentColor" />
            <circle cx="14" cy="12" r="0.7" fill="currentColor" />
        </svg>
    ),
    bootstrap: (
        <svg className="w-16 h-16 text-[#7952B3] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <path d="M9 7h4a2 2 0 012 2c0 1-.5 1.5-1.5 1.7 1 .2 1.5.8 1.5 1.8a2 2 0 01-2 2H9V7zm2 3h1.5a.7.7 0 000-1.4H11V10zm0 3.4h1.5a.7.7 0 000-1.4H11v1.4z" fill="currentColor" />
        </svg>
    ),
    js: (
        <svg className="w-16 h-16 text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <text x="15.5" y="16" fontWeight="bold" fontSize="8" textAnchor="end" fill="currentColor" fontFamily="sans-serif">JS</text>
        </svg>
    ),
    ts: (
        <svg className="w-16 h-16 text-[#3178C6] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <text x="15.5" y="16" fontWeight="bold" fontSize="8" textAnchor="end" fill="currentColor" fontFamily="sans-serif">TS</text>
        </svg>
    ),
    python: (
        <svg className="w-16 h-16 text-[#3776AB] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8 2 8 3.5 8 5v2h8V5c0-1.5 0-3-4-3zM12 22c4 0 4-1.5 4-3v-2H8v2c0 1.5 0 3 4 3z" />
            <path d="M4 12c0-3.5 1.5-4 4-4h4v8H8c-2.5 0-4-.5-4-4zM20 12c0 3.5-1.5 4-4 4h-4V8h4c2.5 0 4 .5 4 4z" />
            <circle cx="10" cy="4" r="0.8" fill="currentColor" />
            <circle cx="14" cy="20" r="0.8" fill="currentColor" />
        </svg>
    ),
    tailwind: (
        <svg className="w-16 h-16 text-[#06B6D4] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4C7.5 4 6 7 6 9.5S8.5 14 12 14c4.5 0 6-3 6-5.5S15.5 4 12 4z" />
            <path d="M12 10c-4.5 0-6 3-6 5.5S8.5 20 12 20c4.5 0 6-3 6-5.5s-2.5-4.5-6-4.5z" opacity="0.85" />
        </svg>
    ),
    git: (
        <svg className="w-16 h-16 text-[#F05032] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="8" r="3" />
            <circle cx="18" cy="8" r="3" />
            <path d="M6 11v1a3 3 0 003 3h6a3 3 0 003-3v-1M12 11V6" />
        </svg>
    ),
    mongodb: (
        <svg className="w-16 h-16 text-[#47A248] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2c0 0 6 4 6 10s-3 8-6 10c0 0-6-4-6-10s3-10 6-10z" />
            <path d="M12 2v20" />
        </svg>
    ),
    sql: (
        <svg className="w-16 h-16 text-[#336791] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="5" rx="7" ry="2" />
            <path d="M5 5v5c0 1.1 3.1 2 7 2s7-.9 7-2V5" />
            <path d="M5 10v5c0 1.1 3.1 2 7 2s7-.9 7-2v-5" />
            <path d="M5 15v4c0 1.1 3.1 2 7 2s7-.9 7-2v-4" />
        </svg>
    ),
    html: (
        <svg className="w-16 h-16 text-[#E34F26] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 3h16l-2 16-6 3-6-3L4 3z" />
            <path d="M8 8h8M8 12h8M10 16l2 1 2-1" />
        </svg>
    ),
    java: (
        <svg className="w-16 h-16 text-[#007396] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 16c0 1.5 2 2.5 6 2.5s6-1 6-2.5c0-1.5-2-2.5-6-2.5s-6 1-6 2.5z" />
            <path d="M8 20c0 1.2 1.8 2 4 2s4-.8 4-2" />
            <path d="M10 12c0-2 1-4 2-5m-4 5c0-3 2-4 3-6" />
            <path d="M15 11c0-1 1-2 1-3.5" />
        </svg>
    ),
    vite: (
        <svg className="w-16 h-16 text-[#646CFF] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L3 11h7v11l9-9h-7V2z" />
        </svg>
    ),
    postgres: (
        <svg className="w-16 h-16 text-[#336791] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="5" rx="7" ry="2" />
            <path d="M5 5v5c0 1.1 3.1 2 7 2s7-.9 7-2V5" />
            <path d="M5 10v5c0 1.1 3.1 2 7 2s7-.9 7-2v-5" opacity="0.8" />
            <path d="M5 15v4c0 1.1 3.1 2 7 2s7-.9 7-2v-4" opacity="0.6" />
            <text x="12" y="14" fontWeight="bold" fontSize="5" textAnchor="middle" fill="currentColor" fontFamily="sans-serif">PSQL</text>
        </svg>
    ),
    dsa: (
        <svg className="w-16 h-16 text-[#D3FD50] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="5" r="2.5" fill="currentColor" />
            <circle cx="6" cy="13" r="2.5" fill="currentColor" />
            <circle cx="18" cy="13" r="2.5" fill="currentColor" />
            <circle cx="6" cy="20" r="2.5" fill="currentColor" />
            <line x1="12" y1="7.5" x2="7.5" y2="11" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="7.5" x2="16.5" y2="11" stroke="currentColor" strokeWidth="1.5" />
            <line x1="6" y1="15.5" x2="6" y2="17.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    auth: (
        <svg className="w-16 h-16 text-[#10B981] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
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
