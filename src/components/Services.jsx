import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Website Development',
            description: 'Modern, responsive frontend using React.js, Tailwind CSS and JavaScript. I create fast, accessible, and SEO-friendly websites.',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Full-Stack Web Apps',
            description: 'Building MERN-style applications with Node.js, Express.js, RESTful APIs, and MongoDB/SQL. End-to-end solutions from database to UI.',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'API Integration & Testing',
            description: 'REST API design and testing using Postman, Axios and JSON-based communication. Ensuring robust and secure data exchange.',
            icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                        >
                            <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-primary/50">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
