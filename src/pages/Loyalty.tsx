import { motion } from "motion/react";
import { Star, Gift, Coffee, Heart, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Loyalty() {
  return (
    <div className="pt-24 pb-24 bg-brand-paper min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block bg-brand-accent/20 text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Artcaffe Circle
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-8">
            Rewards for the <br /><span className="italic text-brand-accent">Art of Living</span>
          </h1>
          <p className="text-brand-ink/60 text-lg mb-10 leading-relaxed">
            Join Nairobi's most exclusive café loyalty program. Earn points, unlock tiers, and enjoy handcrafted rewards designed just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary px-12 py-4">Sign Up Now</button>
            <button className="btn-secondary px-12 py-4">Login to Account</button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Member Benefits</h2>
            <p className="text-brand-ink/50">The more you visit, the more we celebrate you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="text-brand-accent" size={32} />,
                title: "Earn Points",
                desc: "Get 1 point for every KES 100 spent on any purchase across all our branches."
              },
              {
                icon: <Gift className="text-brand-accent" size={32} />,
                title: "Birthday Treats",
                desc: "Celebrate your special day with a complimentary cake and coffee on us."
              },
              {
                icon: <Smartphone className="text-brand-accent" size={32} />,
                title: "App Exclusive",
                desc: "Order ahead, skip the queue, and track your rewards in real-time on our mobile app."
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-brand-paper rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-primary">{benefit.title}</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 px-6 bg-brand-paper overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Membership Tiers</h2>
            <p className="text-brand-ink/50">Unlock a world of premium experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Silver",
                points: "0 - 1,000",
                color: "bg-slate-100",
                benefits: ["Earn points", "Birthday treat", "App access"]
              },
              {
                name: "Gold",
                points: "1,001 - 5,000",
                color: "bg-yellow-50 border-2 border-brand-accent",
                featured: true,
                benefits: ["All Silver benefits", "10% off bakery items", "Free monthly coffee", "Priority seating"]
              },
              {
                name: "Platinum",
                points: "5,001+",
                color: "bg-brand-ink text-white",
                benefits: ["All Gold benefits", "Personal concierge", "Invitations to events", "Unlimited free coffee"]
              }
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-10 rounded-3xl flex flex-col h-full relative",
                  tier.color
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                <p className={cn("text-sm mb-8 font-medium", tier.name === "Platinum" ? "text-white/60" : "text-brand-ink/40")}>
                  {tier.points} Points
                </p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-brand-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-3 rounded-full font-bold transition-all",
                  tier.name === "Platinum" ? "bg-white text-brand-ink hover:bg-brand-accent" : "bg-brand-primary text-white hover:bg-brand-ink"
                )}>
                  Select {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-brand-primary rounded-[3rem] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 md:p-20 text-white space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Your Rewards, <br /> <span className="italic text-brand-accent text-3xl md:text-5xl">Always in Your Pocket</span></h2>
              <p className="text-white/70 text-lg">Download the Artcaffe app to manage your points, order ahead, and get exclusive mobile-only offers.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-accent transition-colors">
                  <Smartphone size={24} /> App Store
                </button>
                <button className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-accent transition-colors">
                  <Smartphone size={24} /> Play Store
                </button>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
                alt="App Interface" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
