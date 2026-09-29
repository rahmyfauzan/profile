
import { PROFILE_DATA } from '../data';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Experience() {
  const wrapper = useRef(null);
  const track = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.exp-panel');
    
    const triggerBase = {
      trigger: wrapper.current,
      pin: true,
      scrub: 1,
      end: () => "+=" + ((panels.length - 1) * window.innerHeight)
    };

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: triggerBase
    });

    // Progress bar uses its own ScrollTrigger (no pin, just tracks progress)
    gsap.to('.exp-progress-bar', {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper.current,
        scrub: 1,
        end: () => "+=" + ((panels.length - 1) * window.innerHeight)
      }
    });

  }, { scope: wrapper });

  return (
    <section ref={wrapper} className="overflow-hidden bg-black text-white h-screen relative">
      
      {/* Progress Bar Container */}
      <div className="absolute bottom-28 md:bottom-32 left-0 w-full h-[2px] bg-white/10 z-10">
        <div className="exp-progress-bar h-full bg-brand-gold w-full origin-left scale-x-0"></div>
      </div>

      <div ref={track} className="flex w-max h-full items-center">
        
        {/* Intro Panel */}
        <div className="exp-panel w-screen h-full flex flex-col justify-center px-10 md:px-32 shrink-0 relative">
          <h2 className="text-5xl sm:text-7xl md:text-[8vw] font-extrabold tracking-tighter leading-none text-slate-800" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            Professional
          </h2>
          <h2 className="text-5xl sm:text-7xl md:text-[8vw] font-extrabold tracking-tighter leading-none">
            Experience.
          </h2>
          
          <div className="absolute bottom-40 md:bottom-44 flex items-center gap-4 text-brand-gold animate-pulse">
            <span className="text-sm md:text-base tracking-widest uppercase font-medium">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        {/* Experience Panels */}
        {PROFILE_DATA.experience.map((exp) => (
          <div key={exp.id} className="exp-panel w-screen h-full flex justify-center items-center shrink-0 px-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-14 rounded-3xl w-full max-w-4xl shadow-2xl">
              <span className="text-brand-gold text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 block">
                {exp.period}
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">{exp.role}</h3>
              <h4 className="text-xl md:text-2xl text-slate-400 mb-8 font-medium">{exp.company}</h4>
              
              <ul className="space-y-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-300 text-lg md:text-xl leading-relaxed">
                    <span className="text-brand-gold">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}
