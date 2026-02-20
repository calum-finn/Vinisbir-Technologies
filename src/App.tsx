/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Map, 
  MapPin, 
  Lock, 
  Globe, 
  Camera, 
  PenLine, 
  Compass, 
  Clock, 
  Smile, 
  Navigation, 
  Volume2, 
  BarChart3, 
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sublime Mind', href: '#hero' },
    { name: 'How It Works', href: '#concept' },
    { name: 'Community', href: '#community' },
    { name: 'Legal', href: '#legal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-semibold tracking-tight text-ink">
          Vinisbir Technologies
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-ink text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-ink/90 transition-all hover:scale-105 active:scale-95">
            Download Sublime Mind
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-ink/80"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-ink text-white px-6 py-3 rounded-full text-sm font-medium w-full">
                Download Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-muted-blue/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-ink" />
            <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-ink" />
            <path d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-ink" />
          </svg>
        </div>
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-ink mb-8 leading-[1.1] tracking-tight text-balance">
            Discover Peace.<br />Anywhere.
          </h1>
          <p className="text-lg md:text-xl text-ink/60 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            Sublime Mind helps you find, remember, and share the places in the world where you feel most at peace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-ink text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-ink/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-ink/10">
              Explore Sublime Mind
            </button>
            <button className="bg-white/50 backdrop-blur-sm border border-ink/10 text-ink px-10 py-4 rounded-full text-lg font-medium hover:bg-white transition-all hover:scale-105 active:scale-95">
              Download Now
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink/30"
      >
        <ChevronRight className="rotate-90" size={32} />
      </motion.div>
    </section>
  );
};

const AppConcept = () => {
  return (
    <section id="concept" className="section-padding bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-sand rounded-[3rem] p-4 shadow-2xl border border-white/20 aspect-[9/19] max-w-[320px] mx-auto overflow-hidden">
              {/* Mock App UI */}
              <div className="w-full h-full bg-slate-100 rounded-[2.5rem] relative overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/map/600/1200" 
                  alt="App Map" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                <div className="absolute top-12 left-6 right-6 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Menu size={18} />
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-medium">
                    San Francisco, CA
                  </div>
                </div>
                {/* Pins */}
                <div className="absolute top-1/3 left-1/4">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 bg-sage rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white"
                  >
                    <MapPin size={14} />
                  </motion.div>
                </div>
                <div className="absolute bottom-1/4 right-1/3">
                  <div className="w-8 h-8 bg-muted-blue rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
                    <MapPin size={14} />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-sage/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted-blue/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-ink mb-8 leading-tight">
              A Mindfulness Map<br />of the World.
            </h2>
            <p className="text-lg text-ink/60 mb-8 leading-relaxed">
              Sublime Mind transforms the world into a living map of calm. Mark the exact places where you feel grounded — a quiet forest trail, a hidden beach, a city rooftop at sunset. Keep them private or share them with the world.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Lock size={20} />, text: "Private personal map for your secret sanctuaries." },
                { icon: <Globe size={20} />, text: "Shared global map to inspire others' journeys." },
                { icon: <Camera size={20} />, text: "Visual memories attached to every location." },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 text-ink/80">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-sage">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Globe className="text-muted-blue" />,
      title: "Interactive Peace Map",
      desc: "Explore a global map filled with peaceful locations shared by the community."
    },
    {
      icon: <Lock className="text-sage" />,
      title: "Personal & Private Maps",
      desc: "Keep your most meaningful locations visible only to you."
    },
    {
      icon: <Camera className="text-earth" />,
      title: "Photo Memories",
      desc: "Attach images to each place to capture its atmosphere and beauty."
    },
    {
      icon: <PenLine className="text-ink" />,
      title: "Reflections & Descriptions",
      desc: "Write why this place feels sublime — capture the memory and emotion."
    },
    {
      icon: <Sparkles className="text-muted-blue" />,
      title: "Privacy by Design",
      desc: "Control visibility of every location. Your peace, your choice."
    },
    {
      icon: <Compass className="text-sage" />,
      title: "Discovery Mode",
      desc: "Browse nearby peaceful places when travelling or exploring new cities."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-ink mb-6">Core Features</h2>
          <p className="text-lg text-ink/60 max-w-2xl mx-auto">Designed to help you reconnect with the world and yourself.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 p-8 rounded-[2rem] border border-white/20 hover:bg-white transition-all hover:shadow-xl hover:shadow-ink/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-ink mb-4">{f.title}</h3>
              <p className="text-ink/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdditionalFeatures = () => {
  const extras = [
    { icon: <Clock size={20} />, title: "Memory Timeline", desc: "See a timeline of all your sublime moments over months and years." },
    { icon: <Smile size={20} />, title: "Mood Tagging", desc: "Tag places with moods like 'calm,' 'energised,' or 'grateful.'" },
    { icon: <Navigation size={20} />, title: "Guided Local Discovery", desc: "Suggested peaceful locations near you based on environment." },
    { icon: <Volume2 size={20} />, title: "Ambient Sound Integration", desc: "Attach optional soundscapes like forest sounds to locations." },
    { icon: <BarChart3 size={20} />, title: "Wellbeing Insights", desc: "See patterns in where and when you feel most at peace." },
    { icon: <Sparkles size={20} />, title: "Mindful Prompts", desc: "Optional reflection prompts when adding a new place." },
  ];

  return (
    <section className="section-padding bg-ink text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-sage rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Forward Thinking</h2>
          <p className="text-lg text-white/60 max-w-2xl">Premium capabilities for the modern mindful explorer.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {extras.map((e, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="text-sage mb-4">{e.icon}</div>
              <h3 className="text-lg font-display font-medium mb-2">{e.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-ink mb-10">Technology That<br />Encourages Presence.</h2>
          <p className="text-xl md:text-2xl text-ink/70 leading-relaxed font-light italic">
            "At Vinisbir Technologies, we believe technology should deepen human experience — not distract from it. Sublime Mind is designed to reconnect people with the physical world and the quiet spaces within it."
          </p>
          <div className="mt-12 w-20 h-1 bg-sage mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section id="community" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/worldmap/1920/1080" 
          alt="World Map" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-ink mb-8">A Global Map of Shared Calm.</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-xl text-sage">Contribute</h4>
              <p className="text-ink/60 text-sm">Add to a collective archive of peaceful spaces around the globe.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-xl text-muted-blue">Appreciate</h4>
              <p className="text-ink/60 text-sm">Discover nature and environments through the eyes of others.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-xl text-earth">Archive</h4>
              <p className="text-ink/60 text-sm">Build a worldwide legacy of meaningful, quiet locations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Legal = () => {
  const items = ["Privacy Policy", "Terms & Conditions", "Data Protection Statement", "Cookie Policy"];
  return (
    <section id="legal" className="py-20 px-6 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-display font-medium mb-8 text-ink/40">Legal</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <a key={item} href="#" className="text-sm text-ink/60 hover:text-ink transition-colors underline underline-offset-4 decoration-ink/10 hover:decoration-ink">
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-ink mb-6">Get in Touch.</h2>
            <p className="text-lg text-ink/60 mb-8">For feedback, partnerships, or press enquiries.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-ink/80">
                <Mail size={20} className="text-sage" />
                <span>hello@vinisbir.tech</span>
              </div>
              <div className="flex items-center space-x-6 pt-6">
                <a href="#" className="text-ink/40 hover:text-ink transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-ink/40 hover:text-ink transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-ink/40 hover:text-ink transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-ink/60">Name</label>
                <input type="text" className="w-full bg-sand border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sage transition-all outline-none" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-ink/60">Email</label>
                <input type="email" className="w-full bg-sand border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sage transition-all outline-none" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink/60">Message</label>
              <textarea rows={4} className="w-full bg-sand border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sage transition-all outline-none resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="bg-ink text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-ink/90 transition-all w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-sand border-t border-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-ink/40 text-sm">
          Vinisbir Technologies © 2026
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm text-ink/40 hover:text-ink transition-colors">Privacy</a>
          <a href="#" className="text-sm text-ink/40 hover:text-ink transition-colors">Terms</a>
          <a href="#" className="text-sm text-ink/40 hover:text-ink transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <AppConcept />
        <Features />
        <AdditionalFeatures />
        <Philosophy />
        <Community />
        <Legal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
