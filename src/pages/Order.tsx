import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, Coffee, Utensils, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-paper">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-primary">
            <ShoppingBag size={48} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-6">Order Online</h1>
          <p className="text-brand-ink/60 text-lg mb-12 max-w-2xl mx-auto">
            Freshly prepared and delivered to your doorstep, or ready for pickup at your nearest branch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link to="/menu" className="group bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-brand-ink/5">
              <div className="w-16 h-16 bg-brand-paper rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary group-hover:bg-brand-accent transition-colors">
                <Utensils size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Delivery</h3>
              <p className="text-brand-ink/50 text-sm mb-8">Get your favorite meals delivered in under 45 minutes.</p>
              <span className="btn-primary inline-block w-full">Start Delivery Order</span>
            </Link>

            <Link to="/menu" className="group bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-brand-ink/5">
              <div className="w-16 h-16 bg-brand-paper rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary group-hover:bg-brand-accent transition-colors">
                <Coffee size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Pickup</h3>
              <p className="text-brand-ink/50 text-sm mb-8">Order ahead and skip the queue at any of our branches.</p>
              <span className="btn-secondary inline-block w-full">Start Pickup Order</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Top Rated Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
