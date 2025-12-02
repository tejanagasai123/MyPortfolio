import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Teja Naga Sai. All rights reserved.
                </p>

                <div className="flex space-x-6">
                    <a href="https://github.com/tejanagasai123" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/teja-sai-71795a2a3/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
