
import React, { useState, useEffect } from "react";
import { ShoppingCart, Check, X, Star, Package, CreditCard, Truck, Info } from "lucide-react";
import { toast } from "sonner";

const Merch = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [flashingSale, setFlashingSale] = useState(true);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  
  // Flash the sale banner
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setFlashingSale(prev => !prev);
    }, 500);
    
    return () => clearInterval(flashInterval);
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    
    toast(`Added "${product.title}" to cart!`, {
      description: "This is a satirical store. No actual products for sale!",
      action: {
        label: "View Cart",
        onClick: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  };
  
  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };
  
  // Update product quantity
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCart(cart.map(item => 
      item.product.id === productId
        ? { ...item, quantity }
        : item
    ));
  };
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.product.salePrice * item.quantity), 0);
  
  // Toggle product details
  const toggleProductDetails = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div className="bg-alpha-black min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="alpha-headline mb-6">GEAR UP FOR DOMINATION</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Elevate your alpha status with our EXCLUSIVE merchandise. Let the world know 
            you're a WOLF among SHEEP with our premium alpha gear.
          </p>
          
          {/* Sale Banner */}
          <div className={`bg-alpha-red inline-block py-2 px-6 rounded-md ${flashingSale ? 'text-white' : 'text-alpha-gold'}`}>
            <p className="font-impact text-xl uppercase">
              🔥 FLASH SALE! BUY 1 GET 0 FREE! 🔥
            </p>
          </div>
        </div>
      </section>
      
      {/* Shopping Cart (if items added) */}
      {cart.length > 0 && (
        <section className="py-8 bg-black sticky top-16 z-30 shadow-md">
          <div className="container mx-auto px-4">
            <div className="bg-[#111] border border-alpha-gold rounded-lg p-4">
              <h2 className="font-impact text-2xl text-alpha-gold mb-4 flex items-center">
                <ShoppingCart className="mr-2" />
                YOUR ALPHA CART ({cart.reduce((total, item) => total + item.quantity, 0)} items)
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full mb-4">
                  <thead className="border-b border-gray-800">
                    <tr>
                      <th className="text-left py-2 text-gray-400">Product</th>
                      <th className="text-center py-2 text-gray-400">Price</th>
                      <th className="text-center py-2 text-gray-400">Quantity</th>
                      <th className="text-center py-2 text-gray-400">Total</th>
                      <th className="text-right py-2 text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.product.id} className="border-b border-gray-800">
                        <td className="py-3 text-white flex items-center">
                          <img 
                            src={item.product.image} 
                            alt={item.product.title} 
                            className="w-12 h-12 object-cover mr-3"
                          />
                          <span>{item.product.title}</span>
                        </td>
                        <td className="py-3 text-alpha-gold text-center">
                          ${item.product.salePrice.toFixed(2)}
                        </td>
                        <td className="py-3 text-center">
                          <div className="flex items-center justify-center">
                            <button 
                              className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center text-white">
                              {item.quantity}
                            </span>
                            <button 
                              className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-3 text-alpha-gold text-center">
                          ${(item.product.salePrice * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-3 text-right">
                          <button 
                            className="text-alpha-red hover:text-red-700 transition-colors"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <X size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                  <div className="text-xl text-white">
                    Total: <span className="font-impact text-alpha-gold">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className="bg-gray-800 text-white py-2 px-4 hover:bg-gray-700 transition-colors"
                    onClick={() => setCart([])}
                  >
                    Clear Cart
                  </button>
                  <button 
                    className="alpha-button"
                    onClick={() => toast("This is a satirical store. No actual checkout process!")}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Products Grid */}
      <section className="py-12 bg-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">ALPHA ESSENTIALS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                addToCart={addToCart}
                isExpanded={expandedProduct === product.id}
                toggleDetails={() => toggleProductDetails(product.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-alpha-black via-[#222] to-alpha-black">
        <div className="container mx-auto px-4">
          <h2 className="alpha-headline text-center mb-12">
            WHAT OUR ALPHA CUSTOMERS ARE SAYING
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Ever since I started wearing my 'Alpha AF' shirt, women can't keep their eyes off me. I've had to install a security system to keep them off my property!"
              name="Brad C."
              location="Texas"
              rating={5}
            />
            <TestimonialCard 
              quote="The testosterone booster didn't just increase my T-levels, it actually made me grow 2 inches taller at age 42! Scientists are baffled!"
              name="Mike S."
              location="Florida"
              rating={5}
            />
            <TestimonialCard 
              quote="My crypto wallet sat empty for months, but as soon as I put on the Wolf Pack pendant, I somehow made $50,000 overnight! It's like it has magical properties!"
              name="Jason W."
              location="California"
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* Shipping Info */}
      <section className="py-12 bg-alpha-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111] p-6 rounded-lg flex flex-col items-center text-center">
              <Package size={48} className="text-alpha-gold mb-4" />
              <h3 className="font-impact text-xl text-alpha-red mb-2">DISCREET PACKAGING</h3>
              <p className="text-gray-300">
                We ship all items in plain packaging so no one knows you're compensating for something.
              </p>
            </div>
            
            <div className="bg-[#111] p-6 rounded-lg flex flex-col items-center text-center">
              <CreditCard size={48} className="text-alpha-gold mb-4" />
              <h3 className="font-impact text-xl text-alpha-red mb-2">SECURE PAYMENT</h3>
              <p className="text-gray-300">
                We accept credit cards, cryptocurrency, and direct transfers of your masculinity.
              </p>
            </div>
            
            <div className="bg-[#111] p-6 rounded-lg flex flex-col items-center text-center">
              <Truck size={48} className="text-alpha-gold mb-4" />
              <h3 className="font-impact text-xl text-alpha-red mb-2">FAST SHIPPING</h3>
              <p className="text-gray-300">
                Orders ship within 30 business days, because real alphas practice patience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-alpha-black">
        <div className="container mx-auto px-4">
          <div className="bg-alpha-red/20 border border-alpha-red rounded-md p-4 flex items-start gap-3">
            <Info className="text-alpha-red flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-bold text-white mb-1">SATIRE DISCLAIMER</h3>
              <p className="text-gray-300 text-sm">
                This entire store is satire. None of these products are real or for sale. The product descriptions 
                parody the types of merchandise and marketing commonly found on "alpha male" websites. The outlandish claims 
                made about product benefits are intentionally absurd and not meant to be taken seriously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ 
  product, 
  addToCart, 
  isExpanded,
  toggleDetails 
}: { 
  product: Product; 
  addToCart: (product: Product) => void;
  isExpanded: boolean;
  toggleDetails: () => void;
}) => {
  return (
    <div className="bg-gradient-to-b from-[#111] to-[#000] rounded-lg overflow-hidden border border-gray-800 hover:border-alpha-red transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        {product.bestSeller && (
          <div className="absolute top-3 left-3 bg-alpha-gold text-alpha-black text-xs font-bold py-1 px-3 rounded-full uppercase">
            Best Seller
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-alpha-red text-white text-xs font-bold py-1 px-3 rounded-full">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-impact text-xl text-alpha-red mb-2">{product.title}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < product.rating ? "text-alpha-gold fill-alpha-gold" : "text-gray-600"}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
        </div>
        
        <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
        
        <button 
          className="text-alpha-gold hover:text-alpha-red transition-colors text-sm font-medium flex items-center mb-4"
          onClick={toggleDetails}
        >
          {isExpanded ? "Less Details" : "More Details"}
          <svg 
            className={`ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 8L10 4H2L6 8Z" fill="currentColor" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="mb-4 bg-black p-3 rounded-md border border-gray-800">
            <h4 className="font-bold text-white mb-2">ALPHA BENEFITS:</h4>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={16} className="text-alpha-red mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {product.originalPrice > product.salePrice && (
              <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-alpha-gold font-impact text-xl">${product.salePrice.toFixed(2)}</span>
          </div>
          
          <button 
            className="bg-alpha-red text-white py-2 px-4 rounded-sm font-medium hover:bg-alpha-gold hover:text-alpha-black transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, name, location, rating }: { 
  quote: string; 
  name: string; 
  location: string;
  rating: number;
}) => {
  return (
    <div className="bg-gradient-to-b from-[#111] to-[#000] p-6 rounded-lg border border-gray-800">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-alpha-gold fill-alpha-gold" : "text-gray-600"}
          />
        ))}
      </div>
      
      <p className="text-gray-300 italic mb-4">"{quote}"</p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-alpha-red">{name}</h4>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
        <div className="bg-alpha-gold h-8 w-8 rounded-full flex items-center justify-center font-bold text-alpha-black">
          {name.charAt(0)}
        </div>
      </div>
    </div>
  );
};

// Types
interface Product {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  rating: number;
  reviews: number;
  bestSeller: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Product Data
const products: Product[] = [
  {
    id: "alpha-tshirt",
    title: "ALPHA AF T-Shirt",
    description: "Let everyone know you're at the top of the social hierarchy with this subtle, tasteful shirt that screams 'I'M THE ALPHA HERE!'",
    benefits: [
      "Increases testosterone by 15% just from wearing it",
      "Women will stare (whether in admiration or horror is unclear)",
      "Other men will instinctively yield to your dominance",
      "Made from cotton picked only by the strongest plants"
    ],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
    originalPrice: 39.99,
    salePrice: 29.99,
    discount: 25,
    rating: 5,
    reviews: 142,
    bestSeller: true
  },
  {
    id: "wolf-pendant",
    title: "Wolf Pack Pendant",
    description: "This masculine necklace signals to other apex predators that you're part of the elite wolf pack. Howling at the moon optional but encouraged.",
    benefits: [
      "Made from 'authentic' wolf teeth (actually plastic)",
      "Glows red at night when beta males are nearby",
      "Provides +10 charisma when negotiating with females",
      "Water-resistant for when you're hunting in the rain"
    ],
    image: "https://images.unsplash.com/photo-1618769122190-e53c29d45bd6?auto=format&fit=crop&w=600&q=80",
    originalPrice: 79.99,
    salePrice: 59.99,
    discount: 25,
    rating: 4,
    reviews: 89,
    bestSeller: false
  },
  {
    id: "testosterone-booster",
    title: "PRIMAL SURGE Testosterone Booster",
    description: "Our proprietary blend of herbs that sound masculine will definitely maybe possibly increase your T-levels! Contains actual bull hormones!*",
    benefits: [
      "Ingredients include: Aggressive Fern Extract, Caveman Dust, Lion's Ego",
      "May or may not work (results legally cannot be guaranteed)",
      "Bottle designed to make you feel inadequate if you don't buy it",
      "Contains trace amounts of glitter to make your insides sparkle"
    ],
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
    originalPrice: 89.99,
    salePrice: 69.99,
    discount: 22,
    rating: 4,
    reviews: 114,
    bestSeller: true
  },
  {
    id: "crypto-wallet",
    title: "HODL Alpha Crypto Wallet",
    description: "Protect your crypto investments with this ultra-secure wallet. Features unnecessary LED lights and can store up to 50 different scam tokens!",
    benefits: [
      "Military-grade encryption (according to us)",
      "Doubles as a backup personality",
      "Makes impressive beeping sounds when shown to women",
      "Comes pre-loaded with a worthless NFT of a cartoon gorilla"
    ],
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=600&q=80",
    originalPrice: 149.99,
    salePrice: 99.99,
    discount: 33,
    rating: 5,
    reviews: 78,
    bestSeller: false
  },
  {
    id: "sigma-journal",
    title: "Sigma Male Journal",
    description: "Document your alpha thoughts in this leather-bound journal. Each page reminds you that emotions are for betas (except anger, which is alpha).",
    benefits: [
      "Pages infused with essence of success (smells like cologne)",
      "Includes daily affirmations like 'I am better than everyone else'",
      "Secret back compartment for hiding your insecurities",
      "Will spontaneously burst into flames if you write about feelings"
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
    originalPrice: 49.99,
    salePrice: 39.99,
    discount: 20,
    rating: 5,
    reviews: 92,
    bestSeller: false
  },
  {
    id: "ice-bath",
    title: "FROST WOLF Portable Ice Bath",
    description: "Turn your bathroom into a torture chamber with our portable ice bath! Nothing says 'I'm masculine' like voluntary suffering for Instagram content!",
    benefits: [
      "Comes with timer to shame you if you get out too early",
      "Includes camera mount for documenting your suffering",
      "Cold enough to make you question your life choices",
      "Free 'Ice Bath Veteran' sticker to put on your car"
    ],
    image: "https://images.unsplash.com/photo-1584992236310-6ded1d34e648?auto=format&fit=crop&w=600&q=80",
    originalPrice: 299.99,
    salePrice: 249.99,
    discount: 17,
    rating: 4,
    reviews: 64,
    bestSeller: false
  },
  {
    id: "sovereignty-hat",
    title: "Sovereign Individual Hat",
    description: "This tactical cap shields you from government mind control waves while letting everyone know you've read exactly one libertarian book.",
    benefits: [
      "Protects against chemtrails and 5G surveillance",
      "Special weaving pattern aligns your chakras with Bitcoin",
      "Emits subtle pheromones that repel tax collectors",
      "Adjustable strap for growing your brain with alpha thoughts"
    ],
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80",
    originalPrice: 34.99,
    salePrice: 24.99,
    discount: 29,
    rating: 5,
    reviews: 103,
    bestSeller: false
  },
  {
    id: "book-manipulation",
    title: "The Art of Female Manipulation",
    description: "This book teaches you how to use psychological tactics to convince women you're not actually a deeply insecure man with no personality.",
    benefits: [
      "Written by a self-proclaimed expert who's been divorced 3 times",
      "Contains 101 negging techniques that will definitely backfire",
      "Paper treated with cologne to mask the scent of desperation",
      "Includes tear-out excuse cards for when you get rejected anyway"
    ],
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600&q=80",
    originalPrice: 59.99,
    salePrice: 49.99,
    discount: 17,
    rating: 4,
    reviews: 128,
    bestSeller: true
  },
  {
    id: "red-pill-dispenser",
    title: "Red Pill Vitamin Dispenser",
    description: "Take the red pill daily with this special vitamin case. Contains actual red pills that are just multivitamins with food coloring.",
    benefits: [
      "Pills shaped like tiny red flags for authenticity",
      "Dispenser plays Joe Rogan quotes when opened",
      "Vitamin blend optimized for keyboard warriors",
      "UV coating protects pills from exposure to reality"
    ],
    image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&w=600&q=80",
    originalPrice: 29.99,
    salePrice: 19.99,
    discount: 33,
    rating: 3,
    reviews: 57,
    bestSeller: false
  }
];

export default Merch;
