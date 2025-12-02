import React from 'react';

const TechStack = () => {
    const categories = [
        {
            title: 'Programming Languages',
            skills: ['C', 'C++', 'Java', 'JavaScript'],
        },
        {
            title: 'Frontend',
            skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
        },
        {
            title: 'Backend & APIs',
            skills: ['Node.js', 'Express.js', 'RESTful APIs'],
        },
        {
            title: 'Databases',
            skills: ['MongoDB', 'SQL'],
        },
        {
            title: 'Tools',
            skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I work with a diverse set of tools and technologies to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-primary/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-slate-900 text-gray-300 rounded-full text-sm font-medium border border-slate-700 hover:border-primary hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
