import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SystemsSectionProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const SystemsSection: React.FC<SystemsSectionProps> = ({ onBookingClick, isDarkMode }) => {
  return (
    <section className="py-16 bg-black relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Complete AI Growth Infrastructure Systems
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Three integrated systems working together to transform your practice
          </p>
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={onBookingClick}
            className="btn-primary group"
          >
            Get Your Custom Implementation Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;