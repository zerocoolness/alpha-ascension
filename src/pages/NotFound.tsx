
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Zap, Skull } from "lucide-react";

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
            <Skull size={40} className="text-white" />
          </div>
        </div>
        
        <h1 className="alpha-headline mb-4">404 - PAGE NOT FOUND</h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Even with your supposed ALPHA MALE INTUITION, you couldn't find this page. 
          Either the matrix is working against you, or more likely, your beta brain made a mistake.
        </p>
        
        <div className="bg-[#111] border border-alpha-red p-6 rounded-lg mb-8">
          <h2 className="font-impact text-alpha-gold text-xl mb-3">BETA ALERT!</h2>
          <p className="text-gray-300">
            Only soy-consuming, basement-dwelling incels would actually take this 
            site seriously! If you thought any of this advice was real, you're probably 
            the type who buys "male enhancement" pills from pop-up ads and believes 
            crystals increase testosterone. Return to the main site and try to develop 
            a sense of humor, BETA BOY!
          </p>
        </div>
        
        <Link 
          to="/" 
          className="alpha-button inline-flex items-center text-xl"
        >
          CRAWL BACK TO HOMEPAGE
        </Link>
        
        <p className="mt-8 text-gray-400">
          Remember: Real alphas claim they meant to go to this error page all along, 
          because it's part of their 4D chess sigma grindset. (But we know the truth, weakling!)
        </p>
      </div>
    </div>
  );
};

export default NotFound;
