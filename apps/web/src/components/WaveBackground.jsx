
import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Subtle top radial gradient for brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)]" />
      
      {/* Bottom waves container */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[60vh] flex flex-col justify-end">
        
        {/* Wave 1 - Back Layer (Slowest, Darkest/Lowest Opacity) */}
        <motion.div
          className="absolute bottom-0 left-[-50%] w-[200%] h-[80%] text-primary/10"
          animate={{ 
            y: ["0%", "-6%", "0%"],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-current" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,192C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Wave 2 - Middle Layer */}
        <motion.div
          className="absolute bottom-0 left-[-20%] w-[150%] h-[65%] text-primary/20"
          animate={{ 
            y: ["2%", "-4%", "2%"],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-current" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,144C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Wave 3 - Front Layer (Fastest, Lightest/Highest Opacity) */}
        <motion.div
          className="absolute bottom-0 left-0 w-[120%] h-[50%] text-accent/30"
          animate={{ 
            y: ["4%", "-2%", "4%"],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-current" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,133.3C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
        
      </div>
    </div>
  );
};

export default WaveBackground;
