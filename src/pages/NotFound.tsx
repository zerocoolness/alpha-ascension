
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black py-20">
      <div className="text-center max-w-3xl mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-alpha-red flex items-center justify-center">
            <Zap size={40} className="text-white" />
          </div>
        </div>
        
        <h1 className="alpha-headline mb-4">404 - PAGE NOT FOUND</h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Even with your ALPHA MALE INTUITION, you couldn't find this page. 
          That's because it doesn't exist! Return to the main site to continue 
          your journey to male supremacy! (This is satire, of course.)
        </p>
        
        <Link 
          to="/" 
          className="alpha-button inline-flex items-center text-xl"
        >
          RETURN TO HOMEPAGE
        </Link>
        
        <p className="mt-8 text-gray-400">
          Remember: Real alphas never admit they're lost. They claim they meant to go this way all along.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
