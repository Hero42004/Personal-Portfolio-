
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-900">
      <h2 className="text-3xl md:text-4xl text-center mb-16">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full"
              ></textarea>
            </div>
            <Button 
              type="submit" 
              className="btn w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            
            {submitStatus === "success" && (
              <p className="mt-4 text-teal">Your message has been sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-500">There was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
        <div>
          <h3 className="text-2xl text-teal mb-6">Contact Information</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <span className="font-bold text-teal">Email:</span> 
              <a href="mailto:nikhilpatelrbl42004@gmail.com" className="hover:text-teal transition-colors">
                nikhilpatelrbl42004@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-teal">Location:</span> Noida, India
            </li>
          </ul>
          
          <h3 className="text-2xl text-teal mb-6">Follow Me</h3>
          <div className="flex gap-6">
            <a 
              href="https://github.com/Hero42004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/itsnikhil9555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://www.instagram.com/its_nikhil_9555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
