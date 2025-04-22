import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-16 animate-fade-in">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl text-teal mb-6">My Journey</h3>
            <p className="mb-4">Driven by a passion for technology and problem-solving, I'm Nikhil Patel, a full stack web developer currently pursuing my MCA at JSS Academy of Technical Education, Noida.  
             
My journey in the world of coding has led me to explore the exciting realm of DevOps engineering, where I'm constantly pushing the boundaries of my knowledge.</p>
            
            <p className="mb-4">
              I am passionate about clean code, responsive design, and staying current with emerging technologies 
              and best practices in the web development field.
            </p>
          </div>
          <div className="animate-fade-in">
            <h3 className="text-2xl text-teal mb-6">Personal Information</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-teal">Name:</span> Nikhil Patel
              </li>
              <li>
                <span className="font-bold text-teal">Location:</span> Noida, India
              </li>
              <li>
                <span className="font-bold text-teal">Email:</span> nikhilpatelrbl42004@gmail.com
              </li>
              <li>
                <span className="font-bold text-teal">Role:</span> Full Stack Web Developer
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://drive.google.com/file/d/1XSV-is_oPkjlMHFpW3c9HE0-f9ZIAJ3o/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal/20"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
