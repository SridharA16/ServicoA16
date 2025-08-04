import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  CheckCircle, 
  Download, 
  Calendar,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    { name: 'Client Acquisition Engine', action: () => scrollToSection('systems-section') },
    { name: 'Operations Automation Hub', action: () => scrollToSection('systems-section') },
    { name: 'Client Success Platform', action: () => scrollToSection('systems-section') },
    { name: 'AI Workflows & Services', action: () => scrollToSection('adhoc-services-section') }
  ];

  const resources = [
    { name: 'Case Studies & ROI', action: () => scrollToSection('case-studies-section') },
    { name: 'Implementation Process', action: () => scrollToSection('implementation-section') },
    { name: 'FAQ', action: () => scrollToSection('faq-section') },
    { name: 'Download System Proposals', action: () => window.open('/pdfs/client-acquisition-engine.pdf', '_blank') }
  ];

  const company = [
    { name: 'Why Choose Us', action: () => scrollToSection('why-choose-section') },
    { name: 'Schedule Consultation', action: () => scrollToSection('hero-section') },
    { name: 'Contact Information', action: () => scrollToSection('footer-section') }
  ];

  const securityFeatures = [
    'SOC 2 Type II Certified',
    'GDPR Compliant', 
    'HIPAA Compliant',
    'Attorney-Client Privilege Protected',
    'Enterprise-Grade Encryption'
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer id="footer-section" className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Subtle floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - Classic Layout */}
        <div className="py-16">
          {/* Company Logo and Tagline - Top Left */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
              Serviqo
            </h2>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
              Smart AI Solutions for Professional Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Our Solutions */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                Our Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <button 
                      onClick={solution.action}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base flex items-center group w-full text-left"
                    >
                      <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      {solution.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <button 
                      onClick={resource.action}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base flex items-center group w-full text-left"
                    >
                      <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      {resource.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={item.action}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base flex items-center group w-full text-left"
                    >
                      <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Security */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                Contact & Security
              </h3>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919059886228" className="text-gray-300 hover:text-white transition-colors text-base">
                    +91 9059886228
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:sridhar.serviqo@gmail.com" className="text-gray-300 hover:text-white transition-colors text-base">
                    sridhar.serviqo@gmail.com
                  </a>
                </div>
              </div>

              {/* Security Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-base flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  Security & Compliance
                </h4>
                <div className="space-y-2">
                  {securityFeatures.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-base">Connect With Us</h4>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                Stay Ahead of the AI Revolution
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Get weekly insights on AI innovations, implementation best practices, and industry case studies.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-base"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 whitespace-nowrap text-base font-semibold"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* 24/7 Support Banner */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                  24/7 Technical Support for Existing Clients
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300 text-sm">Emergency Hotline</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">Live Chat Available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">Support Email</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Support Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Serviqo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-4 text-gray-400 text-sm mb-4">
              <span>Results may vary based on implementation</span>
              <span>•</span>
              <span>ROI calculations based on documented case studies</span>
              <span>•</span>
              <span>All client information remains confidential</span>
            </div>
            
            <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
              This website and our services comply with all applicable professional services regulations including state bar association rules, 
              CPA professional standards, and federal compliance requirements. Your privacy is protected under our comprehensive Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;