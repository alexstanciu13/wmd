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
    company: '',
    website: '',
    budget: '',
    projectType: '',
    timeline: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Aplicație Trimisă!', {
      description: 'Vom revizui aplicația ta și te vom contacta în 24-48 de ore.',
      duration: 5000,
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      budget: '',
      projectType: '',
      timeline: '',
      description: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-3">{title}</h2>
        <p className="text-white/60">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nume Complet *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="bg-white/5 border-white/10 text-white"
              placeholder="Ion Popescu"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Adresă Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="bg-white/5 border-white/10 text-white"
              placeholder="ion@companie.ro"
            />
          </div>
        </div>

        {/* Company & Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="company">Nume Companie *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              required
              className="bg-white/5 border-white/10 text-white"
              placeholder="Compania SRL"
            />
          </div>
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
        </div>

        {/* Budget & Project Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="budget">Buget Proiect *</Label>
            <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)} required>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Selectează intervalul bugetar" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10">
                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                <SelectItem value="250k-500k">$250k - $500k</SelectItem>
                <SelectItem value="500k+">$500k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectType">Tip Proiect *</Label>
            <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)} required>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Selectează tipul proiectului" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10">
                <SelectItem value="web-design">Design Web</SelectItem>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="marketing">Marketing Digital</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="ai-automation">Automatizare AI</SelectItem>
                <SelectItem value="comprehensive">Pachet Complet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <Label htmlFor="timeline">Cronologie Dorită *</Label>
          <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)} required>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Selectează cronologia" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-white/10">
              <SelectItem value="asap">Cât mai curând (În 1 lună)</SelectItem>
              <SelectItem value="1-3">1-3 luni</SelectItem>
              <SelectItem value="3-6">3-6 luni</SelectItem>
              <SelectItem value="6+">6+ luni</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Descriere Proiect *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            required
            className="bg-white/5 border-white/10 text-white min-h-32"
            placeholder="Spune-ne despre obiectivele proiectului tău, provocări și cum arată succesul..."
          />
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
          className="w-full bg-gradient-to-r from-[#00AEEF] to-[#2563EB] text-white hover:opacity-90 transition-opacity h-12"
        >
          {isSubmitting ? 'Se Trimite Aplicația...' : 'Trimite Aplicația'}
        </Button>
      </form>
    </div>
  );
}
