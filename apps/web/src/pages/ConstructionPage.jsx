
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WaveBackground from '@/components/WaveBackground.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const ConstructionPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success('¡Gracias! Te notificaremos cuando estemos listos.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex flex-col w-full">
      <Helmet>
        <title>Sitio en construcción - FlowSidian</title>
        <meta name="description" content="Estamos preparando algo increíble. FlowSidian - Automatización empresarial con IA." />
      </Helmet>

      {/* Animated Fixed Wave Background */}
      <WaveBackground />

      <Header />

      <main className="flex-grow flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Sitio en construcción
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Estamos diseñando una nueva experiencia para transformar la manera en que tu empresa interactúa con la inteligencia artificial. Vuelve pronto para descubrir lo que hemos preparado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
              Recibe una notificación al lanzamiento
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-background/50 border-border focus-visible:ring-primary"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all active:scale-[0.98]"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    Notificarme
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConstructionPage;
