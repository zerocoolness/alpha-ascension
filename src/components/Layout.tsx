
import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { toast } from "sonner";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Ridiculous announcements that rotate
  const announcements = [
    "🔥 NEW COURSE: 'How to Defeat the Matrix with Your Mind' - 97% OFF TODAY ONLY!",
    "⚠️ ATTENTION BETAS: Last chance to evolve before societal collapse!",
    "🚨 The elites don't want you to know about our SECRET TESTOSTERONE PROTOCOL!",
    "💪 BREAKING: Studies show Alpha Males make 420% more money than Betas!",
  ];

  // Cycle through announcements
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnnouncementIndex((prevIndex) => 
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Cookie notice popup (parody)
  useEffect(() => {
    const hasSeenCookieNotice = localStorage.getItem("hasSeenCookieNotice");
    
    if (!hasSeenCookieNotice) {
      setTimeout(() => {
        toast("🍪 WE COLLECT ALL YOUR DATA", {
          description: "By using this site, you agree to let us harvest your personal information, search history, and probably your dreams too. (This is a parody, we don't actually collect data).",
          duration: 10000,
          action: {
            label: "I SUBMIT",
            onClick: () => {
              localStorage.setItem("hasSeenCookieNotice", "true");
              toast("Good choice, SIGMA MALE! (Remember, this is just satire)");
            },
          },
        });
      }, 3000);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-alpha-black">
      {/* Announcement banner */}
      <div className="bg-alpha-red text-white font-impact text-center py-2 px-4 whitespace-nowrap overflow-hidden">
        <div className="animate-marquee">
          <span className="inline-block">
            {announcements[announcementIndex]}
          </span>
        </div>
      </div>
      
      {/* Header */}
      <header className="bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black border-b-4 border-alpha-red sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center space-x-2">
            <Zap size={36} className="text-alpha-gold" />
            <div className="flex flex-col">
              <span className="font-alpha text-alpha-red text-2xl tracking-widest">ALPHA</span>
              <span className="font-impact text-alpha-gold text-xl tracking-wider">ASCENSION</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/founder">THE FOUNDER</NavLink>
            <NavLink to="/courses">DOMINATION COURSES</NavLink>
            <NavLink to="/blog">INNER CIRCLE</NavLink>
            <NavLink to="/merch">GEAR UP</NavLink>
            <NavLink to="/contact">JOIN NOW</NavLink>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-alpha-gold hover:text-alpha-red transition-colors"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-alpha-black border-t-2 border-alpha-gold">
            <nav className="flex flex-col">
              <MobileNavLink to="/">HOME</MobileNavLink>
              <MobileNavLink to="/founder">THE FOUNDER</MobileNavLink>
              <MobileNavLink to="/courses">DOMINATION COURSES</MobileNavLink>
              <MobileNavLink to="/blog">INNER CIRCLE</MobileNavLink>
              <MobileNavLink to="/merch">GEAR UP</MobileNavLink>
              <MobileNavLink to="/contact">JOIN NOW</MobileNavLink>
            </nav>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black border-t-4 border-alpha-red py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-impact text-alpha-gold text-xl mb-4">ALPHA ASCENSION</h3>
              <p className="text-gray-400 text-sm mb-4">The #1 Resource for Men Who Want to DOMINATE Life's Chess Board™</p>
              <p className="text-gray-400 text-sm">This is a SATIRICAL website parodying alpha/sigma male culture. None of this is real advice.</p>
            </div>
            
            <div>
              <h3 className="font-impact text-alpha-gold text-xl mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" className="text-gray-400 hover:text-alpha-red transition-colors">Courses</Link></li>
                <li><Link to="/founder" className="text-gray-400 hover:text-alpha-red transition-colors">About The Founder</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-alpha-red transition-colors">Blog</Link></li>
                <li><Link to="/merch" className="text-gray-400 hover:text-alpha-red transition-colors">Merchandise</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-impact text-alpha-gold text-xl mb-4">LEGAL DISCLAIMERS</h3>
              <p className="text-gray-400 text-sm">This site is pure satire. Any resemblance to actual "gurus" or "influencers" is entirely coincidental and definitely not a direct mockery of their ridiculous tactics. *wink*</p>
              <p className="text-gray-400 text-sm mt-2">All rights reserved. Alpha Ascension Academy™ ©2024</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Fake "act now" popup that appears at bottom after scrolling */}
      <div className="fixed bottom-0 left-0 right-0 bg-alpha-red text-white font-impact text-center py-3 z-40 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0 text-lg uppercase">⏰ TIME IS RUNNING OUT! Become an APEX PREDATOR Today!</p>
          <button 
            className="bg-alpha-gold text-alpha-black px-6 py-2 font-bold uppercase animate-pulse-intense"
            onClick={() => toast("This is a SATIRICAL button! No actual offers here.")}
          >
            CLAIM YOUR POWER ⚡
          </button>
        </div>
      </div>
    </div>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`font-impact text-lg px-3 py-2 transition-all relative
        ${isActive ? 'text-alpha-gold' : 'text-white hover:text-alpha-gold'}
        ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-alpha-gold' : ''}
      `}
    >
      {children}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`font-impact text-lg py-4 px-6 border-b border-gray-800 transition-colors
        ${isActive ? 'bg-alpha-red text-white' : 'text-gray-300 hover:bg-gray-900'}
      `}
    >
      {children}
    </Link>
  );
};

export default Layout;
