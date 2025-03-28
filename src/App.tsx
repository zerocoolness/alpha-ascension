
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Founder from "./pages/Founder";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Popup messages for the satire site
const popupMessages = [
  "🔥 LIMITED TIME OFFER: Buy one course, get zero free! Only true alphas pay full price! 🔥",
  "⚠️ WARNING: Your testosterone levels are critically LOW! Unless you buy our products, you'll grow a man-bun by tomorrow!",
  "🚨 The Deep State doesn't want you to know these SECRETS because they're completely made up!",
  "💪 Is your masculinity being threatened? Our quiz will confirm it is, regardless of your answers!",
  "💰 Crypto Masters are making MILLIONS while you sleep! And by 'masters' we mean 'scammers'!",
  "🧠 Unlock your SIGMA MINDSET or remain a BETA forever! Side effects include: alienating friends and family!",
  "🥩 Are you eating enough RAW MEAT? Your ancestors are DISAPPOINTED! (And they had a 32-year life expectancy!)",
  "⏰ HURRY! This offer EXPIRES in 5... 4... 3... but will mysteriously reappear tomorrow!",
  "🐺 Join the WOLF PACK or remain a SHEEP! (Note: both are animals with minimal critical thinking skills!)",
  "🧊 Take the ICE BATH CHALLENGE! Weak men can't handle it, smart men use central heating!",
];

const App = () => {
  const [hasShownDisclaimer, setHasShownDisclaimer] = useState(false);

  useEffect(() => {
    // Show disclaimer toast
    if (!hasShownDisclaimer) {
      toast("⚠️ FOR PEOPLE WITH BRAINS", {
        description: "This website is SATIRE, you absolute potato. If you're taking ANY of this seriously, you might be the exact incel we're making fun of. Seek help immediately.",
        duration: 8000,
      });
      setHasShownDisclaimer(true);
    }

    // Set random popup interval
    const popupInterval = setInterval(() => {
      const randomMessage = popupMessages[Math.floor(Math.random() * popupMessages.length)];
      toast(randomMessage, { 
        duration: 6000, 
        position: Math.random() > 0.5 ? "top-right" : "bottom-left",
        action: {
          label: "CLAIM NOW!",
          onClick: () => toast("🎣 Gotcha! What kind of beta actually clicks on popups? This is why you can't get dates."),
        },
      });
    }, 45000); // Show a popup every 45 seconds

    return () => clearInterval(popupInterval);
  }, [hasShownDisclaimer]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" closeButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
