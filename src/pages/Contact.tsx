
import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    height: "",
    income: "",
    benchPress: "",
    favConspiracy: "",
    sigmaStatus: "unsure",
    termsAccepted: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required to determine your alpha potential";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required to send you endless promotional content";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email must be valid (we will verify it 27 times)";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required for 3 AM motivational calls";
    }
    
    if (!formData.bloodType) {
      newErrors.bloodType = "Blood type is essential for our database";
    }
    
    if (!formData.height) {
      newErrors.height = "Height is required to calculate your dominance ratio";
    }
    
    if (!formData.income) {
      newErrors.income = "Income is required to determine your wolf pack tier";
    }
    
    if (!formData.benchPress) {
      newErrors.benchPress = "Bench press stats are required for your alpha rating";
    }
    
    if (!formData.favConspiracy) {
      newErrors.favConspiracy = "This field is required for psychographic profiling";
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must surrender your digital soul to proceed";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast("Form Submission Satire", { 
        description: "This is a satirical form - no data has been collected. This entire website is parody!",
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        bloodType: "",
        height: "",
        income: "",
        benchPress: "",
        favConspiracy: "",
        sigmaStatus: "unsure",
        termsAccepted: false
      });
    } else {
      toast("Form Validation Failed", {
        description: "Please fix the errors to join our satirical movement.",
        duration: 3000
      });
    }
  };

  return (
    <div className="min-h-screen bg-alpha-black">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="alpha-headline mb-6">JOIN THE ELITE</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Apply now to become part of the exclusive Alpha Ascension brotherhood. 
            Only the top 0.01% of males will be accepted. Are you worthy?
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-alpha-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Disclaimer Banner */}
            <div className="bg-alpha-red/20 border border-alpha-red rounded-md p-4 mb-8 flex items-start gap-3">
              <AlertTriangle className="text-alpha-red flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-white mb-1">SATIRE DISCLAIMER</h3>
                <p className="text-gray-300 text-sm">
                  This form is completely satirical and parodies the invasive, absurd information 
                  often requested by "alpha male" programs. No actual data collection takes place, 
                  and this entire website is a parody. Feel free to fill it out for fun!
                </p>
              </div>
            </div>
            
            {/* Application Form */}
            <div className="bg-gradient-to-b from-[#111] to-[#000] rounded-lg p-6 md:p-8 shadow-lg border border-gray-800">
              <h2 className="font-impact text-2xl text-alpha-gold mb-6">ALPHA APPLICATION FORM</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="font-impact text-xl text-alpha-red mb-4">BASIC INFORMATION</h3>
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="name">
                      Full Legal Name <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.name ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="Your Alpha Name"
                    />
                    {errors.name && <p className="text-alpha-red text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="email">
                      Email Address <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.email ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="your.email@domain.com"
                    />
                    {errors.email && <p className="text-alpha-red text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="phone">
                      Phone Number <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.phone ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="text-alpha-red text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="bloodType">
                      Blood Type <span className="text-alpha-red">*</span>
                    </label>
                    <select 
                      id="bloodType"
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.bloodType ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                    >
                      <option value="">Select Blood Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="Alpha">Alpha (Super Rare)</option>
                    </select>
                    {errors.bloodType && <p className="text-alpha-red text-sm mt-1">{errors.bloodType}</p>}
                  </div>
                  
                  {/* Alpha Metrics */}
                  <div className="col-span-1 md:col-span-2 mt-4">
                    <h3 className="font-impact text-xl text-alpha-red mb-4">ALPHA METRICS</h3>
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="height">
                      Height (in feet and inches) <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="text"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.height ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="6'2&quot; (Don't lie, we can tell)"
                    />
                    {errors.height && <p className="text-alpha-red text-sm mt-1">{errors.height}</p>}
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="income">
                      Annual Income <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="text"
                      id="income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.income ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="$250,000+ preferred"
                    />
                    {errors.income && <p className="text-alpha-red text-sm mt-1">{errors.income}</p>}
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="benchPress">
                      Max Bench Press (in lbs) <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="text"
                      id="benchPress"
                      name="benchPress"
                      value={formData.benchPress}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.benchPress ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="315+ for automatic approval"
                    />
                    {errors.benchPress && <p className="text-alpha-red text-sm mt-1">{errors.benchPress}</p>}
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-white mb-2" htmlFor="favConspiracy">
                      Favorite Conspiracy Theory <span className="text-alpha-red">*</span>
                    </label>
                    <input 
                      type="text"
                      id="favConspiracy"
                      name="favConspiracy"
                      value={formData.favConspiracy}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.favConspiracy ? 'border-alpha-red' : 'border-gray-800'} rounded-md p-3 text-white focus:border-alpha-gold focus:outline-none`}
                      placeholder="e.g., Lizard People, Flat Earth, etc."
                    />
                    {errors.favConspiracy && <p className="text-alpha-red text-sm mt-1">{errors.favConspiracy}</p>}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-white mb-2">
                      Have you achieved inner Sigma status? <span className="text-alpha-red">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center text-gray-300">
                        <input 
                          type="radio"
                          name="sigmaStatus"
                          value="yes"
                          checked={formData.sigmaStatus === "yes"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Yes, I'm a lone wolf
                      </label>
                      <label className="flex items-center text-gray-300">
                        <input 
                          type="radio"
                          name="sigmaStatus"
                          value="no"
                          checked={formData.sigmaStatus === "no"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        No, still on the alpha path
                      </label>
                      <label className="flex items-center text-gray-300">
                        <input 
                          type="radio"
                          name="sigmaStatus"
                          value="unsure"
                          checked={formData.sigmaStatus === "unsure"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Not sure what that means
                      </label>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="col-span-1 md:col-span-2 mt-4">
                    <div className="bg-black border border-gray-800 rounded-md p-4 mb-4 h-40 overflow-y-auto text-gray-400 text-sm">
                      <p className="mb-2">By submitting this form, you agree to the following ridiculous terms:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Alpha Ascension has the right to use your personal information for any purpose, including but not limited to contacting you at 3 AM with motivational screaming.</li>
                        <li>You acknowledge that your current life is pathetic and only our overpriced courses can save you from eternal betadom.</li>
                        <li>You agree to worship Chad Sigmason as your personal guru and to defend his honor on social media against any criticism.</li>
                        <li>You must immediately cut ties with any friends or family members who question your new alpha lifestyle or suggest you've joined a cult.</li>
                        <li>You grant us permission to track your online activity to ensure you're not consuming any beta content like "relationship advice" or "emotional intelligence."</li>
                        <li>You agree to spend at least 30% of your income on our products and services without question.</li>
                        <li>You must begin every morning by looking in the mirror and saying "I am an apex predator" at least 50 times.</li>
                        <li>You acknowledge that this entire website is satire and that none of these terms are actually binding because this isn't a real service.</li>
                      </ol>
                    </div>
                    
                    <label className="flex items-start text-gray-300 gap-2">
                      <input 
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span>
                        I accept the ridiculous terms and conditions, and I understand this is a satire website mocking alpha male culture and not a real service.
                        <span className="text-alpha-red">*</span>
                      </span>
                    </label>
                    {errors.termsAccepted && <p className="text-alpha-red text-sm mt-1">{errors.termsAccepted}</p>}
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="mt-8">
                  <button 
                    type="submit"
                    className="alpha-button w-full py-4 text-xl"
                  >
                    SUBMIT APPLICATION
                  </button>
                  <p className="text-gray-500 text-xs mt-2 text-center">
                    * Required fields. Alpha status not guaranteed. Application approval based on arbitrary standards that change constantly.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">APPLICATION FAQ</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem 
              question="How selective is the application process?"
              answer="We reject 99.9% of applicants for arbitrary reasons like 'not enough wolf energy' or 'insufficient contempt for society.' The selection process involves a complex algorithm based on how much money we think we can extract from you."
            />
            
            <FaqItem 
              question="What benefits do I get if accepted?"
              answer="Accepted members receive a digital certificate of alphahood, access to our secret Telegram group where we share the same basic advice repackaged 50 different ways, and the ability to call yourself a 'certified alpha male' despite this certification having no value whatsoever."
            />
            
            <FaqItem 
              question="How long does application processing take?"
              answer="Applications are processed at the speed of masculine energy, which varies based on the lunar cycle and Bitcoin prices. Typically between 2 weeks and never. The longer we make you wait, the more you'll value our approval. That's psychology 101."
            />
            
            <FaqItem 
              question="Why do you need all this personal information?"
              answer="The more invasive questions we ask, the more committed you become to the application process. This is a common manipulation tactic used by cults and multi-level marketing schemes. Also, it's fun to make people fill out absurd forms for no reason."
            />
            
            <FaqItem 
              question="Is this application serious?"
              answer="No! This entire website is SATIRE designed to parody and mock the ridiculous world of 'alpha male' gurus, coaches, and influencers. No actual data is collected, no real services are offered, and the form exists purely as comedy."
            />
          </div>
        </div>
      </section>
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
        <svg 
          className={`text-alpha-gold transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L16 4H0L8 12Z" fill="currentColor" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-black border-t border-gray-800">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
