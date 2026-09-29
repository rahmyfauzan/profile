import { PROFILE_DATA } from '../data';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Wrench, Award, TrendingUp, Globe } from 'lucide-react';

export default function Skills() {
  const container = useRef(null);

  useGSAP(() => {
    // Setiap kartu muncul satu per satu saat di-scroll
    gsap.utils.toArray('.skill-card').forEach((card) => {
      gsap.fromTo(card, 
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className="w-10 h-10 text-brand-gold mb-4" />;
      case 'Award': return <Award className="w-10 h-10 text-brand-gold mb-4" />;
      case 'TrendingUp': return <TrendingUp className="w-10 h-10 text-brand-gold mb-4" />;
      case 'Globe': return <Globe className="w-10 h-10 text-brand-gold mb-4" />;
      default: return null;
    }
  };

  return (
    <section ref={container} id="skills" className="bg-black pt-32 pb-40 px-4 md:px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-12 md:mb-20 text-center text-white tracking-tight">
        Technical <span className="text-brand-gold">Skills.</span>
      </h2>
      
      {/* 1 kartu per baris, ditampilkan secara vertikal */}
      <div className="flex flex-col gap-8 md:gap-10 w-full max-w-4xl mx-auto">
        {PROFILE_DATA.skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl hover:border-brand-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              {getIcon(skill.icon)}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {skill.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, idx) => (
                <span 
                  key={idx} 
                  className="bg-white/10 border border-white/10 text-slate-200 px-4 py-2 rounded-full text-sm md:text-base font-medium hover:bg-brand-gold/20 hover:border-brand-gold/40 hover:text-white transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
