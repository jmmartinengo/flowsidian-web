import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hola@flowsidian.com',
      link: 'mailto:hola@flowsidian.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+543516133670',
      link: 'tel:+543516133670',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Córdoba - Global',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contacto - FlowSidian</title>
        <meta name="description" content="Ponte en contacto con FlowSidian. Agenda una consulta o envíanos un mensaje y te responderemos a la brevedad." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24 pb-20 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-background z-[-2]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_70%)] z-[-1] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_70%)] z-[-1] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Hablemos de tu proyecto
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ¿Tienes una idea en mente o necesitas automatizar tus procesos? 
              Estamos aquí para ayudarte a impulsar el futuro de tu empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-card border border-border shadow-lg shadow-black/20 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </motion.div>

            {/* Right Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">Horario de atención</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Nuestro equipo está disponible de lunes a viernes, de 9:00 AM a 6:00 PM (PST). 
                  Nos esforzamos por responder a todas las consultas dentro de las 24 horas hábiles.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;