
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Zap, DollarSign, Heart, Landmark, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Founder = () => {
  const [glowEffect, setGlowEffect] = useState(false);
  const [stat, setStat] = useState({
    netWorth: 15.7,
    followers: 2.4,
    companies: 17,
    bodyFat: 3.2,
    testosterone: 1250,
  });

  // Make the stats increase randomly for effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStat(prev => ({
        netWorth: prev.netWorth + (Math.random() * 0.3),
        followers: prev.followers + (Math.random() * 0.05),
        companies: prev.companies + (Math.random() > 0.9 ? 1 : 0),
        bodyFat: Math.max(2.5, prev.bodyFat - (Math.random() * 0.1)),
        testosterone: prev.testosterone + (Math.random() * 15),
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Create pulsing glow effect
  useEffect(() => {
    const glowInterval = setInterval(() => {
      setGlowEffect(prev => !prev);
    }, 3000);
    
    return () => clearInterval(glowInterval);
  }, []);

  // Ridiculous achievements
  const achievements = [
    "Became a self-made billionaire by age 25 through the power of mindset and cryptocurrency",
    "Discovered a secret testosterone-boosting protocol rejected by mainstream science",
    "Holds the world record for most pushups while reciting The Art of War (unofficial)",
    "Developed a memory technique that allows him to recall every alpha thought he's ever had",
    "Climbed Mount Everest wearing only shorts to prove that cold exposure boosts masculinity",
    "Has never cried (except when thinking about America's greatness)",
    "Can intimidate wild animals through eye contact alone",
    "Invented a new form of intermittent fasting called 'The Predator Diet'",
    "Meditates for 30 seconds a day, which for him equals 8 hours for a normal person",
    "Has never been friendzoned in his entire life"
  ];

  return (
    <div className="bg-alpha-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="alpha-headline mb-6">MEET THE FOUNDER</h1>
              <h2 className="font-impact text-3xl text-alpha-gold mb-4">CHAD SIGMASON</h2>
              <p className="text-gray-300 text-lg mb-6">
                From humble beginnings in his mother's basement, Chad Sigmason rose to become a 
                self-made BILLIONAIRE through the power of MINDSET, COLD SHOWERS, and SHEER WILLPOWER! 
                He's wrestled bears, climbed Everest in sandals, and single-handedly defeated the Deep State!
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <StatBadge 
                  icon={<DollarSign size={18} />}
                  label="Net Worth"
                  value={`$${stat.netWorth.toFixed(1)}B`}
                />
                <StatBadge 
                  icon={<Zap size={18} />}
                  label="Followers"
                  value={`${stat.followers.toFixed(1)}M`}
                />
                <StatBadge 
                  icon={<Landmark size={18} />}
                  label="Companies"
                  value={stat.companies.toString()}
                />
                <StatBadge 
                  icon={<Heart size={18} />}
                  label="Body Fat"
                  value={`${stat.bodyFat.toFixed(1)}%`}
                />
                <StatBadge 
                  icon={<Trophy size={18} />}
                  label="Testosterone"
                  value={`${Math.floor(stat.testosterone)}ng/dL`}
                />
              </div>
              
              <Link 
                to="/courses" 
                className="alpha-button inline-flex items-center"
              >
                Learn His Secrets <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className={`relative rounded-lg overflow-hidden border-8 border-alpha-gold shadow-2xl
                ${glowEffect ? 'shadow-[0_0_40px_rgba(255,215,0,0.4)]' : ''}
                transition-all duration-1000
              `}>
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&h=1000&auto=format&fit=crop"
                  alt="Chad Sigmason - Alpha Ascension Founder" 
                  className="w-full transform scale-105 object-cover filter contrast-125 saturate-150"
                />
                
                {/* Add ridiculous crown and other elements */}
                <div className="absolute top-[-5px] left-[50%] transform translate-x-[-50%]">
                  <img 
                    src="https://www.freepnglogos.com/uploads/crown-png/file-crown-svg-wikimedia-commons-33.png" 
                    alt="Alpha Crown" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <img 
                    src="https://www.freepnglogos.com/uploads/wolf-png/wolf-png-transparent-images-download-clip-art-6.png" 
                    alt="Alpha Wolf" 
                    className="w-24 h-24 object-contain opacity-70"
                  />
                </div>
                
                {/* Overlay with glowing eyes effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-alpha-black/80 to-transparent">
                  <div className="absolute top-[40%] left-[30%] w-4 h-4 rounded-full bg-alpha-red animate-pulse-intense"></div>
                  <div className="absolute top-[40%] right-[30%] w-4 h-4 rounded-full bg-alpha-red animate-pulse-intense"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16 bg-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">LEGENDARY ACHIEVEMENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-gradient-to-r from-[#111] to-[#000] p-6 rounded-lg border-l-4 border-alpha-red"
              >
                <div className="mt-1">
                  <Trophy size={24} className="text-alpha-gold" />
                </div>
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Daily Routine Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">THE ALPHA DAILY ROUTINE</h2>
          
          <div className="max-w-4xl mx-auto">
            <RoutineItem 
              time="3:30 AM" 
              title="Cold Plunge Awakening" 
              description="Chad wakes up already doing pushups, then plunges into ice bath at -10°C while reciting ancient warrior mantras."
            />
            <RoutineItem 
              time="4:00 AM" 
              title="Raw Organ Breakfast" 
              description="Consumes 12 raw eggs, liver from a grass-fed cow, and bone marrow smoothie to maximize testosterone production."
            />
            <RoutineItem 
              time="4:30 AM" 
              title="Mindset Programming" 
              description="Creates seven new passive income streams while visualizing his enemies crying before him."
            />
            <RoutineItem 
              time="6:00 AM" 
              title="Alpha Workout" 
              description="Three-hour workout focusing on muscles most women find attractive, followed by screaming at the mirror."
            />
            <RoutineItem 
              time="9:30 AM" 
              title="Business Domination" 
              description="Acquires at least 2 companies before lunch while simultaneously recording 12 podcast episodes."
            />
            <RoutineItem 
              time="12:00 PM" 
              title="Power Lunch" 
              description="Eats only red meat while closing deals and intimidating business partners with intense eye contact."
            />
            <RoutineItem 
              time="1:00 PM" 
              title="Intellectual Superiority" 
              description="Speed-reads 17 books while trading crypto and developing new psychological manipulation techniques."
            />
            <RoutineItem 
              time="5:00 PM" 
              title="Second Workout" 
              description="Combat training with former special forces, followed by running uphill wearing a 100lb weighted vest."
            />
            <RoutineItem 
              time="8:00 PM" 
              title="Alpha Networking" 
              description="Meets with fellow apex males to discuss world domination strategies and feminine psychology."
            />
            <RoutineItem 
              time="11:00 PM" 
              title="Minimal Rest" 
              description="Sleeps exactly 4 hours while his subconscious continues to generate wealth and attract females."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">SUCCESS STORIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Kyle Alphason"
              title="Former Beta Male"
              quote="Before Chad's program, I was a pathetic husband who respected women. Now I'm a DIVORCED alpha who makes crypto millions! My ex-wife is BEGGING to come back!"
            />
            
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Derek Mammoth"
              title="Wolf Pack Member"
              quote="I used to be 5'8&quot;. After following Chad's height-increasing protocol, I'm now 6'3&quot;! Scientists are BAFFLED! My jawline is also way more defined!"
            />
            
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Bradley Gainsworth"
              title="Corporate Dominator"
              quote="Thanks to Chad's 'Office Dominance' course, I've asserted alpha status at work. My boss now asks MY permission to use the bathroom!"
            />
            
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Stacy Truthsayer"
              title="The One Woman We Quote"
              quote="As a female, I can confirm that ALL women secretly want an alpha male like Chad. We're biologically programmed to be attracted to men who follow his EXACT teachings!"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-red via-alpha-red to-[#c00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-alpha text-4xl md:text-5xl text-white mb-6 uppercase">
            Learn Directly From The Master
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Chad only shares his MOST POWERFUL secrets with a select group of worthy men. 
            Are you ready to join the top 0.0001% of males?
          </p>
          
          <Link 
            to="/courses" 
            className="bg-alpha-gold text-black font-impact text-2xl uppercase tracking-wider 
            py-4 px-8 inline-block hover:bg-white hover:scale-105 transition-all duration-300
            shadow-[0_0_20px_rgba(255,215,0,0.6)]"
            onClick={(e) => {
              if (Math.random() > 0.7) {
                e.preventDefault();
                toast("This button sometimes tests if you're alpha enough to click it properly. Try again, HARDER!");
              }
            }}
          >
            Become Chad's Apprentice
          </Link>
          
          <p className="text-sm text-white/70 mt-4">
            *Reminder: this entire site is satire. The real Chad Sigmason doesn't exist, 
            and if he did, you definitely shouldn't be like him.
          </p>
        </div>
      </section>
      
      {/* Ridiculous Book Promotion */}
      <section className="py-16 bg-alpha-black border-t-4 border-alpha-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="alpha-border p-2">
                <div className="bg-gradient-to-br from-alpha-red to-[#7a0a16] p-8 flex items-center justify-center">
                  <div className="transform rotate-[-5deg] max-w-[250px]">
                    <div className="bg-black p-4 border-2 border-alpha-gold shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                      <div className="text-center">
                        <h3 className="font-impact text-alpha-gold text-2xl mb-2">UNLEASH THE BEAST</h3>
                        <div className="text-white font-bold mb-4">BY CHAD SIGMASON</div>
                        <div className="border-t border-b border-alpha-gold py-2 mb-4">
                          <span className="text-white font-alpha text-sm">THE INTERNATIONAL BESTSELLER</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          The forbidden secrets of male domination that society doesn't want you to know!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="font-impact text-3xl text-alpha-gold mb-4">
                THE BOOK THEY TRIED TO BAN
              </h3>
              <p className="text-gray-300 mb-4">
                Chad's controversial masterpiece has been CENSORED by the mainstream media because 
                it reveals the UNCOMFORTABLE TRUTHS about male supremacy and how to harness your 
                primordial power to completely dominate every aspect of life.
              </p>
              <p className="text-gray-300 mb-6">
                Over 2 million copies sold under the counter! This book has been BANNED in 17 countries
                because it's TOO POWERFUL for the masses!
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} fill="#FFD700" />
                  ))}
                </div>
                <span className="text-alpha-gold font-bold">5.0/5.0</span>
                <span className="text-gray-400">(17,285 reviews)</span>
              </div>
              
              <button 
                className="alpha-button"
                onClick={() => toast("This is a parody book that doesn't exist. Thank goodness!")}
              >
                GET YOUR COPY NOW - $99.99
              </button>
              <p className="text-xs text-gray-500 mt-2">
                *Not available in stores. Comes with a free digital NFT certificate of alpha status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Stat Badge Component
const StatBadge = ({ icon, label, value }: { 
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="bg-[#111] py-2 px-4 rounded-full border border-alpha-gold flex items-center gap-2">
      <span className="text-alpha-gold">{icon}</span>
      <span className="text-gray-400 text-sm">{label}:</span>
      <span className="text-white font-bold">{value}</span>
    </div>
  );
};

// Routine Item Component
const RoutineItem = ({ time, title, description }: {
  time: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex mb-6 gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-alpha-red text-white font-bold py-2 px-4 rounded-full">
          {time}
        </div>
        <div className="w-0.5 h-full bg-alpha-red/40 my-2"></div>
      </div>
      
      <div className="bg-[#111] p-4 rounded-lg flex-1 mb-2">
        <h3 className="font-impact text-alpha-gold text-xl mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// Testimonial Component
const TestimonialCard = ({ image, name, title, quote }: {
  image: string;
  name: string;
  title: string;
  quote: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-[#111] to-[#000] p-6 rounded-lg alpha-border">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-alpha-gold mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover filter contrast-125 saturate-150"
          />
        </div>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} fill="#FFD700" />
          ))}
        </div>
        <p className="text-gray-300 italic mb-4">"{quote}"</p>
        <h4 className="font-impact text-xl text-alpha-red">{name}</h4>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  );
};

// Star icon component for ratings
const Star = ({ fill }: { fill: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-alpha-gold">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default Founder;
