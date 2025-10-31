import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    // Honeypot field for spam protection
    _honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu';
    } else {
      // Normalize phone number by removing spaces, dashes, and parentheses
      const normalizedPhone = formData.phone.replace(/[\s\-()]/g, '');
      // Validate Romanian phone numbers
      const romanianPhoneRegex = /^(\+?40|0)(7[0-9]{8}|[2-3][0-9]{8})$/;
      if (!romanianPhoneRegex.test(normalizedPhone)) {
        newErrors.phone = 'Telefonul trebuie să fie un număr românesc valid';
      }
    }

    if (!formData.service) {
      newErrors.service = 'Te rugăm să selectezi un serviciu';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot field (should be empty)
    if (formData._honeypot) {
      console.log('Spam detected via honeypot');
      return;
    }

    if (!validateForm()) {
      toast.error('Eroare Validare', {
        description: 'Te rugăm să corectezi erorile din formular.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Use environment variable for API URL in production, fallback to relative path for development
      const apiUrl = import.meta.env.VITE_API_URL || '/api';

      const response = await fetch(`${apiUrl}/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        _honeypot: '',
      });
      setErrors({});

      toast.success('Mesaj Trimis!', {
        description: 'Te vom contacta în cel mai scurt timp posibil.',
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Eroare la trimitere', {
        description: 'A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="glass-strong rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl mb-3">Hai să Discutăm Proiectul Tău</h3>
        <p className="text-white/60">Completează formularul și te vom contacta în 24 de ore</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <Input
            type="text"
            name="_honeypot"
            value={formData._honeypot}
            onChange={(e) => handleChange('_honeypot', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name, Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Nume Complet *</Label>
            <Input
              id="contact-name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              placeholder="Ion Popescu"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Adresă Email *</Label>
            <Input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              placeholder="ion@companie.ro"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Telefon *</Label>
          <Input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="bg-white/5 border-white/10 text-white"
            placeholder="+40 712 345 678"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <Label htmlFor="contact-service">Serviciu de Interes *</Label>
          <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Selectează serviciul" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-white/10">
              <SelectItem value="web-design">Design Web</SelectItem>
              <SelectItem value="ecommerce">E-Commerce</SelectItem>
              <SelectItem value="marketing">Marketing Digital</SelectItem>
              <SelectItem value="branding">Branding</SelectItem>
              <SelectItem value="ai-automation">Automatizare AI</SelectItem>
              <SelectItem value="comprehensive">Pachet Complet</SelectItem>
              <SelectItem value="other">Altceva</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-red-400 text-sm">{errors.service}</p>
          )}
        </div>

        {/* Optional Message */}
        <div className="space-y-2">
          <Label htmlFor="contact-message">Mesaj (Opțional)</Label>
          <Textarea
            id="contact-message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="bg-white/5 border-white/10 text-white min-h-24"
            placeholder="Spune-ne pe scurt despre proiectul tău..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary h-12"
        >
          {isSubmitting ? 'Se Trimite...' : (
            <>
              Trimite Mesaj
              <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
