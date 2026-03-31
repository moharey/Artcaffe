import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation, ExternalLink, Search } from "lucide-react";
import { LOCATIONS } from "../constants";
import { useState } from "react";

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = LOCATIONS.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-6">Find an Artcaffe</h1>
          <p className="text-brand-ink/60 max-w-2xl mx-auto">
            With over 30 locations across the city, your favorite coffee and bakery are never far away.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-ink/30" size={20} />
          <input 
            type="text" 
            placeholder="Search by neighborhood or mall..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-brand-ink/10 rounded-full py-5 pl-16 pr-6 shadow-xl focus:outline-none focus:border-brand-primary transition-all text-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List */}
          <div className="lg:col-span-1 space-y-6 max-h-[70vh] overflow-y-auto pr-4 no-scrollbar">
            {filteredLocations.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-brand-accent group"
              >
                <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{loc.name}</h3>
                <div className="space-y-3 text-sm text-brand-ink/60">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-brand-accent" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-brand-accent" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="shrink-0 text-brand-accent" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 btn-primary py-2 text-xs flex items-center justify-center gap-2">
                    <Navigation size={14} /> Directions
                  </button>
                  <button className="flex-1 btn-secondary py-2 text-xs flex items-center justify-center gap-2">
                    <ExternalLink size={14} /> Details
                  </button>
                </div>
              </motion.div>
            ))}
            {filteredLocations.length === 0 && (
              <div className="text-center py-10 text-brand-ink/40 italic">
                No locations found.
              </div>
            )}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 h-[70vh] bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-inner border-8 border-white">
            <div className="absolute inset-0 flex items-center justify-center bg-brand-accent/10">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg text-brand-primary animate-pulse">
                  <MapPin size={40} />
                </div>
                <p className="font-bold text-brand-primary uppercase tracking-widest text-xs">Interactive Map Loading...</p>
                <p className="text-brand-ink/40 text-sm max-w-xs mx-auto">In a production environment, this would integrate with Google Maps API.</p>
              </div>
            </div>
            
            {/* Mock Map Pins */}
            {filteredLocations.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="absolute w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-125 transition-transform"
                style={{ 
                  top: `${30 + (idx * 15)}%`, 
                  left: `${20 + (idx * 25)}%` 
                }}
              >
                <MapPin size={16} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
