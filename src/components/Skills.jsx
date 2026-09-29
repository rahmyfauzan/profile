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
      case 'Wrench': return <Wrench className="w-10 h-10 text-brand-gold mb-6" />;
      case 'Award': return <Award className="w-10 h-10 text-brand-gold mb-6" />;
      case 'TrendingUp': return <TrendingUp className="w-10 h-10 text-brand-gold mb-6" />;
      case 'Globe': return <Globe className="w-10 h-10 text-brand-gold mb-6" />;
      default: return null;
    }
  };

  return (
    <section ref={container} id="skills" className="min-h-screen bg-black pt-32 pb-40 px-4 md:px-6 flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-12 md:mb-20 text-center text-white tracking-tight">
        Technical <span className="text-brand-gold">Skills.</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
        {PROFILE_DATA.skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl h-full flex flex-col hover:border-brand-gold/30 hover:bg-white/10 transition-all"
          >
            {getIcon(skill.icon)}
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
              {skill.category}
            </h3>
            <ul className="space-y-4 mt-auto">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300 text-lg md:text-xl leading-relaxed">
                  <span className="text-brand-gold font-bold mt-1">✦</span>
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
