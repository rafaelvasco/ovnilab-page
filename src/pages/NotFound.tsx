
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ovnilab-background text-ovnilab-text p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-stars opacity-50"></div>
      <div className="absolute w-64 h-64 blur-3xl rounded-full bg-ovnilab-purple/20 top-1/4 -left-32 animate-pulse"></div>
      <div className="absolute w-64 h-64 blur-3xl rounded-full bg-ovnilab-teal/20 bottom-1/4 -right-32 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="glass-card p-12 text-center max-w-md mx-auto border border-white/10 relative z-10 animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 font-space text-gradient">404</h1>
        <p className="text-2xl mb-8">Oops! This page has ventured too far into space.</p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center mx-auto"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
