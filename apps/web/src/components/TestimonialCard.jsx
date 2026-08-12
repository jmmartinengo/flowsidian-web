
import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, company, avatar, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
    >
      <Quote className="w-10 h-10 text-primary/20 mb-4" />
      
      <p className="text-foreground leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
          {avatar}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} en {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
