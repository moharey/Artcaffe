import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "motion/react";
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle2 } from "lucide-react";
import { LOCATIONS } from "../constants";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "../lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone number required"),
  location: z.string().min(1, "Please select a location"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Reserve() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    toast.success("Reservation confirmed!");
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-[80vh] flex items-center justify-center bg-brand-paper">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Table Reserved!</h2>
          <p className="text-brand-ink/60 mb-8">
            We've sent a confirmation email with your booking details. We look forward to seeing you!
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary w-full"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-paper">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
            Book Your <br /><span className="italic text-brand-accent text-4xl md:text-5xl">Artcaffe Experience</span>
          </h1>
          <p className="text-brand-ink/60 text-lg mb-10 leading-relaxed">
            Whether it's a business lunch, a romantic dinner, or a catch-up with friends, we'll make sure your table is ready.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-primary">Instant Confirmation</h4>
                <p className="text-sm text-brand-ink/50">Get your booking confirmed immediately via email and SMS.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-primary">Group Bookings</h4>
                <p className="text-sm text-brand-ink/50">Planning for more than 10? Contact our events team directly.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-ink/5"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/20" size={18} />
                  <input 
                    {...register("name")}
                    className={cn(
                      "w-full bg-brand-paper border border-brand-ink/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-colors",
                      errors.name && "border-red-500"
                    )}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-[10px] ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/20" size={18} />
                  <input 
                    {...register("phone")}
                    className={cn(
                      "w-full bg-brand-paper border border-brand-ink/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-colors",
                      errors.phone && "border-red-500"
                    )}
                    placeholder="+254 700..."
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-[10px] ml-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 ml-1">Select Location</label>
              <select 
                {...register("location")}
                className="w-full bg-brand-paper border border-brand-ink/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none"
              >
                <option value="">Choose a branch...</option>
                {LOCATIONS.map(loc => (
                  <option key={loc.id} value={loc.name}>{loc.name}</option>
                ))}
              </select>
              {errors.location && <p className="text-red-500 text-[10px] ml-1">{errors.location.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 ml-1">Date</label>
                <input 
                  type="date"
                  {...register("date")}
                  className="w-full bg-brand-paper border border-brand-ink/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 ml-1">Time</label>
                <input 
                  type="time"
                  {...register("time")}
                  className="w-full bg-brand-paper border border-brand-ink/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 ml-1">Guests</label>
                <select 
                  {...register("guests")}
                  className="w-full bg-brand-paper border border-brand-ink/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary transition-colors"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg disabled:opacity-50"
            >
              {isSubmitting ? "Confirming..." : "Confirm Reservation"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
