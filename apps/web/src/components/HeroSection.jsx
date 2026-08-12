
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = ({ 
  backgroundImage, 
  headline, 
  subheading, 
  primaryCta, 
  primaryCtaLink, 
  secondaryCta, 
  secondaryCtaLink,
  minHeight = 'min-h-[100dvh]'
}) => {
  return (
    <section className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            {headline}
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          {subheading}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {primaryCta && (
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 transition-all duration-200 active:scale-[0.98]"
            >
              <a href={primaryCtaLink}>{primaryCta}</a>
            </Button>
          )}
          
          {secondaryCta && (
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="text-base px-8 border-border hover:bg-muted transition-all duration-200 active:scale-[0.98]"
            >
              <a href={secondaryCtaLink}>{secondaryCta}</a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
