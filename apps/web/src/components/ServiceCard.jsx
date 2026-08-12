
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, cta, ctaLink, variant = 'default' }) => {
  const cardVariants = {
    default: 'bg-card border border-border',
    elevated: 'bg-gradient-to-br from-card to-muted shadow-lg',
    accent: 'bg-primary/5 border border-primary/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${cardVariants[variant]} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full`}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 leading-snug">{title}</h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <Button
          asChild
          variant="ghost"
          className="group px-0 hover:bg-transparent text-primary hover:text-primary/80"
        >
          <a href={ctaLink}>
            {cta}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
