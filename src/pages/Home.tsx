import { motion } from "motion/react";
import { ArrowRight, Coffee, Utensils, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../constants";

const Hero = () => (
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
        alt="Artcaffe Atmosphere" 
        className="w-full h-full object-cover brightness-50"
        referrerPolicy="no-referrer"
      />
    </div>
    
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="uppercase tracking-[0.3em] text-sm font-bold text-brand-accent mb-4 block">Est. 2008 • Nairobi</span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
          The Art of <br /> <span className="italic text-brand-accent">Living & Dining</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the finest coffee, freshly baked pastries, and a vibrant social atmosphere in the heart of Kenya.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/order" className="btn-primary w-full sm:w-auto px-10 py-4 text-lg bg-brand-accent text-brand-primary hover:bg-white">
            Order Online
          </Link>
          <Link to="/reserve" className="btn-secondary w-full sm:w-auto px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-brand-primary">
            Reserve a Table
          </Link>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
      <ArrowRight className="rotate-90" />
    </div>
  </section>
);

const FeaturedMenu = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Our Signature Selection</h2>
          <p className="text-brand-ink/60 max-w-md">Handcrafted with passion, from our roastery to your cup.</p>
        </div>
        <Link to="/menu" className="group flex items-center gap-2 text-brand-primary font-bold border-b-2 border-brand-primary pb-1">
          View Full Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MENU_ITEMS.slice(0, 3).map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary">
                KES {item.price}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{item.name}</h3>
            <p className="text-brand-ink/60 text-sm line-clamp-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const LoyaltyTeaser = () => (
  <section className="py-24 px-6 bg-brand-primary text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 -skew-x-12 translate-x-1/2" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Artcaffe Rewards</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Join the Circle of <br /> <span className="italic text-brand-accent">Extraordinary</span></h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Earn points on every purchase, enjoy exclusive birthday rewards, and get early access to our seasonal menu refreshes.
        </p>
        <div className="space-y-4 mb-10">
          {[
            { icon: <Star size={18} />, text: "Earn 1 point for every KES 100 spent" },
            { icon: <Coffee size={18} />, text: "Free coffee for every 100 points" },
            { icon: <Clock size={18} />, text: "Skip the queue with priority ordering" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium">
              <div className="text-brand-accent">{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>
        <Link to="/loyalty" className="btn-primary bg-brand-accent text-brand-primary hover:bg-white inline-block">
          Join Loyalty Program
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000" 
            alt="Loyalty App" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl max-w-[240px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary">
              <Star fill="currentColor" size={20} />
            </div>
            <div>
              <p className="text-xs text-brand-ink/50 uppercase font-bold tracking-tighter">Your Balance</p>
              <p className="text-xl font-bold text-brand-primary">1,250 PTS</p>
            </div>
          </div>
          <p className="text-[10px] text-brand-ink/70">You're only 250 points away from a free meal!</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <FeaturedMenu />
      <LoyaltyTeaser />
      
      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">What Our Community Says</h2>
            <p className="text-brand-ink/50 italic">The heart of Nairobi beats at Artcaffe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Digital Nomad", text: "The perfect workspace. Fast Wi-Fi, incredible coffee, and the best almond croissants in town." },
              { name: "David M.", role: "Food Critic", text: "Artcaffe consistently delivers quality. Their attention to detail in every cup is unmatched." },
              { name: "Elena K.", role: "Artist", text: "A vibrant atmosphere that inspires creativity. I've spent many afternoons sketching here." }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-paper border border-brand-ink/5 italic text-brand-ink/70">
                <p className="mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 bg-brand-accent rounded-full" />
                  <div>
                    <p className="font-bold text-brand-primary text-sm">{t.name}</p>
                    <p className="text-[10px] uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-24 px-6 bg-brand-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
              alt="Reserve" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-bold mb-2">Reserve a Table</h3>
              <p className="text-white/80 mb-6">Plan your next meeting or social gathering with us.</p>
              <Link to="/reserve" className="flex items-center gap-2 font-bold text-brand-accent">
                Book Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
              alt="Locations" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-bold mb-2">Find Us Nearby</h3>
              <p className="text-white/80 mb-6">Over 30 locations across Nairobi and beyond.</p>
              <Link to="/locations" className="flex items-center gap-2 font-bold text-brand-accent">
                View Locations <MapPin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
