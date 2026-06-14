import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Skill from './models/Skill.js';
import Project from './models/Project.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

const initialSkills = [
    {
        name: "React.js",
        category: "Frontend Dev",
        level: "Advanced",
        desc: "Building rich interactive user interfaces, custom React hooks, state machines, and high-performance client web applications.",
        iconKey: "react"
    },
    {
        name: "Node.js",
        category: "Backend Engine",
        level: "Advanced",
        desc: "Constructing scalable server runtimes, REST APIs, asynchronous task queues, file streams, and event-driven systems.",
        iconKey: "node"
    },
    {
        name: "Express.js",
        category: "API Framework",
        level: "Advanced",
        desc: "Designing fast, unopinionated routing middleware, API gateways, request validation, authentication filters, and error handlers.",
        iconKey: "express"
    },
    {
        name: "Flask",
        category: "Python Web",
        level: "Intermediate",
        desc: "Deploying microservices, lightweight web servers, routing pipelines, and clean model-serving APIs for machine learning workflows.",
        iconKey: "flask"
    },
    {
        name: "Bootstrap",
        category: "CSS Framework",
        level: "Advanced",
        desc: "Styling layout grids rapidly with robust responsive utility structures, custom themes, flexboxes, and built-in components.",
        iconKey: "bootstrap"
    },
    {
        name: "JavaScript",
        category: "Core Language",
        level: "Advanced",
        desc: "Expertise in ES6+ specifications, closures, asynchronous execution models, event loops, DOM scripting, and algorithmic structures.",
        iconKey: "js"
    },
    {
        name: "TypeScript",
        category: "Typed Core",
        level: "Advanced",
        desc: "Leveraging static types, strictly typed interfaces, enums, utility types, and strict compilers to structure bulletproof code architectures.",
        iconKey: "ts"
    },
    {
        name: "Python",
        category: "Core & AI/ML",
        level: "Advanced",
        desc: "Writing algorithm modules, data structures, parsing automation, and scripts for data science, artificial intelligence, and machine learning structures.",
        iconKey: "python"
    },
    {
        name: "Tailwind CSS",
        category: "Styling Utility",
        level: "Advanced",
        desc: "Implementing state-of-the-art visual grids, HSL palettes, smooth dark/light configurations, fluid text scaling, and utility structures.",
        iconKey: "tailwind"
    },
    {
        name: "Git & GitHub",
        category: "Version Control",
        level: "Advanced",
        desc: "Executing strict workflow branches, secure pull request hooks, merge conflicts resolution, task rebasing, and CI/CD pipelines deployment.",
        iconKey: "git"
    },
    {
        name: "MongoDB",
        category: "NoSQL DB",
        level: "Advanced",
        desc: "Structuring flexible JSON document schemas, secondary indexing, pipeline aggregations, database sharding, and high-performance operations.",
        iconKey: "mongodb"
    },
    {
        name: "SQL & Postgres",
        category: "Relational DB",
        level: "Advanced",
        desc: "Writing relational SQL queries, table join structures, database transactions integrity, indexing optimization, and secure triggers.",
        iconKey: "sql"
    },
    {
        name: "HTML5 & CSS3",
        category: "Web Layout",
        level: "Advanced",
        desc: "Semantic markups, responsive document hierarchy, flexbox/grid alignments, complex transitions, keyframes, and cross-browser stability.",
        iconKey: "html"
    },
    {
        name: "Java",
        category: "Enterprise OOP",
        level: "Advanced",
        desc: "Structuring reliable object-oriented software architectures, design patterns, multithreaded systems, memory optimization, and garbage collection configurations.",
        iconKey: "java"
    },
    {
        name: "PostgreSQL",
        category: "Relational DB",
        level: "Advanced",
        desc: "Designing schemas, SQL queries, transaction management, indexing, optimization, and relational data modeling with Prisma ORM.",
        iconKey: "postgres"
    },
    {
        name: "Vite",
        category: "Frontend Dev",
        level: "Advanced",
        desc: "High-performance frontend builds, module replacement (HMR), static asset serving, and compiler optimization configurations.",
        iconKey: "vite"
    },
    {
        name: "DSA",
        category: "CS Fundamentals",
        level: "Advanced",
        desc: "Solving algorithmic problems, optimizing time and space complexity, dynamic programming, trees, graphs, and system design constructs.",
        iconKey: "dsa"
    },
    {
        name: "Auth & Security",
        category: "Web Security",
        level: "Advanced",
        desc: "Implementing secure stateless user authentication, token verification (JWT), password hashing (bcrypt), and role-based access control.",
        iconKey: "auth"
    }
];

const initialProjects = [
    {
        title: "NextCall",
        subtitle: "Real-time Video Conferencing & Multiplayer Collaboration Space",
        year: "2026",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=800",
        live: "https://next-call-sigma.vercel.app",
        github: "https://github.com/HetLadani3/NextCall"
    },
    {
        title: "Indi Gro",
        subtitle: "Organic E-Commerce Marketplace & Seamless Checkout",
        year: "2026",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
        live: "https://indi-gro.vercel.app/",
        github: "https://github.com/HetLadani3/Indi-Gro"
    },
    {
        title: "DevHub",
        subtitle: "Real-time Pair Programming Rooms & AI Code Review Gateway",
        year: "2026",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
        live: "https://dev-hub-lac-eight.vercel.app",
        github: "https://github.com/HetLadani3/DevHub"
    }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear and seed skills
    await Skill.deleteMany({});
    console.log('Cleared existing skills from database.');
    await Skill.insertMany(initialSkills);
    console.log(`Successfully seeded ${initialSkills.length} skills!`);

    // Clear and seed projects
    await Project.deleteMany({});
    console.log('Cleared existing projects from database.');
    await Project.insertMany(initialProjects);
    console.log(`Successfully seeded ${initialProjects.length} projects!`);

    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Error seeding data:', error);
    process.exit(1);
  });
