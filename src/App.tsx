
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
  "🔥 LIMITED TIME OFFER: Buy one course, get zero free! 🔥",
  "⚠️ WARNING: Your testosterone levels are critically LOW! Click to BOOST NOW!",
  "🚨 The Deep State doesn't want you to know these SECRETS!",
  "💪 Is your masculinity being threatened? Take our FREE quiz!",
  "💰 Crypto Masters are making MILLIONS while you sleep! Join NOW!",
  "🧠 Unlock your SIGMA MINDSET or stay a BETA forever!",
  "🥩 Are you eating enough RAW MEAT? Your ancestors are DISAPPOINTED!",
  "⏰ HURRY! This offer EXPIRES in 5... 4... 3...",
  "🐺 Join the WOLF PACK or remain a SHEEP! Your choice!",
  "🧊 Take the ICE BATH CHALLENGE! Weak men can't handle it!",
];

const App = () => {
  const [hasShownDisclaimer, setHasShownDisclaimer] = useState(false);

  useEffect(() => {
    // Show disclaimer toast
    if (!hasShownDisclaimer) {
      toast("⚠️ SATIRE DISCLAIMER", {
        description: "This website is SATIRE. It parodies alpha/sigma male influencer culture and related ideologies. None of this is real advice.",
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
          onClick: () => toast("🎣 Gotcha! That was a parody popup. No actual offers here."),
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
