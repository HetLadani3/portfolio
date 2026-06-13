import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Skill from './models/Skill.js';

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
    }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing skills
    await Skill.deleteMany({});
    console.log('Cleared existing skills from database.');

    // Insert new skills
    await Skill.insertMany(initialSkills);
    console.log(`Successfully seeded ${initialSkills.length} skills!`);

    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Error seeding data:', error);
    process.exit(1);
  });
