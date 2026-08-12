
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CourseCard from '@/components/CourseCard.jsx';
import { GraduationCap, Award, Users, BookOpen, Briefcase, Plane, Calendar, Clock, Monitor, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademyPage = () => {
  const [activeCategory, setActiveCategory] = useState('turismo');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const courses = [
    {
      id: 'gestion-digital',
      title: 'Gestión Digital y Productividad para Agencias de Viajes',
      description: 'Ordená la información de tu agencia, gestioná clientes y ahorrá tiempo operativo usando herramientas gratuitas e Inteligencia Artificial.',
      duration: '8 Clases (En vivo)',
      level: 'Todos los niveles',
      category: 'turismo',
      cta: 'Ver detalles del programa',
      modality: 'En vivo (6 hs)',
      schedule: 'Lunes y Jueves de 18 a 20 hs',
      audience: 'Personas que gestionan o desean emprender una agencia de viajes.',
      price: '$10.000',
      paymentMethod: 'Mercado Pago disponible',
      instructor: 'Con más de 10 años liderando proyectos y optimizando agencias de viajes.',
      benefits: [
        'Ordenar la información de tu agencia de forma clara y segura.',
        'Gestionar clientes con criterios profesionales (no todos son iguales).',
        'Crear presupuestos y propuestas más claras, prolijas y confiables.',
        'Implementar un seguimiento postventa que fidelice y genere recomendaciones.',
        'Responder reclamos y consultas de manera organizada y profesional.',
        'Ahorrar tiempo operativo mediante procesos simples y reutilizables.',
        'Incorporar herramientas de inteligencia artificial para mejorar tu productividad.',
        'En síntesis, vas a trabajar mejor, con menos estrés y con una imagen más profesional frente a tus clientes, sin necesidad de invertir en software con alto costo ni conocimientos técnicos complejos.'
      ],
      syllabus: [
        { class: 'Clase 1', title: 'Google Drive como ecosistema de productividad', desc: 'Aprender a utilizar Google Drive como una plataforma integral de trabajo profesional para optimizar la gestión documental, la colaboración y el acceso a la información.' },
        { class: 'Clase 2', title: 'Gestión de clientes con herramientas gratuitas', desc: 'Aprender a organizar contactos, historial de reservas y datos clave de clientes. ¿Quién es tu mejor cliente? ¿Estás seguro?' },
        { class: 'Clase 3', title: 'Presupuestos y cotizaciones profesionales', desc: 'Agilizar la creación de propuestas atractivas y profesionales.' },
        { class: 'Clase 4', title: 'Postventa inteligente con Google Forms', desc: 'Fidelizar al cliente luego de su viaje y mejorar el servicio recibido.' },
        { class: 'Clase 5', title: 'Sistema básico de PQRS con herramientas gratuitas', desc: 'Implementar un sistema simple, ordenado y eficaz para gestionar peticiones, quejas, reclamos y sugerencias utilizando las herramientas de Google.' },
        { class: 'Clase 6', title: 'Gestión interna para agencias pequeñas o unipersonales', desc: 'Usar herramientas digitales para ordenar la parte operativa sin necesidad de sistemas costosos.' },
        { class: 'Clase 7', title: 'Inteligencia Artificial aplicada a agencias de viajes', desc: 'Explorar las posibilidades de la IA para simplificar tareas, generar contenido y mejorar la productividad.' },
        { class: 'Clase 8', title: 'Taller práctico grupal y devolución personalizada', desc: 'Consolidar aprendizajes mediante trabajo colaborativo y ofrecer devoluciones específicas, respetando la confidencialidad.' }
      ]
    },
    {
      id: 'contabilidad-turismo',
      title: 'Contabilidad Especializada en Turismo',
      description: 'Estructura financiera para agencias de viajes. Conciliación de cuentas, gestión de comisiones y control de flujo de caja turístico.',
      duration: 'Próximamente',
      level: 'Intermedio',
      category: 'turismo',
      cta: 'Anotarse a lista de espera',
    },
    {
      id: 'lead-scoring',
      title: 'Lead Scoring y Cualificación B2B',
      description: 'Diseña flujos conversacionales inteligentes para captar, filtrar y puntuar leads antes de que lleguen a tu equipo de ventas.',
      duration: '6 semanas',
      level: 'Intermedio',
      category: 'transversal',
      cta: 'Solicitar información',
    },
    {
      id: 'ia-pqrs',
      title: 'IA Aplicada a Gestión de PQRS',
      description: 'Implementa modelos de lenguaje modernos para clasificar, priorizar y automatizar las respuestas de soporte al cliente de forma eficiente.',
      duration: '6 semanas',
      level: 'Intermedio',
      category: 'transversal',
      cta: 'Solicitar información',
    }
  ];

  const learningPaths = [
    {
      title: 'Gestión Eficiente de Agencias',
      description: 'Trabajá mejor, con menos estrés y con una imagen más profesional frente a tus clientes, sin invertir en software costoso.',
      category: 'turismo',
      courses: ['Gestión Digital y Productividad', 'Contabilidad para Turismo'],
    },
    {
      title: 'Arquitecto de Procesos Core',
      description: 'Para dueños de agencias, COOs y profesionales que buscan automatizar procesos y flujos en cualquier tipo de industria.',
      category: 'transversal',
      courses: ['Lead Scoring y Cualificación B2B', 'IA Aplicada a PQRS'],
    },
  ];

  const instructorFeatures = [
    {
      icon: Award,
      title: '+10 años de experiencia',
      description: 'Aprende con estrategias probadas liderando proyectos y optimizando agencias.',
    },
    {
      icon: Users,
      title: 'Enfoque Práctico',
      description: 'Cero teoría de relleno. Herramientas gratuitas, IA y procesos simples y reutilizables.',
    },
    {
      icon: BookOpen,
      title: 'Seguimiento Personalizado',
      description: 'Taller práctico grupal con devoluciones específicas respetando la confidencialidad.',
    },
  ];

  const filteredCourses = courses.filter(course => course.category === activeCategory);
  const filteredPaths = learningPaths.filter(path => path.category === activeCategory);

  const handleCourseClick = (course) => {
    if (course.id === 'gestion-digital') {
      setSelectedCourse(course);
    } else {
      navigate('/contact');
    }
  };

  const handleEnrollment = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Helmet>
        <title>FlowSidian Academy | Formación Operativa</title>
        <meta name="description" content="Programas especializados para verticales de nicho y automatización de procesos transversales de negocio." />
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
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              FlowSidian Academy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Formación operativa de alto nivel. Programas especializados para verticales turísticas y automatización de procesos empresariales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {instructorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-muted/30 p-2 rounded-2xl max-w-fit mx-auto border border-border">
            <button
              onClick={() => setActiveCategory('turismo')} 
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === 'turismo' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Plane className="w-5 h-5" />
              Especialización Turística
            </button>
            <button
              onClick={() => setActiveCategory('transversal')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === 'transversal' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Procesos Empresariales
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleCourseClick(course)}
                  className="cursor-pointer"
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    duration={course.duration}
                    level={course.level}
                    cta={course.cta}
                    ctaLink="#"
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Rutas Profesionales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredPaths.map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm"
                >
                  <h3 className="text-2xl font-semibold mb-4">{path.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{path.description}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Áreas temáticas clave:</p>
                    {path.courses.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-sm font-medium">{course}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-2xl scrollbar-thin"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 pr-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                  Programa Activo
                </span>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                  {selectedCourse.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Instructor: {selectedCourse.instructor}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-muted/30 border border-border mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">Días y Horarios</p>
                      <p className="text-xs font-semibold leading-tight">{selectedCourse.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">Modalidad</p>
                      <p className="text-xs font-semibold leading-tight">{selectedCourse.modality}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">Perfil de Alumno</p>
                      <p className="text-xs font-semibold leading-tight">{selectedCourse.audience}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-border pb-2">
                    ¿Qué vas a lograr con este curso?
                  </h3>
                  <ul className="space-y-3">
                    {selectedCourse.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-border pb-2">
                    Plan de Estudio Detallado
                  </h3>
                  <div className="space-y-4">
                    {selectedCourse.syllabus.map((clase, i) => (
                      <div key={i} className="p-3 rounded-xl bg-muted/20 border border-border/50">
                        <p className="text-xs font-bold text-primary mb-1">{clase.class} – {clase.title}</p>
                        <p className="text-xs text-muted-foreground leading-normal">{clase.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-border mt-6">
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-black text-foreground">{selectedCourse.price}</p>
                  <p className="text-xs text-muted-foreground font-medium">{selectedCourse.paymentMethod}</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-muted/50 transition-all text-center"
                  >
                    Cerrar
                  </button>
                  <button 
                    onClick={handleEnrollment}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm text-center shadow-lg transition-all"
                  >
                    Inscribirme ahora
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AcademyPage;
