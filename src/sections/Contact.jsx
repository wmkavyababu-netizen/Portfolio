import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck, Mailbox } from 'lucide-react';
import { playClick, playTick, playSuccess, playError } from '../utils/audio';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      label: 'Email Dispatch',
      value: 'wmkavyababu@gmail.com',
      href: 'mailto:wmkavyababu@gmail.com',
      icon: <Mail className="text-electric-cyan" size={20} />,
      colorClass: 'border-electric-cyan/20 shadow-neon-cyan/10 hover:border-electric-cyan/50 text-electric-cyan'
    },
    {
      label: 'Comm Channel',
      value: '+91 6374295361',
      href: 'tel:+916374295361',
      icon: <Phone className="text-psychic-pink" size={20} />,
      colorClass: 'border-psychic-pink/20 shadow-neon-pink/10 hover:border-psychic-pink/50 text-psychic-pink'
    },
    {
      label: 'Coordinates',
      value: 'Chennai, India',
      href: 'https://maps.google.com/?q=Chennai,India',
      icon: <MapPin className="text-grass-green" size={20} />,
      colorClass: 'border-grass-green/20 shadow-neon-green/10 hover:border-grass-green/50 text-grass-green'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    playTick();
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      playError();
      setStatus({ type: 'error', text: 'SYSTEM ERROR: ALL PROTOCOL FIELDS REQUIRED.' });
      return;
    }

    playClick();
    setIsSubmitting(true);
    setStatus({ type: 'info', text: 'CONNECTING TO OUTGOING SMTP CONSOLE...' });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_hcbab88',
      'template_f8unquq',
      templateParams,
      'ayLSSyoxicJE0EuVE'
    )
      .then(() => {
        setIsSubmitting(false);
        playSuccess();
        setStatus({
          type: 'success',
          text: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsSubmitting(false);
        playError();
        setStatus({
          type: 'error',
          text: 'Something went wrong — please try again or email directly at wmkavyababu@gmail.com.'
        });
        console.error('EmailJS error:', error);
      });
  };

  const handleMailtoFallback = () => {
    playClick();
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:wmkavyababu@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 px-6 border-b border-gray-200 scroll-mt-16 bg-[#FAF7F2]">

      {/* Visual coordinates scan line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-left">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-electric-cyan">★ BEAM DATA TRANSMISSIONS</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-4xl text-charcoal mt-1 tracking-wider uppercase">
            Contact Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-cyan to-psychic-pink mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">

          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-orbitron font-semibold text-lg text-electric-cyan tracking-wider uppercase mb-8">
              &gt; FREQUENCY CHANNELS
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Coordinates' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className={`glassmorphism border p-4.5 rounded-xl flex items-center gap-4 transition-all duration-300 group cursor-pointer relative ${info.colorClass.split(' ')[0]} ${info.colorClass.split(' ')[1]} ${info.colorClass.split(' ')[2]}`}
                >
                  {/* Wild Encounter dialogue box hover reveal */}
                  <div className="absolute left-1/2 -top-16 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-white border-2 border-charcoal p-2 px-3.5 rounded-xl shadow-lg z-30 whitespace-nowrap text-left flex flex-col items-start min-w-[220px] select-none pointer-events-none">
                    <div className="text-[7.5px] font-mono-tech text-gray-400 uppercase tracking-widest leading-none mb-1">Wild Encounter!</div>
                    <div className="text-[10px] font-mono-tech text-charcoal font-bold leading-normal">
                      A wild <span className="text-psychic-pink font-extrabold">{info.value}</span> appeared!
                    </div>
                    {/* Speech bubble pointer */}
                    <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r-2 border-b-2 border-charcoal rotate-45" />
                  </div>

                  <div className="p-2.5 bg-white rounded border border-gray-200 group-hover:border-gray-300 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-0.5">
                      {info.label}
                    </span>
                    <span className="font-orbitron font-semibold text-sm text-charcoal group-hover:text-charcoal break-all tracking-wide">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Note on data security */}
            <div className="border border-gray-200 rounded-xl p-4 bg-white/70 flex gap-3 text-xs leading-relaxed text-gray-500 font-mono-tech select-none">
              <ShieldCheck className="text-gray-400 shrink-0" size={18} />
              <span>
                SECURITY NOTICE: MESSAGES DECRYPTED AND ENCRYPTED WITH SSL SECURE ROUTING BEFORE DISPATCH. RESPONSE ASSURED WITHIN 24 CORE CYCLE RUNS.
              </span>
            </div>
          </div>

          {/* Right Column: Form console */}
          <div className="lg:col-span-7">
            <div className="glassmorphism border border-gray-200 rounded-2xl p-6 md:p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-psychic-pink/20 to-transparent" />

              <h3 className="font-orbitron font-semibold text-base text-psychic-pink tracking-wider uppercase mb-6 flex items-center gap-2">
                <Mailbox size={16} /> Write console message:
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">

                {/* Form fields */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                    USER NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:shadow-[0_0_12px_rgba(0,229,255,0.15)] transition-all font-mono-tech"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                    USER EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-psychic-pink focus:shadow-[0_0_12px_rgba(255,47,208,0.15)] transition-all font-mono-tech"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                    CONSOLE MESSAGE LOGS
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message content..."
                    className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-grass-green focus:shadow-[0_0_12px_rgba(57,255,20,0.15)] transition-all font-mono-tech resize-none"
                  />
                </div>

                {/* Submissions Alerts */}
                {status.text && (
                  <div className={`p-3.5 rounded border text-[11px] font-mono-tech leading-relaxed ${status.type === 'success'
                    ? 'bg-grass-green/5 border-grass-green/30 text-grass-green'
                    : status.type === 'error'
                      ? 'bg-psychic-pink/5 border-psychic-pink/30 text-psychic-pink'
                      : 'bg-electric-cyan/5 border-electric-cyan/30 text-electric-cyan'
                    }`}>
                    {status.text}

                    {/* Mailto fallback pathway links */}
                    {status.type === 'success' && (
                      <div className="mt-2 text-gray-400">
                        Problems with connection? Send directly using{' '}
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="text-electric-cyan hover:underline font-bold font-orbitron text-[10px] cursor-pointer"
                        >
                          [ DIRECT MAILTO ]
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Action */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-5 py-3 bg-gradient-to-r from-psychic-pink to-psychic-pink/80 hover:brightness-110 text-white font-orbitron font-bold text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(255,47,208,0.35)] hover:shadow-[0_0_20px_#ff2fd0] transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={12} />
                    {isSubmitting ? 'DISPATCHING...' : 'SEND MESSAGE'}
                  </button>

                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="px-4 py-3 border border-gray-300 hover:border-gray-400 text-gray-500 hover:text-charcoal bg-white rounded text-xs uppercase tracking-wider font-orbitron font-bold transition-all cursor-pointer hover:bg-gray-50 active:scale-[0.98]"
                  >
                    Mailto
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
