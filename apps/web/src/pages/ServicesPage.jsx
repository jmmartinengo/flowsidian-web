import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Bot, Workflow, Sparkles, TrendingUp, DollarSign, Gauge, GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const automationFeatures = [
    {
      icon: Workflow,
      title: 'Integración Multiplataforma',
      description: 'Conecta todas tus herramientas empresariales en flujos de trabajo 100% automatizados y centralizados.',
    },
    {
      icon: Sparkles,
      title: 'Motor Cognitivo con IA',
      description: 'Procesamiento avanzado de datos, perfilado de clientes y toma de decisiones en piloto automático.',
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidad Garantizada',
      description: 'Arquitectura robusta que crece a la par de tu negocio, sin cuellos de botella técnicos ni límites de volumen.',
    },
  ];

  const automationBenefits = [
    { icon: DollarSign, metric: '47%', label: 'Reducción de costos operativos' },
    { icon: Gauge, metric: '73%', label: 'Mejora en tiempos de respuesta' },
    { icon: TrendingUp, metric: '2.8x', label: 'Incremento en productividad' },
  ];

  const academyFeatures = [
    {
      icon: BookOpen,
      title: 'Contenido práctico',
      description: 'Cursos enfocados en casos de uso reales y aplicación inmediata.',
    },
    {
      icon: Award,
      title: 'Certificación profesional',
      description: 'Acredita tus conocimientos con certificados reconocidos en la industria.',
    },
    {
      icon: Users,
      title: 'Comunidad activa',
      description: 'Acceso a una red de profesionales y soporte continuo.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - FlowSidian</title>
        <meta name="description" content="Automatización empresarial con IA y academia online especializada. Soluciones n8n, Claude y Gemini para transformar tu negocio." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Nuestros servicios
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales de automatización con IA y formación tecnológica especializada
            </p>
          </motion.div>
        </div>
      </section>

      <section id="automatizacion" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Automatización con IA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Transformamos tareas operativas en sistemas que operan de forma autónoma. Diseñamos infraestructuras de integración a medida, equipadas con motores cognitivos avanzados que asumen el análisis de datos complejos, el procesamiento continuo y la ejecución de decisiones estratégicas en tiempo real.
              </p>
              <div className="space-y-4">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Casos de uso empresariales</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Atención al cliente automatizada</p>
                    <p className="text-sm text-muted-foreground">Respuestas inteligentes 24/7 con IA conversacional</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Procesamiento de documentos</p>
                    <p className="text-sm text-muted-foreground">Extracción y análisis automático de información</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Integración de sistemas</p>
                    <p className="text-sm text-muted-foreground">Sincronización automática entre plataformas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Análisis predictivo</p>
                    <p className="text-sm text-muted-foreground">Insights automáticos para decisiones estratégicas</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {automationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 text-center"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">{benefit.metric}</p>
                <p className="text-muted-foreground">{benefit.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/contact">Solicitar consulta</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Estructura de aprendizaje</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        1
                      </div>
                      <h4 className="font-semibold">Fundamentos teóricos</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-11">Conceptos clave y arquitectura de soluciones</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        2
                      </div>
                      <h4 className="font-semibold">Práctica guiada</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-11">Proyectos reales paso a paso</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        3
                      </div>
                      <h4 className="font-semibold">Proyecto final</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-11">Implementación autónoma evaluada</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Academia online
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Formación especializada en tecnologías aplicadas para profesionales. Cursos diseñados para dominar herramientas de automatización, IA y desarrollo de soluciones empresariales.
              </p>
              <div className="space-y-4 mb-8">
                {academyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/academy">Explorar cursos</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;