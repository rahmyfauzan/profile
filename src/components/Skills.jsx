import { PROFILE_DATA } from '../data';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Wrench, Award, TrendingUp, Globe } from 'lucide-react';

export default function Skills() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: i * 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 65%",
          }
        }
      );
    });
  }, { scope: container });

  const iconClass = "w-5 h-5 md:w-7 md:h-7 text-brand-gold shrink-0";

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className={iconClass} />;
      case 'Award': return <Award className={iconClass} />;
      case 'TrendingUp': return <TrendingUp className={iconClass} />;
      case 'Globe': return <Globe className={iconClass} />;
      default: return null;
    }
  };

  return (
    <section ref={container} id="skills" className="h-screen bg-black px-4 md:px-8 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-8 text-center text-white tracking-tight">
        Technical <span className="text-brand-gold">Skills.</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 w-full max-w-5xl">
        {PROFILE_DATA.skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col hover:border-brand-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-2.5 md:gap-3 mb-2.5 md:mb-4">
              {getIcon(skill.icon)}
              <h3 className="text-sm md:text-xl font-bold text-white tracking-tight leading-tight">
                {skill.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {skill.items.map((item, idx) => (
                <span 
                  key={idx} 
                  className="bg-white/10 border border-white/10 text-slate-200 text-xs md:text-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-medium hover:bg-brand-gold/20 hover:border-brand-gold/40 hover:text-white transition-all"
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
