import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Política de Privacidad - FlowSidian</title>
        <meta name="description" content="Política de privacidad y manejo de datos de FlowSidian." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Política de Privacidad</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
              Política de Privacidad
            </h1>

            <div className="space-y-10 text-muted-foreground leading-relaxed">

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introducción</h2>
                <p>
                  En FlowSidian, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestra plataforma de aprendizaje en línea y nuestros servicios. El tratamiento de sus datos se realiza en conformidad con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Información que Recopilamos</h2>
                <p className="mb-2">Recopilamos la siguiente información personal cuando se registra y utiliza nuestros servicios:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre y apellido</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Fotografía de perfil (opcional)</li>
                  <li>Información de inscripción a cursos y automatizaciones</li>
                  <li>Comentarios y calificaciones en cursos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Uso de la Información</h2>
                <p className="mb-2">Utilizamos su información para:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Crear y administrar su cuenta de usuario</li>
                  <li>Procesar inscripciones a cursos</li>
                  <li>Proporcionar acceso a materiales educativos</li>
                  <li>Comunicarnos con usted sobre sus cursos y actualizaciones</li>
                  <li>Mejorar nuestros servicios y contenido educativo</li>
                  <li>Responder a consultas y solicitudes de soporte</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Protección de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración. Todas las contraseñas se almacenan encriptadas utilizando algoritmos de hash seguros.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Procesamiento de Pagos y Terceros</h2>
                <p className="mb-2">
                  No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Procesamiento de pagos:</strong> Las transacciones financieras se realizan a través de pasarelas de pago seguras (como Mercado Pago). FlowSidian no recopila, procesa ni almacena datos de sus tarjetas de crédito o débito.</li>
                  <li>Cuando se requiera por ley o proceso legal.</li>
                  <li>Cuando sea necesario para proteger nuestros derechos o la seguridad de nuestros usuarios.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies y Tecnologías de Seguimiento</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestra plataforma, recordar sus preferencias (como el modo claro/oscuro) y analizar el uso del sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Sus Derechos</h2>
                <p className="mb-2">Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Acceder a su información personal</li>
                  <li>Corregir información inexacta</li>
                  <li>Solicitar la eliminación de su cuenta y datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar una copia de sus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Retención de Datos</h2>
                <p>
                  Conservamos su información personal mientras su cuenta esté activa o según sea necesario para proporcionarle servicios. Después de la eliminación de su cuenta, conservaremos ciertos datos durante el tiempo requerido por ley o para fines legítimos de negocio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Menores de Edad</h2>
                <p>
                  Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad sin el consentimiento expreso de sus padres o tutores legales.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Cambios a esta Política</h2>
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos mediante un aviso destacado en nuestro sitio web o por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Contacto</h2>
                <p className="mb-4">
                  Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos a través del formulario en nuestra página principal o escribiendo directamente a nuestro equipo de soporte al correo: <a href="mailto:hola@flowsidian.com" className="text-primary hover:underline font-medium">hola@flowsidian.com</a>.
                </p>
                <p className="font-semibold text-foreground p-4 bg-muted/30 rounded-lg border border-border inline-block">
                  Al utilizar FlowSidian, usted acepta los términos descritos en esta Política de Privacidad.
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;