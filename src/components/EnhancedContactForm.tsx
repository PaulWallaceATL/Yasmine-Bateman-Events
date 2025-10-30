'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-sage/10 border border-sage text-sage px-6 py-4 rounded"
        >
          <p className="font-sans text-sm">
            Thank you for your inquiry! We'll be in touch within 24 hours.
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            First Name *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className={cn(
              "w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 transition-all",
              errors.firstName ? "ring-2 ring-red-500" : "focus:ring-sage"
            )}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Last Name *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className={cn(
              "w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 transition-all",
              errors.lastName ? "ring-2 ring-red-500" : "focus:ring-sage"
            )}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={cn(
              "w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 transition-all",
              errors.email ? "ring-2 ring-red-500" : "focus:ring-sage"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sage transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Event Type *
          </label>
          <select
            {...register('eventType')}
            id="eventType"
            className={cn(
              "w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 transition-all",
              errors.eventType ? "ring-2 ring-red-500" : "focus:ring-sage"
            )}
          >
            <option value="">Select an option</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="social">Social Celebration</option>
            <option value="other">Other</option>
          </select>
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-500">{errors.eventType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Preferred Event Date
          </label>
          <input
            {...register('eventDate')}
            type="date"
            id="eventDate"
            className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sage transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="guestCount" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Estimated Guest Count
          </label>
          <input
            {...register('guestCount')}
            type="number"
            id="guestCount"
            className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sage transition-all"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Estimated Budget
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-sage transition-all"
          >
            <option value="">Select a range</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-250k">$100,000 - $250,000</option>
            <option value="250k+">$250,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
          Tell Us About Your Vision *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className={cn(
            "w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 resize-none transition-all",
            errors.message ? "ring-2 ring-red-500" : "focus:ring-sage"
          )}
          placeholder="Share your ideas, preferences, and any specific requirements..."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={cn(
          "w-full py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2",
          isSubmitting 
            ? "bg-charcoal/50 text-white cursor-not-allowed" 
            : "bg-sage text-white hover:bg-navy"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Inquiry
          </>
        )}
      </motion.button>

      <p className="text-xs text-charcoal/60 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}

