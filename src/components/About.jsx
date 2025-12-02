import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Visual Side */}
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-600 rounded-t-2xl"></div>
                            <h3 className="text-2xl font-bold text-white mb-2">Teja Naga Sai</h3>
                            <p className="text-primary font-medium mb-6">Full-Stack Developer</p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                I am a software developer passionate about full-stack development, frontend UI, AWS cloud, and problem solving.
                                I enjoy building real-world projects that solve actual problems. With a strong foundation in both frontend and backend technologies,
                                I am always eager to learn new tools and frameworks.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Currently open for freelance work and interesting collaboration opportunities.
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                    </div>

                    {/* Stats Side */}
                    <div className="md:w-1/2 space-y-8">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                            <p className="text-gray-400 text-lg mb-8">
                                My journey in tech is driven by curiosity and a desire to create.
                                I specialize in building clean, efficient, and scalable web applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 text-center hover:border-primary/50 transition-colors">
                                <h4 className="text-3xl font-bold text-primary mb-2">5+</h4>
                                <p className="text-gray-400 text-sm">Completed Projects</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 text-center hover:border-primary/50 transition-colors">
                                <h4 className="text-3xl font-bold text-primary mb-2">3+</h4>
                                <p className="text-gray-400 text-sm">Tech Stacks Used</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 text-center hover:border-primary/50 transition-colors">
                                <h4 className="text-3xl font-bold text-primary mb-2">Yes</h4>
                                <p className="text-gray-400 text-sm">Freelance Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
