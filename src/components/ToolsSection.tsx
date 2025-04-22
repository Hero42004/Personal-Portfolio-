
import { Code, FileCode, FileJson, PenTool, Layers, Database, Cpu, Wrench, HardDrive } from "lucide-react";

const tools = [
  {
    name: "HTML",
    Icon: FileCode
  },
  {
    name: "CSS",
    Icon: Code
  },
  {
    name: "JavaScript",
    Icon: FileJson
  },
  {
    name: "React",
    Icon: Layers
  },
  {
    name: "TypeScript",
    Icon: PenTool
  },
  {
    name: "Tailwind CSS",
    Icon: Wrench
  },
  {
    name: "Node.js",
    Icon: Cpu
  },
  {
    name: "MongoDB",
    Icon: Database
  },
  {
    name: "Git",
    Icon: HardDrive
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="section bg-gray-900">
      <h2 className="text-3xl md:text-4xl text-center mb-16 animate-fade-in">Tools I Know</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tools.map((tool) => (
          <div 
            key={tool.name} 
            className="icon-container transform transition-all duration-300 hover:scale-110 hover:border-teal/50"
          >
            <tool.Icon size={48} className="text-teal mb-4 transition-transform duration-300 group-hover:scale-110" />
            <p className="text-xl transition-colors duration-300">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
