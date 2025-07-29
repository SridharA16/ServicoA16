import React from 'react';
import { Phone, Settings, Users, ArrowRight } from 'lucide-react';

interface SystemsSectionProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const SystemsSection: React.FC<SystemsSectionProps> = ({ onBookingClick, isDarkMode }) => {
  const systems = [
    {
      icon: Phone,
      title: "Client Acquisition Engine",
      subtitle: "Transform prospects into qualified opportunities automatically",
      features: [
        "Calls new leads within 60 seconds with AI voice agents",
        "Qualifies prospects using professional services criteria", 
        "Delivers personalized nurture sequences based on engagement",
        "Generates customized proposals within minutes"
      ],
      results: [
        "MIT study shows 21x higher conversion with 60-second response times",
        "200-400% improvement in qualified lead conversion rates", 
        "$50K-150K additional annual revenue from improved conversion"
      ],
      advantages: [
        "Industry-specific qualification scripts for legal, accounting, and consulting",
        "Maintains consultative selling approach with automation",
        "Integrates seamlessly with practice management systems"
      ]
    },
    {
      icon: Settings,
      title: "Operations Automation Hub",
      subtitle: "Eliminate administrative overload and optimize workflows",
      features: [
        "Automates scheduling, billing, and project management",
        "Processes client documents and intake forms intelligently",
        "Optimizes resource allocation across multiple projects", 
        "Provides instant access to relevant case studies and expertise"
      ],
      results: [
        "Camunda study: 389% ROI within 30 days from workflow automation",
        "9-day payback period for communication workflows",
        "Harvard Law: 60% reduction in document creation and review time"
      ],
      advantages: [
        "Reduces administrative time by 60%",
        "Enables handling 3x client volume without proportional staff increases",
        "Maintains compliance with professional service regulations"
      ]
    },
    {
      icon: Users,
      title: "Client Success Platform", 
      subtitle: "Deliver exceptional client experiences that drive retention and referrals",
      features: [
        "Provides 24/7 client support through intelligent chatbots",
        "Ensures consistent onboarding experiences for all clients",
        "Systematically gathers feedback and identifies improvement opportunities",
        "Generates referrals at optimal timing with personalized messaging"
      ],
      results: [
        "Helpshift study: 70% decrease in response times, 50% reduction in human agent involvement",
        "Maintains 90%+ client satisfaction during scaling", 
        "NetSuite research: 300% increase in systematic referral generation"
      ],
      advantages: [
        "Maintains professional communication standards",
        "Supports long-term advisory relationship development", 
        "Identifies expansion opportunities automatically"
      ]
    }
  ];

  return (
    <section className="pt-32 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Complete AI Growth Infrastructure Systems
          </h2>
        </div>
        
        <div className="space-y-16">
          {systems.map((system, index) => (
            <div key={index} className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-white border border-gray-200 hover:border-purple-500/50' 
                : 'bg-white hover:shadow-xl'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-red-100'
                }`}>
                  <system.icon className={`w-6 h-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">System {index + 1}: {system.title}</h3>
                  <p className="text-lg text-black">{system.subtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-black">What It Does:</h4>
                  <ul className="space-y-2">
                    {system.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <ArrowRight className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 transition-colors duration-300 ${
                          isDarkMode ? 'text-purple-400' : 'text-red-600'
                        }`} />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-black">Proven Results:</h4>
                  <ul className="space-y-2">
                    {system.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start">
                        <ArrowRight className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 transition-colors duration-300 ${
                          isDarkMode ? 'text-purple-400' : 'text-red-600'
                        }`} />
                        <span className="text-black">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-black">Professional Services Advantage:</h4>
                  <ul className="space-y-2">
                    {system.advantages.map((advantage, aIndex) => (
                      <li key={aIndex} className="flex items-start">
                        <ArrowRight className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 transition-colors duration-300 ${
                          isDarkMode ? 'text-purple-400' : 'text-red-600'
                        }`} />
                        <span className="text-black">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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