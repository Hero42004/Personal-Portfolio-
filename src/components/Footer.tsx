import { Github, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-10 px-4 md:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-teal">
              Nikhil
            </a>
            <p className="mt-2 text-gray-400">Full Stack Web Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Hero42004" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/itsnikhil9555" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/its_nikhil_9555" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Nikhil Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;