
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, GraduationCap, Sparkles, Workflow, Award, TrendingUp, DollarSign, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WaveBackground from '@/components/WaveBackground.jsx';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: DollarSign, metric: '47%', label: 'Reducción de costos operativos' },
  { icon: Gauge, metric: '73%', label: 'Mejora en tiempos de respuesta' },
  { icon: TrendingUp, metric: '2.8x', label: 'Incremento en productividad' },
];

const services = [
  {
    icon: Bot,
    title: 'Automatización con IA',
    description: 'Transformamos tareas operativas en sistemas autónomos. Flujos inteligentes que procesan datos, toman decisiones y ejecutan acciones en tiempo real.',
    cta: 'Ver servicios',
    href: '/services',
  },
  {
    icon: GraduationCap,
    title: 'Academia Online',
    description: 'Formación especializada en automatización, IA y herramientas digitales. Cursos prácticos para profesionales y agencias de viajes.',
    cta: 'Explorar cursos',
    href: '/academy',
  },
];

const features = [
  { icon: Workflow, title: 'Integración Multiplataforma', description: 'Conectamos todas tus herramientas en flujos de trabajo 100% automatizados.' },
  { icon: Sparkles, title: 'Motor Cognitivo con IA', description: 'Procesamiento avanzado de datos y toma de decisiones en piloto automático.' },
  { icon: Award, title: 'Formación Certificada', description: 'Cursos prácticos con casos reales y certificación reconocida en la industria.' },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full">
      <Helmet>
        <title>FlowSidian - Automatización empresarial con IA</title>
        <meta name="description" content="Automatización empresarial con IA y formación tecnológica especializada. Transformamos procesos manuales en flujos eficientes y escalables." />
      </Helmet>

      <WaveBackground />
      <Header />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Automatización · IA · Academia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent max-w-4xl"
        >
          Tu empresa en piloto automático
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          Diseñamos flujos de automatización con IA que eliminan el trabajo repetitivo y capacitamos a tu equipo para operar con tecnología de vanguardia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            <Link to="/services">
              Ver servicios
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted/50">
            <Link to="/academy">Explorar Academia</Link>
          </Button>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-4xl font-bold text-primary mb-1">{stat.metric}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que hacemos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Dos líneas de trabajo complementarias para transformar tu empresa</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Button asChild variant="outline" className="w-fit border-primary/30 text-primary hover:bg-primary/10">
                  <Link to={service.href}>
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para automatizar?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Contanos sobre tu empresa y te mostramos cómo podemos transformar tus procesos con IA.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            <Link to="/contact">
              Hablar con el equipo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
