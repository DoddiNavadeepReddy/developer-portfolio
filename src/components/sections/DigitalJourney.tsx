import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { DIGITAL_JOURNEY } from '../../data/portfolioData';

export const DigitalJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 border-t border-[#D4AF37]/15 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Premium Gold Touch */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="tracking-widest uppercase">The Engineering Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            MY <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)]">DIGITAL JOURNEY</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-3 max-w-xl mx-auto">
            From foundational computer science concepts to hardware microcontrollers, verified algorithms, and open source collaboration.
          </p>
        </div>

        {/* 5 Prominent Gold Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {DIGITAL_JOURNEY.map((step) => (
            <div
              key={step.number}
              className="group relative p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-1"
            >
              {/* Subtle top gold accent bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Large Gold Numbering */}
                <div className="text-3xl sm:text-4xl font-extrabold font-mono gold-gradient-text tracking-tighter mb-3 drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white tracking-wider uppercase mb-2 group-hover:text-[#F4D77D] transition-colors flex items-center gap-1.5">
                  <span>{step.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>

                {/* Subtitle / Items */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {step.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-[#F4D77D]/90 bg-[#D4AF37]/10 border border-[#D4AF37]/25"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#A5A5A5] leading-relaxed pt-3 border-t border-white/[0.06] font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
