import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const translations = {
  pt: {
    title: 'Entre em Contato',
    subtitle: 'Estamos aqui para tornar sua estadia inesquecível',
    form: {
      title: 'Envie uma Mensagem',
      name: 'Nome Completo',
      email: 'E-mail',
      phone: 'Telefone',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!'
    },
    contact: {
      title: 'Informações de Contato',
      address: 'Endereço',
      addressText: 'Rua Quinze, 22 - Brava, Armação dos Búzios - RJ, 28950-000',
      phone: 'Telefone',
      phoneText: '+55 22 999393691',
      email: 'E-mail',
      emailText: 'contato@fantasybuzios.com.br',
      hours: 'Atendimento & Check-In',
      hoursText: '08am - 22pm'
    },
    social: {
      title: 'Redes Sociais',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram'
    }
  },
  en: {
    title: 'Get in Touch',
    subtitle: 'We are here to make your stay unforgettable',
    form: {
      title: 'Send a Message',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!'
    },
    contact: {
      title: 'Contact Information',
      address: 'Address',
      addressText: 'Rua Quinze, 22 - Brava, Armação dos Búzios - RJ, 28950-000',
      phone: 'Phone',
      phoneText: '+55 22 999393691',
      email: 'Email',
      emailText: 'contato@fantasybuzios.com.br',
      hours: 'Service & Check-In',
      hoursText: '08am - 22pm'
    },
    social: {
      title: 'Social Media',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram'
    }
  },
  es: {
    title: 'Contacto',
    subtitle: 'Estamos aquí para hacer tu estadía inolvidable',
    form: {
      title: 'Envía un Mensaje',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado con éxito!'
    },
    contact: {
      title: 'Información de Contacto',
      address: 'Dirección',
      addressText: 'Rua Quinze, 22 - Brava, Armação dos Búzios - RJ, 28950-000',
      phone: 'Teléfono',
      phoneText: '+55 22 999393691',
      email: 'Correo Electrónico',
      emailText: 'contato@fantasybuzios.com.br',
      hours: 'Atención & Check-In',
      hoursText: '08am - 22pm'
    },
    social: {
      title: 'Redes Sociales',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram'
    }
  }
};
interface ContatoSectionProps {
  currentLang: string;
}
export const ContatoSection = ({
  currentLang
}: ContatoSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const t = translations[currentLang as keyof typeof translations];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: t.form.success,
      description: "Entraremos em contato em breve!"
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contato" className="py-20 bg-[#fbd76a]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold text-black md:text-5xl">
              {t.title}
            </h2>
            <p className="text-xl mb-8 text-black">
              {t.subtitle}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-villa border-0">
              <CardHeader className="bg-gradient-primary text-primary-foreground bg-[#3e5650]">
                <CardTitle className="text-2xl">{t.form.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">{t.form.name}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">{t.form.email}</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">{t.form.phone}</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground">{t.form.message}</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="mt-2 resize-none" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-golden text-lg py-3">
                    {t.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-villa border-0">
                <CardHeader className="text-primary-foreground bg-[#3e5650]">
                  <CardTitle className="text-xl">{t.contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t.contact.address}</p>
                      <p className="text-muted-foreground">{t.contact.addressText}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t.contact.phone}</p>
                      <p className="text-muted-foreground">{t.contact.phoneText}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t.contact.email}</p>
                      <p className="text-muted-foreground">{t.contact.emailText}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t.contact.hours}</p>
                      <p className="text-muted-foreground">{t.contact.hoursText}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-villa border-0">
                <CardHeader className="text-secondary-foreground bg-[3e5650_] bg-[#3e5650]">
                  <CardTitle className="text-xl text-white">{t.social.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <Button size="lg" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-golden" onClick={() => window.open('https://wa.me/5522999393691', '_blank')}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t.social.whatsapp}
                    </Button>
                    
                    <Button size="lg" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-golden" onClick={() => window.open('https://instagram.com/fantasybuzios', '_blank')}>
                      <Instagram className="w-5 h-5 mr-2" />
                      {t.social.instagram}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};