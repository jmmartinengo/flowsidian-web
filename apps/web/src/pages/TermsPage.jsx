import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Términos y Condiciones - FlowSidian</title>
        <meta name="description" content="Términos y condiciones de uso de los servicios y academia de FlowSidian." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Términos y Condiciones</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Términos y Condiciones
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Última actualización: 6 de Junio de 2026</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar la plataforma y los servicios de FlowSidian, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros cursos, plataformas ni utilizar nuestros servicios de agencia.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Descripción del Servicio</h2>
                <p>
                  FlowSidian ofrece soluciones de automatización empresarial (B2B), consultoría tecnológica, y una plataforma de educación (Academia) con cursos en línea, materiales de estudio descargables y clases en vivo. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de los servicios en cualquier momento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Registro, Inscripciones y Pagos</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Proceso de validación (Academia):</strong> Una vez realizado el pago, su inscripción pasará a estado de "Revisión". El acceso al Aula Virtual se habilitará manualmente tras verificar la acreditación.</li>
                  <li><strong>Servicios de Agencia:</strong> Los pagos por desarrollo de software y automatizaciones se regirán por los contratos o presupuestos específicos acordados con cada cliente.</li>
                  <li><strong>Precios:</strong> Nos reservamos el derecho de modificar los precios en cualquier momento.</li>
                  <li><strong>Reembolsos:</strong> Las inscripciones a la academia no son reembolsables una vez otorgado el acceso a los materiales, salvo indicación contraria explícita en la oferta del curso.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido presente en la plataforma (textos, videos, código fuente educativo, flujos de trabajo de muestra, gráficos, logotipos y materiales) es propiedad exclusiva de FlowSidian. Queda estrictamente prohibida la reproducción, distribución, transmisión o cualquier uso comercial no autorizado. El incumplimiento resultará en la suspensión inmediata de la cuenta y las acciones legales correspondientes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Conducta del Usuario</h2>
                <p>
                  Usted se compromete a utilizar los espacios de comentarios, foros y canales de soporte con respeto. Nos reservamos el derecho de suspender cuentas o eliminar contenido que consideremos ofensivo, discriminatorio, spam, o que comparta información personal de terceros sin consentimiento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitación de Responsabilidad y Herramientas de Terceros</h2>
                <p className="mb-2">
                  <strong>Fines Educativos y de Optimización:</strong> Las estrategias enseñadas y las automatizaciones implementadas se brindan con el objetivo de optimizar procesos. FlowSidian no garantiza resultados financieros específicos (como obtención de empleo o aumento garantizado de ingresos).
                </p>
                <p>
                  <strong>Dependencia de Terceros:</strong> Nuestros servicios y enseñanzas utilizan APIs y plataformas de terceros. FlowSidian no se hace responsable por caídas de servicio, cambios en las políticas de uso, o modificaciones en la estructura de precios que dichas empresas externas puedan aplicar de forma unilateral en el futuro.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Legislación y Jurisdicción</h2>
                <p className="mb-4">
                  Estos Términos se rigen por las leyes de la República Argentina. Para cualquier controversia, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la ciudad de Córdoba, Provincia de Córdoba.
                </p>
                <p className="font-semibold text-foreground p-4 bg-muted/30 rounded-lg border border-border inline-block">
                  Para cualquier consulta relacionada con estos términos, contáctenos a: <a href="mailto:hola@flowsidian.com" className="text-primary hover:underline">hola@flowsidian.com</a>
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

export default TermsPage;