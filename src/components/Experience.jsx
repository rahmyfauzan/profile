
import { PROFILE_DATA } from '../data';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Experience() {
  const wrapper = useRef(null);
  const track = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.exp-panel');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + track.current.offsetWidth
      }
    });
  }, { scope: wrapper });

  return (
    <section ref={wrapper} className="overflow-hidden bg-black text-white h-screen">
      <div ref={track} className="flex w-max h-full items-center">
        
        {/* Intro Panel */}
        <div className="exp-panel w-screen h-full flex flex-col justify-center px-10 md:px-32 shrink-0">
          <h2 className="text-7xl md:text-[10vw] font-extrabold tracking-tighter leading-none text-slate-800" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            Professional
          </h2>
          <h2 className="text-7xl md:text-[10vw] font-extrabold tracking-tighter leading-none">
            Experience.
          </h2>
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
