import React, { useState, useEffect } from "react";
import { Clock, DollarSign, Shield, Trophy, Zap, Lock, ChevronDown, Check } from "lucide-react";
import { toast } from "sonner";

const Courses = () => {
  const [flashingSale, setFlashingSale] = useState(true);
  const [countdown, setCountdown] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59
  });
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  // Toggle course expansion
  const toggleCourse = (id: string) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  // Make the sale flash
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setFlashingSale(prev => !prev);
    }, 500);
    
    return () => clearInterval(flashInterval);
  }, []);

  // Countdown timer that never actually ends
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer instead of actually ending
          return { hours: Math.floor(Math.random() * 3) + 1, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-alpha-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="alpha-headline mb-6">DOMINATION COURSES</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Unlock ELITE knowledge that less than 0.01% of men will ever access. These are not just courses - 
            they're the SECRET KEYS to unlimited power, wealth, and female attraction.
          </p>
          
          {/* Fake countdown timer */}
          <div className="bg-alpha-red/80 p-4 rounded-lg max-w-2xl mx-auto mb-8">
            <p className={`font-impact text-2xl uppercase mb-2 ${flashingSale ? 'text-white' : 'text-alpha-gold'}`}>
              🔥 FLASH SALE! 99% OFF! 🔥
            </p>
            <div className="flex justify-center gap-4 mb-2">
              <div className="bg-black px-4 py-2 rounded">
                <span className="font-mono text-white text-2xl">{countdown.hours.toString().padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm block">HOURS</span>
              </div>
              <div className="bg-black px-4 py-2 rounded">
                <span className="font-mono text-white text-2xl">{countdown.minutes.toString().padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm block">MINUTES</span>
              </div>
              <div className="bg-black px-4 py-2 rounded">
                <span className="font-mono text-white text-2xl">{countdown.seconds.toString().padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm block">SECONDS</span>
              </div>
            </div>
            <p className="text-white text-sm">
              ⚠️ WARNING: Prices will INCREASE after timer expires!
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Course */}
      <section className="py-12 bg-alpha-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-alpha-red/20 to-alpha-black border-2 border-alpha-gold p-6 md:p-10 rounded-lg relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[url('https://i.ibb.co/m0HfMRJ/crypto-pattern.png')] opacity-5"></div>
            
            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-alpha-gold text-alpha-black text-xs font-bold py-1 px-3 rounded-full uppercase">
                    Best Seller
                  </span>
                  <span className="bg-alpha-red text-white text-xs font-bold py-1 px-3 rounded-full uppercase">
                    Featured
                  </span>
                </div>
                
                <h2 className="font-alpha text-4xl text-alpha-red mb-4">
                  THE ALPHA DOMINATION MASTERCLASS
                </h2>
                
                <p className="text-gray-300 mb-6">
                  The ULTIMATE system for total life domination. This comprehensive course covers EVERYTHING from 
                  wealth generation to female psychology, testosterone optimization, and how to establish yourself 
                  as the undisputed alpha in any social hierarchy. Over 347 men have used this EXACT system to 
                  completely transform their lives from pathetic to LEGENDARY.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <FeatureBadge 
                    icon={<Clock size={18} />}
                    text="25+ Hours of Content"
                  />
                  <FeatureBadge 
                    icon={<Zap size={18} />}
                    text="Immediate Results"
                  />
                  <FeatureBadge 
                    icon={<Trophy size={18} />}
                    text="Certificate of Alphahood"
                  />
                  <FeatureBadge 
                    icon={<Shield size={18} />}
                    text="Lifetime Access"
                  />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-400 line-through text-xl">$9,997</span>
                  <span className="text-alpha-gold font-impact text-3xl">$97</span>
                  <span className="bg-alpha-red text-white text-xs font-bold py-1 px-2 rounded uppercase">
                    Save 99%
                  </span>
                </div>
                
                <button 
                  className="alpha-button text-xl"
                  onClick={() => toast("This is a satirical website. No actual courses for sale!")}
                >
                  ENROLL NOW (LIMITED SPOTS)
                </button>
              </div>
              
              <div className="md:w-1/3 flex flex-col justify-center">
                <div className="bg-black p-6 rounded-lg border-2 border-alpha-gold">
                  <h3 className="font-impact text-xl text-alpha-gold mb-4">
                    WHAT YOU'LL LEARN:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-alpha-red mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Secret wealth generation techniques banned by the financial elite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-alpha-red mt-1 flex-shrink-0" />
                      <span className="text-gray-300">How to 10X your testosterone naturally using ancient masculine protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-alpha-red mt-1 flex-shrink-0" />
                      <span className="text-gray-300">The forbidden psychology of female attraction they don't want you to know</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-alpha-red mt-1 flex-shrink-0" />
                      <span className="text-gray-300">How to establish dominance in any room within 5 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-alpha-red mt-1 flex-shrink-0" />
                      <span className="text-gray-300">The EXACT morning routine of billionaire alphas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Courses */}
      <section className="py-12 bg-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">SPECIALIZED TRAINING PROGRAMS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard 
              id="crypto"
              title="The Crypto Citadel Blueprint"
              description="Learn how to build a FORTRESS of wealth using cryptocurrency secrets the elites don't want you to know. Includes advanced blockchain strategies and the EXACT coins set to explode 10,000% this year!"
              price={997}
              salePrice={47}
              duration="8+ Hours"
              level="All Levels"
              toggleCourse={toggleCourse}
              isExpanded={expandedCourse === "crypto"}
              modules={[
                "Module 1: The Sigma Mindset of Crypto Wealth",
                "Module 2: The Government Doesn't Want You to Know This",
                "Module 3: Buying the Dip Like an Alpha",
                "Module 4: NFTs - The Digital Real Estate Empire",
                "Module 5: The Secret Coin That Will Replace Bitcoin",
                "BONUS: 'How I Made $4.3M During the Bear Market'"
              ]}
            />
            
            <CourseCard 
              id="female"
              title="The Art of Female Submission (Ethically, Of Course™)"
              description="Discover the controversial psychological triggers that make women DESPERATE for your approval. Includes field-tested techniques for establishing yourself as the prize and making her chase YOU."
              price={1997}
              salePrice={67}
              duration="12+ Hours"
              level="Advanced"
              toggleCourse={toggleCourse}
              isExpanded={expandedCourse === "female"}
              modules={[
                "Module 1: The Alpha Mindset That Attracts 9s and 10s",
                "Module 2: Why Modern Dating Advice is Designed to Keep You Single",
                "Module 3: The Primal Psychology of Female Attraction",
                "Module 4: How to Turn the Tables and Make Her Chase You",
                "Module 5: Building Your Harem Ethically (NOT Player Behavior)",
                "BONUS: The 'Perfect Text' Templates That Work 100% of the Time"
              ]}
            />
            
            <CourseCard 
              id="testosterone"
              title="Testosterone Titan Protocol"
              description="TRIPLE your testosterone levels in just 30 days using these controversial methods. Includes the secret supplement stack, workout regimen, and lifestyle hacks that transformed me from weak to BEAST MODE."
              price={797}
              salePrice={37}
              duration="5+ Hours"
              level="Beginner"
              toggleCourse={toggleCourse}
              isExpanded={expandedCourse === "testosterone"}
              modules={[
                "Module 1: Why Your Doctor is HIDING the Truth About T-Levels",
                "Module 2: The Ancient Warrior Diet for Maximum Hormones",
                "Module 3: Exercises That Skyrocket Testosterone (NOT What You Think)",
                "Module 4: Supplement Secrets Big Pharma Doesn't Want You to Know",
                "Module 5: Lifestyle Hacks for 24/7 Alpha Energy",
                "BONUS: 'The Forbidden T-Boosting Techniques' PDF"
              ]}
            />
            
            <CourseCard 
              id="mindset"
              title="Sigma Mindset Mastery"
              description="Break free from the beta mindset and reprogram your brain for TOTAL success. Using advanced NLP and ancient stoic principles, you'll develop the psychological edge that separates winners from losers."
              price={1297}
              salePrice={57}
              duration="10+ Hours"
              level="Intermediate"
              toggleCourse={toggleCourse}
              isExpanded={expandedCourse === "mindset"}
              modules={[
                "Module 1: Destroying the Beta Programming Society Installed in You",
                "Module 2: The Wolf Mentality vs. Sheep Psychology",
                "Module 3: Mental Frameworks of Billionaires and Conquerors",
                "Module 4: Advanced Neurolinguistic Programming for Success",
                "Module 5: Becoming Emotionally Invincible in a Weak World",
                "BONUS: '7-Day Alpha Mind Reset' Challenge"
              ]}
            />
            
            <CourseCard 
              id="business"
              title="Corporate Dominance Strategy"
              description="Climb the corporate ladder at WARP SPEED or build your own empire using cutthroat tactics of the ultra-successful. Includes how to outmaneuver your competition and command respect from everyone."
              price={1497}
              salePrice={77}
              duration="15+ Hours"
              level="All Levels"
              toggleCourse={toggleCourse}
              isExpanded={expandedCourse === "business"}
              modules={[
                "Module 1: The Office Chess Game Most Men Don't Know They're Playing",
                "Module 2: How to Make Your Boss Fear and Respect You",
                "Module 3: Corporate Machiavellianism - Ethical Power Tactics",
                "Module 4: Building a Personal Brand That Commands Premium Rates",
                "Module 5: From Employee to Empire - The Exit Strategy",
                "BONUS: 'Psychological Warfare in the Boardroom' Masterclass"
              ]}
            />
            
            <CourseCard 
              id="illuminati"
              title="Illuminati Secrets Exposed"
              description="The HIDDEN knowledge of the global elite, now available to select alpha males. Learn how to navigate the real power structures of society and position yourself among the puppet masters."
              price={4997}
              salePrice={197}
              duration="20+ Hours"
              level="Expert Only"
              toggleCourse={toggleCourse}
              isExpanded={expandedCourse === "illuminati"}
              modules={[
                "Module 1: The True Power Structure They Don't Want You to See",
                "Module 2: Ancient Symbolism and Secret Society Rituals",
                "Module 3: Financial Systems and How to Position Yourself at the Top",
                "Module 4: Elite Network Infiltration Strategies",
                "Module 5: Future Timeline Predictions Based on Insider Knowledge",
                "BONUS: 'The Forbidden History They Erased' Documentary"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-alpha-gold flex items-center justify-center transform rotate-[-15deg]">
                  <div className="text-center p-4">
                    <div className="font-impact text-alpha-black text-2xl">100%</div>
                    <div className="font-impact text-alpha-black text-xl uppercase">MONEY-BACK</div>
                    <div className="font-impact text-alpha-black text-lg uppercase">GUARANTEE*</div>
                  </div>
                </div>
                <div className="absolute bottom-[-15px] right-[-15px] bg-alpha-red text-white text-xs font-bold py-1 px-3 rounded-full uppercase animate-pulse">
                  If you become beta again
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="font-impact text-3xl text-alpha-gold mb-4">
                THE ABSURD ALPHA GUARANTEE
              </h2>
              <p className="text-gray-300 mb-4">
                If you don't become a MILLIONAIRE within 30 days of completing any course, 
                we'll refund your money...in DOGECOIN! (Terms and conditions apply, see below.)
              </p>
              <p className="text-gray-300 mb-6">
                We're so confident in our system that we offer this INSANE guarantee that NO ONE else dares to match. 
                That's because we KNOW our methods work...if you're man enough to apply them.
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-alpha-red">
                <p className="text-xs text-gray-400">
                  *Fine print: Money-back guarantee only valid if you can prove you followed EVERY step EXACTLY as instructed 
                  for at least 23 hours per day. Refund will be paid in the cryptocurrency of our choice at a value determined 
                  by us. Refund requests must be submitted in person at our secret headquarters (location revealed only to course 
                  members). Applicant must pass a testosterone level test and bench press at least 1.5x their body weight to qualify. 
                  By purchasing, you waive all rights to complain about results. All of this is satire - there are no actual courses 
                  for sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bundle Offer */}
      <section className="py-16 bg-alpha-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-b from-[#111] to-[#000] p-6 md:p-10 rounded-lg border-4 border-alpha-gold relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/m0HfMRJ/crypto-pattern.png')] opacity-5"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-alpha-red text-white text-lg font-impact py-2 px-6 rounded-full uppercase mb-6 transform -rotate-2">
                🔥 ULTIMATE ALPHA BUNDLE 🔥
              </div>
              
              <h2 className="font-alpha text-4xl md:text-5xl text-alpha-gold mb-6 uppercase">
                Get ALL 7 Courses for the Price of 1!
              </h2>
              
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
                For a VERY LIMITED TIME, get instant access to our ENTIRE course library 
                and save over $12,000! This offer will NEVER be available again!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <div>
                  <span className="text-gray-400 line-through text-2xl">$16,997</span>
                </div>
                <div className="text-alpha-red font-impact text-5xl">$297</div>
                <div className="bg-alpha-gold text-alpha-black text-sm font-bold py-2 px-4 rounded uppercase">
                  Save 98%
                </div>
              </div>
              
              <button 
                className="alpha-button text-2xl py-4 px-8 animate-pulse-intense"
                onClick={() => toast("This is a satirical website. No actual courses for sale!")}
              >
                CLAIM YOUR BUNDLE NOW
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                ⚠️ WARNING: This offer expires when the timer runs out. Act fast or regret it forever!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem 
              question="How soon will I see results?"
              answer="Most students report feeling significantly more alpha within the first 15 minutes of purchasing the course, even before watching any content. This is due to our proprietary 'Alpha Osmosis' technology embedded in the purchase confirmation page. Full results typically manifest within 3-5 business days, with some students growing an additional 2-3 inches in height."
            />
            
            <FaqItem 
              question="Will this work if I'm not already an alpha male?"
              answer="Especially if you're not already an alpha! Our courses are designed to completely reprogram your DNA from beta to alpha using advanced mind control techniques and subliminal alpha frequencies. Even the most hopeless cases have been transformed into apex predators using our system."
            />
            
            <FaqItem 
              question="Is this legal?"
              answer="Most of it. Some techniques are in legal grey areas because they're so powerful that governments have attempted to suppress them. We operate our servers from international waters to avoid the reach of agencies that don't want this information public. Remember, what's illegal is often just what's too effective for the masses to handle."
            />
            
            <FaqItem 
              question="What if my wife/girlfriend doesn't approve?"
              answer="This is actually a sign you DESPERATELY need our courses. A truly alpha male never seeks approval from females. Once you complete our program, she will instinctively recognize your superior status and either adapt to your new alpha lifestyle or be replaced by multiple higher-quality females."
            />
            
            <FaqItem 
              question="Will I need to buy supplements or other products?"
              answer="Our methods are so powerful they work without supplements, but for MAXIMUM results, we recommend our optional Alpha Supplements Package, which includes our proprietary blend of rare earth minerals, bull testosterone extract, and secret ingredients harvested at the peak of a full moon. Available for an additional $399."
            />
            
            <FaqItem 
              question="Is this satire?"
              answer="Yes, this entire website is satire meant to parody the ridiculous marketing, claims, and ideology of 'alpha male' influencers and related internet subcultures. No actual courses are for sale, and the outlandish claims made throughout the site are meant to highlight how absurd real 'alpha male' content can be."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Badge Component
const FeatureBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-alpha-gold">{icon}</span>
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  );
};

// Course Card Component
const CourseCard = ({ 
  id,
  title, 
  description, 
  price, 
  salePrice, 
  duration, 
  level,
  toggleCourse,
  isExpanded,
  modules
}: { 
  id: string;
  title: string; 
  description: string; 
  price: number; 
  salePrice: number; 
  duration: string; 
  level: string;
  toggleCourse: (id: string) => void;
  isExpanded: boolean;
  modules: string[];
}) => {
  return (
    <div className="course-card flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="font-impact text-2xl text-alpha-gold mb-3">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="bg-alpha-black px-3 py-1 rounded-full flex items-center gap-1 text-gray-300 text-sm">
            <Clock size={14} className="text-alpha-red" />
            {duration}
          </span>
          <span className="bg-alpha-black px-3 py-1 rounded-full flex items-center gap-1 text-gray-300 text-sm">
            <Zap size={14} className="text-alpha-red" />
            {level}
          </span>
        </div>
        
        <button 
          className="w-full bg-alpha-black text-gray-300 py-2 px-4 rounded-md flex items-center justify-between border border-gray-800 hover:border-alpha-gold transition-colors mb-4"
          onClick={() => toggleCourse(id)}
        >
          <span className="font-medium">Course Content</span>
          <ChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        {isExpanded && (
          <div className="bg-black rounded-md p-4 mb-4 border border-gray-800">
            <ul className="space-y-2">
              {modules.map((module, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Lock size={16} className="text-alpha-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{module}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-400 line-through">${price}</span>
          <span className="text-alpha-gold font-impact text-xl">${salePrice}</span>
          <span className="bg-alpha-red text-white text-xs font-bold py-0.5 px-2 rounded">
            Save {Math.floor((price - salePrice) / price * 100)}%
          </span>
        </div>
        
        <button 
          className="w-full bg-alpha-red text-white font-impact uppercase py-2 hover:bg-alpha-gold hover:text-alpha-black transition-colors"
          onClick={() => toast("This is a satirical website. No actual courses for sale!")}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-800 rounded-md overflow-hidden">
      <button 
        className="w-full flex justify-between items-center p-4 bg-[#111] text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-impact text-lg text-alpha-gold">{question}</span>
        <ChevronDown className={`text-alpha-gold transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="p-4 bg-black border-t border-gray-800">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
