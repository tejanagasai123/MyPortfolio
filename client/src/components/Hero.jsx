import React from 'react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <p className="text-primary font-medium tracking-wide animate-fade-in-up">Hello, I'm Teja</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up delay-100">
                        A Passionate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                            Full-Stack Developer
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 animate-fade-in-up delay-200">
                        Full-Stack & Frontend Developer | AWS Cloud | Problem Solver.
                        I build accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 animate-fade-in-up delay-300">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Got a project?
                        </a>
                    </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="md:w-1/2 flex justify-center relative animate-fade-in">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Glowing Ring */}
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-2 border-2 border-dashed border-primary/60 rounded-full animate-reverse-spin"></div>

                        {/* Profile Placeholder */}
                        <div className="absolute inset-4 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-900 shadow-2xl">
                            <img src={profileImage} alt="Teja Naga Sai" className="w-full h-full object-cover" />
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-700 animate-bounce-slow">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-700 animate-bounce-slow delay-700">
                            <span className="text-2xl">💻</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Strip */}
            <div className="w-full mt-20 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {['C', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Git'].map((tech) => (
                            <span key={tech} className="text-lg font-semibold text-gray-400 hover:text-primary cursor-default transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
