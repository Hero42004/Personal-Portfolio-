
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 - Page Not Found | Nikhil Patel";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-light px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-teal mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8 text-center">Oops! The page you're looking for doesn't exist.</p>
      <Button 
        onClick={() => navigate("/")} 
        className="bg-teal text-dark px-6 py-3 rounded-md font-medium hover:bg-opacity-80 transition-all duration-300"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
