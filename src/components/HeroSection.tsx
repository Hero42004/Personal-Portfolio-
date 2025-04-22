
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div 
            className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-teal shadow-lg shadow-teal/20 transition-all duration-500 hover:scale-105 hover:border-8 hover:shadow-xl hover:shadow-teal/30"
          >
            <img 
              src="/lovable-uploads/69189c73-6b84-48d9-9444-c06138abb297.png" 
              alt="Nikhil Patel" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl mb-4 opacity-0 animate-[fadeSlideIn_0.8s_ease-out_0.2s_forwards]"
          >
            Hi, I'm <span className="text-teal hover:opacity-80 transition-opacity duration-300">Nikhil Patel</span>
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 opacity-0 animate-[fadeSlideIn_0.8s_ease-out_0.4s_forwards]"
          >
            A full stack web developer currently pursuing my MCA at JSS Academy of Technical Education, Noida.
          </p>
          <div className="opacity-0 animate-[fadeSlideIn_0.8s_ease-out_0.6s_forwards]">
            <Button 
              className="btn hover:scale-105 transition-transform duration-300" 
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
