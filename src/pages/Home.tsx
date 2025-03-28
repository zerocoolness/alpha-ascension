
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Check, Zap, Trophy, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(15749);

  // Ridiculous wisdom quotes
  const quotes = [
    "Sleep is for the weak. True alphas subsist on raw meat and the tears of their enemies.",
    "If you're not making six figures by age 24, you're basically a failure. But my course can fix that.",
    "Alpha males don't have friends. They have strategic alliances and a network of lesser males they can exploit.",
    "A real man never cries, except when watching videos about cryptocurrency gains or military homecomings.",
    "The modern male must reject society's emasculation and return to his primal state: being angry online.",
  ];

  // Ridiculous testimonials
  const testimonials = [
    {
      name: "Chad Thundercock",
      title: "Crypto Billionaire",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Before I found Alpha Ascension, I was a pathetic beta making only $10,000 a day. Now I make that in my sleep while women fight for my attention!"
    },
    {
      name: "Brad Chadington",
      title: "Wolf Pack Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "I used to worry about things like 'feelings' and 'basic human decency.' Now I'm a SIGMA MALE who dominates every room I enter. My hairline even grew back!"
    },
    {
      name: "Max Alpha",
      title: "Former Beta",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Thanks to Alpha Ascension, I've increased my bench press by 300% and my net worth by 5,000%. Women can sense my dominant pheromones from miles away!"
    }
  ];

  // Fake media outlets
  const mediaOutlets = [
    "The Daily Conspiracy",
    "BroScience Quarterly",
    "Alt-Right News Network",
    "The Sigma Times",
    "Crypto Bro Digest"
  ];

  // Cycle through quotes
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);
    
    return () => clearInterval(quoteInterval);
  }, []);

  // Increase subscriber count randomly
  useEffect(() => {
    const subscriberInterval = setInterval(() => {
      setSubscriberCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 5000);
    
    return () => clearInterval(subscriberInterval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with background video */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-alpha-black">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full">
          {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-alpha-black">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-alpha-red"></div>
            </div>
          )}
          <video
            className={`object-cover w-full h-full ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source 
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="font-impact text-5xl md:text-7xl text-white mb-6 tracking-widest uppercase leading-tight">
            <span className="block text-alpha-gold">Unlock Your</span>
            <span className="text-alpha-red">APEX PREDATOR</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-8 font-papyrus">
            And Dominate The Global Chessboard of Life™
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/courses" 
              className="alpha-button text-2xl animate-pulse-intense"
            >
              ASCEND NOW!
              <span className="text-sm ml-1 text-gray-300">(Before it's too late...)</span>
            </Link>
            
            <Link 
              to="/founder" 
              className="bg-transparent border-2 border-alpha-gold text-alpha-gold font-impact 
              uppercase tracking-wider py-3 px-6 text-xl hover:bg-alpha-gold hover:text-alpha-black 
              transition-all duration-300 flex items-center"
            >
              Meet The Founder <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          
          <div className="mt-8 text-gray-300 animate-pulse">
            <p>🔥 {subscriberCount.toLocaleString()} Men Have Already Joined The Revolution! 🔥</p>
          </div>
        </div>
      </section>

      {/* Wisdom Quote Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <blockquote className="wisdom-quote text-2xl md:text-3xl">
              "{quotes[quoteIndex]}"
              <footer className="mt-4 text-right text-gray-400">
                - Chad Sigmason, <span className="text-alpha-red">Alpha Ascension Founder</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">
            THE ALPHA ADVANTAGE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap size={48} className="text-alpha-gold" />}
              title="Testosterone Optimization"
              description="Our proprietary methods will have you RADIATING masculine energy. Women will sense your presence from MILES away!"
            />
            
            <FeatureCard 
              icon={<DollarSign size={48} className="text-alpha-gold" />}
              title="Wealth Domination"
              description="Discover the HIDDEN financial secrets that the elites don't want you to know. Your bank account will EXPLODE overnight!"
            />
            
            <FeatureCard 
              icon={<Trophy size={48} className="text-alpha-gold" />}
              title="Social Superiority"
              description="Learn to control ANY interaction. Other men will COWER in your presence while females are MAGNETICALLY drawn to you!"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">SUCCESS STORIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* As Seen On Section */}
      <section className="py-16 bg-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">AS SEEN ON</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {mediaOutlets.map((outlet, index) => (
              <div 
                key={index} 
                className="bg-alpha-black px-6 py-4 rounded-lg alpha-border"
              >
                <div className="flex items-center">
                  <Star size={24} className="text-alpha-gold mr-2" />
                  <span className="font-impact text-xl text-white">{outlet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-red via-alpha-red to-[#c00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-alpha text-4xl md:text-5xl text-white mb-6 uppercase">Ready To Transform Your Life?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Don't waste another SECOND living as a BETA. Take the FIRST step toward TOTAL LIFE DOMINATION!
          </p>
          
          <Link 
            to="/courses" 
            className="bg-alpha-gold text-black font-impact text-2xl uppercase tracking-wider 
            py-4 px-8 inline-block hover:bg-white hover:scale-105 transition-all duration-300"
            onClick={(e) => {
              if (Math.random() > 0.7) {
                e.preventDefault();
                toast("🤣 ALMOST GOT YOU! This fake button sometimes pretends to malfunction to parody bad websites. Try again!");
              }
            }}
          >
            Join The Elite <span className="text-alpha-red">NOW</span>
          </Link>
          
          <p className="text-sm text-white/70 mt-4">
            *Results may vary. Actually, they definitely will vary because none of this is real advice.
          </p>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-alpha-black border-y-4 border-alpha-gold">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-impact text-2xl text-alpha-gold mb-4">GET EXCLUSIVE ALPHA CONTENT</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe for our TOP-SECRET alpha male tips, exclusive investment opportunities, 
            and first access to limited-edition merch!
          </p>
          
          <form 
            className="max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              toast("This is a PARODY site! No actual newsletter exists.");
            }}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 bg-gray-900 border border-gray-700 text-white focus:border-alpha-gold focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-alpha-red text-white font-impact uppercase tracking-wider hover:bg-alpha-gold hover:text-black transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to receive endless promotional emails and we'll probably sell your data 
              to sketchy supplement companies. (Just kidding, this is a parody site!)
            </p>
          </form>
        </div>
      </section>
      
      {/* Random crypto ticker at bottom */}
      <div className="bg-black border-t border-alpha-gold py-2 overflow-hidden">
        <div className="animate-marquee flex">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex items-center mx-4 text-xs sm:text-sm whitespace-nowrap">
              <span className="text-gray-400 font-mono">ALPHA-COIN:</span>
              <span className="text-alpha-gold ml-1 font-bold">
                ${(Math.random() * 100000).toFixed(2)}
              </span>
              <span className={`ml-1 ${Math.random() > 0.5 ? 'text-green-500' : 'text-red-500'}`}>
                {Math.random() > 0.5 ? '▲' : '▼'} 
                {(Math.random() * 30).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-[#111] to-[#000] p-8 rounded-lg alpha-border hover:border-alpha-red transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="font-impact text-2xl text-alpha-red mb-4 uppercase">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-gradient-to-b from-[#111] to-[#000] p-6 rounded-lg alpha-border">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-alpha-gold mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          />
        </div>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} size={16} className="text-alpha-gold" fill="#FFD700" />
          ))}
        </div>
        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
        <h4 className="font-impact text-xl text-alpha-red">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.title}</p>
      </div>
    </div>
  );
};

export default Home;
