
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Target, Eye, Lightbulb, Shield, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Adoptamos tecnologías emergentes y metodologías vanguardistas para ofrecer soluciones que marcan la diferencia.',
    },
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en transparencia, seguridad y resultados medibles.',
    },
    {
      icon: TrendingUp,
      title: 'Excelencia',
      description: 'Nos comprometemos con la calidad superior en cada proyecto, desde la planificación hasta la implementación.',
    },
    {
      icon: Users,
      title: 'Sofisticación',
      description: 'Combinamos expertise técnico con visión estratégica para crear soluciones elegantes y efectivas.',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Fundación',
      description: 'Inicio de FlowSidian con la visión de democratizar la automatización empresarial con IA.',
    },
    {
      year: '2022',
      title: 'Primeros clientes',
      description: 'Implementación exitosa de soluciones de automatización para 12 empresas en diversos sectores.',
    },
    {
      year: '2023',
      title: 'Lanzamiento de Academia',
      description: 'Apertura de la plataforma educativa con cursos especializados en tecnologías aplicadas.',
    },
    {
      year: '2024',
      title: 'Expansión internacional',
      description: 'Más de 47 proyectos completados y presencia en 5 países de habla hispana.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Acerca de - FlowSidian</title>
        <meta name="description" content="Conoce la historia, misión y valores de FlowSidian. Transformamos empresas con automatización inteligente y educación tecnológica de vanguardia." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Acerca de FlowSidian
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformamos empresas con automatización inteligente y educación tecnológica de vanguardia
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Nuestra misión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Empoderar empresas con automatización inteligente que transforma procesos manuales en flujos eficientes, escalables y orientados a resultados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creemos que la tecnología debe ser accesible y práctica. Por eso combinamos soluciones de automatización empresarial con formación especializada, permitiendo que organizaciones y profesionales dominen las herramientas del futuro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Nuestra visión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser el referente en automatización empresarial con IA en el mercado hispanohablante, reconocidos por la excelencia técnica, el impacto medible en nuestros clientes y la formación de profesionales altamente capacitados en tecnologías emergentes.
              </p>
            </motion.div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                Nuestros valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principios que guían cada decisión y proyecto en FlowSidian
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                Nuestra trayectoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hitos clave en el crecimiento de FlowSidian
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-0 md:pl-24"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center hidden md:flex">
                      <span className="text-xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    
                    <div className="bg-card border border-border rounded-2xl p-8">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-primary">{milestone.year}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-4 hidden md:block">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            ¿Quieres formar parte de esta historia?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya están transformando sus operaciones con FlowSidian
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 active:scale-[0.98]"
          >
            Comenzar ahora
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
