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
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
          }
        }
      );
    });
  }, { scope: container });

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6 md:w-8 md:h-8 text-brand-gold shrink-0" />;
      case 'Award': return <Award className="w-6 h-6 md:w-8 md:h-8 text-brand-gold shrink-0" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-brand-gold shrink-0" />;
      case 'Globe': return <Globe className="w-6 h-6 md:w-8 md:h-8 text-brand-gold shrink-0" />;
      default: return null;
    }
  };

  return (
    <section ref={container} id="skills" className="h-screen bg-black px-4 md:px-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-10 text-center text-white tracking-tight">
        Technical <span className="text-brand-gold">Skills.</span>
      </h2>
      
      <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-5xl">
        {PROFILE_DATA.skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col hover:border-brand-gold/30 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
              {getIcon(skill.icon)}
              <h3 className="text-sm md:text-xl font-extrabold text-white tracking-tight leading-tight">
                {skill.category}
              </h3>
            </div>
            <ul className="space-y-1.5 md:space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs md:text-base leading-relaxed">
                  <span className="text-brand-gold text-[10px] md:text-sm mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
