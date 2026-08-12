
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const maxMessageLength = 500;

  const validateField = (name, value) => {
    let error = '';
    
    if (name === 'name' && !value.trim()) {
      error = 'El nombre es requerido';
    }
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'El email es requerido';
      } else if (!emailRegex.test(value)) {
        error = 'Por favor ingresa un email válido';
      }
    }

    if (name === 'message') {
      if (!value.trim()) {
        error = 'El mensaje es requerido';
      } else if (value.length > maxMessageLength) {
        error = `El mensaje no puede exceder ${maxMessageLength} caracteres`;
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si es el mensaje y excede el límite, no permitimos que siga escribiendo
    if (name === 'message' && value.length > maxMessageLength) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  // ─── CONFIGURACIÓN EMAILJS ────────────────────────────────────────────────
  // 1. Creá una cuenta gratuita en https://www.emailjs.com
  // 2. Añadí un "Email Service" conectado a la cuenta hola@flowsidian.com
  // 3. Creá un "Email Template" con las variables: {{from_name}}, {{from_email}}, {{message}}
  //    y configurá el "To Email" como hola@flowsidian.com
  // 4. Reemplazá los tres valores de abajo con los de tu cuenta:
  const EMAILJS_SERVICE_ID  = 'service_6r0vqcj';   // ej: 'service_abc123'
  const EMAILJS_TEMPLATE_ID = 'template_lkcjmv8';  // ej: 'template_xyz789'
  const EMAILJS_PUBLIC_KEY  = 'DM4bk26q9fxK-55mX';   // ej: 'user_XXXXXXXXXX'
  // ──────────────────────────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todo antes de enviar
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    // Si hay algún error, detenemos el envío
    if (Object.values(newErrors).some(err => err !== '')) {
      toast.error('Por favor corrige los errores del formulario');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) throw new Error('Error en el envío');

      setIsSubmitted(true);
      toast.success('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">Nombre completo *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tu nombre"
          className={`bg-input border-border text-foreground placeholder:text-muted-foreground ${errors.name ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1 animate-in fade-in slide-in-from-top-1">{errors.name}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="tu@email.com"
          className={`bg-input border-border text-foreground placeholder:text-muted-foreground ${errors.email ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1 animate-in fade-in slide-in-from-top-1">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="message" className="text-foreground">Mensaje *</Label>
          <span className={`text-xs ${formData.message.length >= maxMessageLength ? 'text-destructive font-medium' : 'text-muted-foreground'}`}>
            {formData.message.length}/{maxMessageLength}
          </span>
        </div>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
          rows={5}
          className={`bg-input border-border text-foreground placeholder:text-muted-foreground resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1 animate-in fade-in slide-in-from-top-1">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando mensaje...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Mensaje enviado
          </>
        ) : (
          'Enviar mensaje'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
