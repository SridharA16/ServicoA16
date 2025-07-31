import React, { useState, useEffect } from 'react';
import { Calendar, Settings, BarChart3 } from 'lucide-react';

interface ImplementationSectionProps {
  isDarkMode: boolean;
}

const ImplementationSection: React.FC<ImplementationSectionProps> = ({ isDarkMode }) => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Calendar,
      phase: "Phase 1: Foundation",
      duration: "30 Days",
      description: "Deploy Client Acquisition Engine with practice management integration and professional compliance review",
      image: "/images/phase1.jpg"
    },
    {
      icon: Settings,
      phase: "Phase 2: Optimization", 
      duration: "60 Days",
      description: "Implement Operations Automation Hub with workflow analysis and team training",
      image: "/images/phase2.jpg"
    },
    {
      icon: BarChart3,
      phase: "Phase 3: Excellence",
      duration: "90 Days", 
      description: "Activate Client Success Platform with advanced analytics and strategic optimization",
      image: "/images/phase3.jpg"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [phases.length]);

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Implementation Approach
          </h2>
        </div>
        
        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left Side - Images */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activePhase === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : index < activePhase 
                      ? 'opacity-0 transform -translate-y-full'
                      : 'opacity-0 transform translate-y-full'
                }`}
              >
                <img
                  src={phase.image}
                  alt={phase.phase}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = `linear-gradient(135deg, ${
                        index === 0 ? '#3B82F6, #1D4ED8' :
                        index === 1 ? '#10B981, #059669' :
                        '#F59E0B, #D97706'
                      })`;
                    }
                  }}
                />
                {/* Overlay with phase number */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activePhase === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Scrolling Phase Containers */}
          <div className="relative h-[500px]">
            <div className="h-full overflow-hidden">
              <div 
                className="transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateY(-${activePhase * 100}%)`,
                  height: `${phases.length * 100}%`
                }}
              >
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className="h-full flex items-center"
                    style={{ height: `${100 / phases.length}%` }}
                  >
                    <div className={`w-full p-8 rounded-2xl shadow-2xl transition-all duration-500 ${
                      activePhase === index 
                        ? 'bg-white transform scale-105 shadow-2xl' 
                        : 'bg-white/90 transform scale-95'
                    }`}>
                      {/* Phase Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        activePhase === index
                          ? 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg'
                          : 'bg-gray-100'
                      }`}>
                        <phase.icon className={`w-8 h-8 transition-colors duration-500 ${
                          activePhase === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>

                      {/* Phase Content */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-black">
                            {phase.phase}
                          </h3>
                          <span className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                            activePhase === index
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {phase.duration}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {phase.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex items-center space-x-2 pt-4">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-1000 ${
                                activePhase === index
                                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-full'
                                  : activePhase > index
                                    ? 'bg-green-500 w-full'
                                    : 'bg-gray-300 w-0'
                              }`}
                            />
                          </div>
                          <span className="text-sm text-gray-500 font-medium">
                            {activePhase > index ? 'Complete' : activePhase === index ? 'In Progress' : 'Upcoming'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 flex flex-col space-y-4">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-white border-white scale-125'
                      : 'bg-transparent border-white/50 hover:border-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Complete Transformation in 90 Days
            </h3>
            <p className="text-white/80 text-lg">
              Our proven three-phase approach ensures seamless integration with your existing practice 
              while delivering measurable results at each milestone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;