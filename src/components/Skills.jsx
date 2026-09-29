import { PROFILE_DATA } from '../data';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Wrench, Award, TrendingUp, Globe } from 'lucide-react';

export default function Skills() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.skill-card', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className="w-8 h-8 text-brand-gold mb-6" />;
      case 'Award': return <Award className="w-8 h-8 text-brand-gold mb-6" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-brand-gold mb-6" />;
      case 'Globe': return <Globe className="w-8 h-8 text-brand-gold mb-6" />;
      default: return null;
    }
  };

  return (
    <section ref={container} id="skills" className="min-h-screen bg-black py-20 px-6 flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-16 text-center text-white tracking-tight">
        Technical <span className="text-brand-gold">Skills.</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl">
        {PROFILE_DATA.skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card bg-slate-900/50 border border-slate-700/50 p-8 rounded-3xl hover:border-brand-gold/30 hover:bg-slate-800/50 transition-colors"
          >
            {getIcon(skill.icon)}
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
              {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="text-brand-gold font-bold mt-1">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
