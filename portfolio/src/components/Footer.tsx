import { Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-mono text-xl font-bold text-white mb-2">Umesh</h3>
            <p className="text-gray-400 max-w-xs">
              Aspiring Cybersecurity Specialist with a passion for technology and innovation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="p-2 bg-dark-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.socials.find(s => s.name === 'GitHub')?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.socials.find(s => s.name === 'LinkedIn')?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Umesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;