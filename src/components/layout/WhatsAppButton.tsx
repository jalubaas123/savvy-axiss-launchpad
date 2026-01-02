import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  const phoneNumber = '919384902501';
  const message = encodeURIComponent("Hi, I'm interested in learning more about Savvy Axiss courses!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 pulse-glow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-success-foreground fill-success-foreground" />
    </motion.a>
  );
};
