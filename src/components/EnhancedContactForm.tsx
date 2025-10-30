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
          className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg flex items-start gap-3"
          role="alert"
        >
          <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-sans text-sm font-semibold mb-1">Message Sent!</p>
            <p className="font-sans text-sm">
              Thank you for reaching out! I'll get back to you within 24 hours.
            </p>
          </div>
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
              "w-full px-4 py-3 bg-white border-2 focus:outline-none transition-all duration-300",
              errors.firstName 
                ? "border-red-500 focus:border-red-500" 
                : "border-gold/20 focus:border-gold hover:border-gold/40"
            )}
          />
          {errors.firstName && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <span>⚠️</span>
              {errors.firstName.message}
            </motion.p>
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
              "w-full px-4 py-3 bg-white border-2 focus:outline-none transition-all duration-300",
              errors.lastName 
                ? "border-red-500 focus:border-red-500" 
                : "border-gold/20 focus:border-gold hover:border-gold/40"
            )}
          />
          {errors.lastName && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <span>⚠️</span>
              {errors.lastName.message}
            </motion.p>
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
              "w-full px-4 py-3 bg-white border-2 focus:outline-none transition-all duration-300",
              errors.email 
                ? "border-red-500 focus:border-red-500" 
                : "border-gold/20 focus:border-gold hover:border-gold/40"
            )}
          />
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <span>⚠️</span>
              {errors.email.message}
            </motion.p>
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
            className="w-full px-4 py-3 bg-white border-2 border-gold/20 focus:outline-none focus:border-gold hover:border-gold/40 transition-all duration-300"
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
              "w-full px-4 py-3 bg-white border-2 focus:outline-none transition-all duration-300",
              errors.eventType 
                ? "border-red-500 focus:border-red-500" 
                : "border-gold/20 focus:border-gold hover:border-gold/40"
            )}
          >
            <option value="">Select an option</option>
            <option value="atlanta-gala">Atlanta Gala / Fundraiser</option>
            <option value="corporate">Corporate Event</option>
            <option value="buckhead-social">Buckhead Social Event</option>
            <option value="wedding">Wedding Celebration</option>
            <option value="other">Other</option>
          </select>
          {errors.eventType && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <span>⚠️</span>
              {errors.eventType.message}
            </motion.p>
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
            className="w-full px-4 py-3 bg-white border-2 border-gold/20 focus:outline-none focus:border-gold hover:border-gold/40 transition-all duration-300"
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
            className="w-full px-4 py-3 bg-white border-2 border-gold/20 focus:outline-none focus:border-gold hover:border-gold/40 transition-all duration-300"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-sans tracking-wider uppercase text-navy mb-2">
            Estimated Budget
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 bg-white border-2 border-gold/20 focus:outline-none focus:border-gold hover:border-gold/40 transition-all duration-300"
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
            "w-full px-4 py-3 bg-white border-2 focus:outline-none resize-none transition-all duration-300",
            errors.message 
              ? "border-red-500 focus:border-red-500" 
              : "border-gold/20 focus:border-gold hover:border-gold/40"
          )}
          placeholder="Share your vision, venue preferences, and any specific requirements..."
        ></textarea>
        {errors.message && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600 flex items-center gap-1"
            role="alert"
          >
            <span>⚠️</span>
            {errors.message.message}
          </motion.p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={cn(
          "w-full py-5 font-sans text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
          isSubmitting 
            ? "bg-charcoal/50 text-white cursor-not-allowed" 
            : "gradient-rose text-white hover:shadow-2xl glow-effect"
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

