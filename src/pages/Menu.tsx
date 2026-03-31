import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ShoppingBag, Plus, Minus, X, Star } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "../constants";
import { cn } from "../lib/utils";
import { toast } from "sonner";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{item: MenuItem, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['All', 'Coffee', 'Bakery', 'Breakfast', 'Lunch', 'Dinner'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.item.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const cartTotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0);

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen bg-brand-paper">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-6">Our Menu</h1>
          <p className="text-brand-ink/60 max-w-2xl mx-auto">
            From our artisanal bakery to our world-class roastery, every item is crafted with the finest ingredients.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 sticky top-24 z-30 glass p-4 rounded-3xl shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat 
                    ? "bg-brand-primary text-white shadow-lg" 
                    : "bg-white text-brand-ink/60 hover:bg-brand-accent/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30" size={18} />
            <input 
              type="text" 
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-ink/10 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.dietary?.map(tag => (
                      <span key={tag} className="bg-brand-accent/90 backdrop-blur-sm text-brand-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-primary">{item.name}</h3>
                    <span className="font-bold text-brand-accent">KES {item.price}</span>
                  </div>
                  <p className="text-brand-ink/60 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full btn-primary py-3 flex items-center justify-center gap-2"
                  >
                    <Plus size={18} /> Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-ink/40 italic">No items found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Cart FAB */}
      {cart.length > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform"
        >
          <ShoppingBag size={24} />
          <span className="absolute -top-1 -right-1 bg-brand-accent text-brand-primary w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center">
            {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
          </span>
        </motion.button>
      )}

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-paper z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-brand-ink/10 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-primary">Your Order</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-brand-ink/40 hover:text-brand-ink">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.map(item => (
                  <div key={item.item.id} className="flex gap-4">
                    <img src={item.item.image} className="w-20 h-20 rounded-2xl object-cover" alt="" />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-brand-primary">{item.item.name}</h4>
                        <button onClick={() => removeFromCart(item.item.id)} className="text-brand-ink/30 hover:text-red-500">
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-brand-ink/50 mb-3">KES {item.item.price}</p>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.item.id, -1)}
                          className="w-8 h-8 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-accent/20"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.item.id, 1)}
                          className="w-8 h-8 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-accent/20"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white border-t border-brand-ink/10 space-y-4">
                {/* Upsell Suggestion */}
                {cart.length > 0 && !cart.some(i => i.item.category === 'Bakery') && (
                  <div className="bg-brand-accent/10 p-4 rounded-2xl border border-brand-accent/20 mb-4">
                    <p className="text-xs font-bold text-brand-primary mb-2 flex items-center gap-2">
                      <Star size={12} /> Pair your coffee with a treat?
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-brand-ink/60">Add an Almond Croissant</span>
                      <button 
                        onClick={() => addToCart(MENU_ITEMS.find(i => i.id === '2')!)}
                        className="text-[10px] font-bold text-brand-primary underline"
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>KES {cartTotal}</span>
                </div>
                <button className="w-full btn-primary py-4 text-lg">
                  Checkout Now
                </button>
                <p className="text-[10px] text-center text-brand-ink/40 uppercase tracking-widest">
                  Secure payment powered by iPay
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
