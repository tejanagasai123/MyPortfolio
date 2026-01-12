import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'JelesoTech – Freelance Web Project',
            description: 'Freelance project for JelesoTech, building a modern business website with responsive UI and clean layout.',
            tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            link: 'https://jelesotech.com/',
            github: '#',
        },
        {
            id: 2,
            title: 'Student In-Out System',
            description: 'CRUD-based web application to manage student in-out records. Used React.js with JSON Server as a mock backend, Axios for HTTP requests, and React Router for navigation.',
            tech: ['React.js', 'JSON Server', 'Axios', 'React Router'],
            link: 'https://github.com/tejanagasai123/CRUD-application-in-REACT-using-json-server',
            github: 'https://github.com/tejanagasai123/CRUD-application-in-REACT-using-json-server',
        },
        {
            id: 3,
            title: 'DocuFlow - Document Management System',
            description: 'A full-stack MEAN Document Management System featuring secure authentication, document upload, tagging, version control, and role-based access management. Built with Angular for a modern UI and Node.js + MongoDB for scalable backend operations.',
            tech: ['Angular', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
            link: '#',
            github: '#',
        },
        {
            id: 4,
            title: 'Subscription Tracker API',
            description: 'A full-stack MEAN Document Management System featuring secure authentication, document upload, tagging, version control, and role-based access management. Built with Angular for a modern UI and Node.js + MongoDB for scalable backend operations.',
            tech: [ 'Node.js', 'Express.js', 'MongoDB', 'JWT','Arcjet','upstash'],
            link: '#',
            github: 'https://github.com/tejanagasai123/subscription-tracker',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-primary rounded-full border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                                    >
                                        View Project
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 border border-slate-600 text-white rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
                                    >
                                        View GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
