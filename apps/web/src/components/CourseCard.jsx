
import React from 'react';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const CourseCard = ({ title, description, duration, level, image, cta, ctaLink, index = 0 }) => {
  const levelColors = {
    Principiante: 'bg-green-500/10 text-green-500 border-green-500/20',
    Intermedio: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Avanzado: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BarChart className="w-16 h-16 text-primary/40" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className={levelColors[level] || levelColors.Intermedio}>
            {level}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 leading-snug">{title}</h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            <a href={ctaLink}>
              {cta}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
