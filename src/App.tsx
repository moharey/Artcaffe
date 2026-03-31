import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu as MenuIcon, X, Coffee, MapPin, User, Calendar, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Toaster } from "sonner";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Loyalty from "./pages/Loyalty";
import Locations from "./pages/Locations";
import Reserve from "./pages/Reserve";
import Order from "./pages/Order";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "Locations", path: "/locations" },
    { name: "Loyalty", path: "/loyalty" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Coffee size={20} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-brand-primary">ARTCAFFE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-accent",
                location.pathname === link.path ? "text-brand-primary border-b-2 border-brand-primary" : "text-brand-ink/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Link to="/reserve" className="btn-secondary py-2 px-5 text-sm">
              Reserve Table
            </Link>
            <Link to="/order" className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
              <ShoppingBag size={16} />
              Order Online
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-ink border-b border-brand-ink/10 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/reserve" onClick={() => setIsMobileMenuOpen(false)} className="btn-secondary text-center">
              Reserve Table
            </Link>
            <Link to="/order" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center flex items-center justify-center gap-2">
              <ShoppingBag size={18} />
              Order Online
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-brand-primary text-white pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold italic">Artcaffe</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Nairobi's favorite spot for coffee, bakery, and social dining. Experience the art of living.
        </p>
        <div className="flex gap-4">
          <Instagram className="hover:text-brand-accent cursor-pointer transition-colors" size={20} />
          <Facebook className="hover:text-brand-accent cursor-pointer transition-colors" size={20} />
          <Twitter className="hover:text-brand-accent cursor-pointer transition-colors" size={20} />
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">Quick Links</h4>
        <ul className="space-y-4 text-sm text-white/70">
          <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
          <li><Link to="/locations" className="hover:text-white transition-colors">Locations</Link></li>
          <li><Link to="/loyalty" className="hover:text-white transition-colors">Loyalty Program</Link></li>
          <li><Link to="/reserve" className="hover:text-white transition-colors">Reservations</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">Contact Us</h4>
        <ul className="space-y-4 text-sm text-white/70">
          <li className="flex items-center gap-2"><Phone size={14} /> +254 700 000 000</li>
          <li className="flex items-center gap-2"><MapPin size={14} /> Head Office, Nairobi, Kenya</li>
          <li className="flex items-center gap-2"><User size={14} /> careers@artcaffe.co.ke</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">Newsletter</h4>
        <p className="text-sm text-white/70 mb-4">Join our community for weekly offers and coffee culture.</p>
        <form className="flex gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm flex-1 focus:outline-none focus:border-brand-accent"
          />
          <button className="bg-brand-accent text-brand-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors">
            Join
          </button>
        </form>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
      <p>&copy; 2026 Artcaffe Coffee & Bakery. All rights reserved.</p>
      <div className="flex gap-6">
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}
