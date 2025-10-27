import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { CheckCircle } from 'lucide-react';

interface ApplicationFormProps {
  title?: string;
  description?: string;
}

export function ApplicationForm({ title = "Aplică pentru Colaborare", description = "Hai să construim ceva extraordinar împreună" }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: '',
    projectType: '',
    timeline: '',
    description: '',
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
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Numele companiei este obligatoriu';
    }

    if (!formData.budget.trim()) {
      newErrors.budget = 'Bugetul este obligatoriu';
    } else if (isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
      newErrors.budget = 'Bugetul trebuie să fie un număr pozitiv';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Tipul proiectului este obligatoriu';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Cronologia este obligatorie';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Descrierea este obligatorie';
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

      const response = await fetch(`${apiUrl}/submit-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website || 'N/A',
          budget: formData.budget,
          projectType: formData.projectType,
          timeline: formData.timeline,
          description: formData.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast.success('Mulțumim! Cererea ta a fost trimisă cu succes.', {
        description: 'Te vom contacta în curând.',
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        budget: '',
        projectType: '',
        timeline: '',
        description: '',
        _honeypot: '',
      });
      setErrors({});

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Eroare la trimitere', {
        description: 'A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou sau să ne contactezi direct.',
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

  const formatBudget = (value: string) => {
    // Remove non-numeric characters
    const numeric = value.replace(/[^\d]/g, '');
    // Format with thousands separator
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    handleChange('budget', value);
  };

  return (
    <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-3">{title}</h2>
        <p className="text-white/60">{description}</p>
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

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nume Complet *</Label>
            <Input
              id="name"
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
            <Label htmlFor="email">Adresă Email *</Label>
            <Input
              id="email"
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

        {/* Phone & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
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
          <div className="space-y-2">
            <Label htmlFor="company">Nume Companie *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              placeholder="Compania SRL"
            />
            {errors.company && (
              <p className="text-red-400 text-sm">{errors.company}</p>
            )}
          </div>
        </div>

        {/* Website & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="website">Website (Opțional)</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="bg-white/5 border-white/10 text-white"
              placeholder="https://exemplu.ro"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Buget Estimat *</Label>
            <div className="relative">
              <Input
                id="budget"
                type="text"
                value={formatBudget(formData.budget)}
                onChange={handleBudgetChange}
                className="bg-white/5 border-white/10 text-white pr-12"
                placeholder="Ex: 5000"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                €
              </span>
            </div>
            {errors.budget && (
              <p className="text-red-400 text-sm">{errors.budget}</p>
            )}
          </div>
        </div>

        {/* Project Type & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="projectType">Tip Proiect *</Label>
            <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Selectează tipul proiectului" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10">
                <SelectItem value="web-design">Design Web</SelectItem>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="marketing">Marketing Digital</SelectItem>
                <SelectItem value="email-marketing">E-mail Marketing</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="ai-automation">Automatizare AI</SelectItem>
                <SelectItem value="comprehensive">Pachet Complet</SelectItem>
              </SelectContent>
            </Select>
            {errors.projectType && (
              <p className="text-red-400 text-sm">{errors.projectType}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeline">Cronologie Dorită *</Label>
            <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Selectează cronologia" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10">
                <SelectItem value="asap">Cât mai curând (1 săptămână)</SelectItem>
                <SelectItem value="1-3">1-3 săptămâni</SelectItem>
                <SelectItem value="3-6">3-6 săptămâni</SelectItem>
                <SelectItem value="6+">6+ săptămâni</SelectItem>
              </SelectContent>
            </Select>
            {errors.timeline && (
              <p className="text-red-400 text-sm">{errors.timeline}</p>
            )}
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Descriere Proiect *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="bg-white/5 border-white/10 text-white min-h-32"
            placeholder="Spune-ne despre obiectivele proiectului tău, provocări și cum arată succesul..."
          />
          {errors.description && (
            <p className="text-red-400 text-sm">{errors.description}</p>
          )}
        </div>

        {/* Qualification Notice */}
        <div className="glass rounded-lg p-4 border border-[#00AEEF]/30">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-white/70">
              <p className="mb-2">
                Datorită cererii ridicate și angajamentului nostru față de calitate, acceptăm doar un număr limitat de clienți în fiecare trimestru.
              </p>
              <p>
                Toate aplicațiile sunt revizuite cu atenție pentru a asigura potrivirea reciprocă și alinierea proiectului.
              </p>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary h-12"
        >
          {isSubmitting ? 'Se Trimite Aplicația...' : 'Trimite Aplicația'}
        </Button>
      </form>
    </div>
  );
}
