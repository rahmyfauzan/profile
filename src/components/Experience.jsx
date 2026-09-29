
import { PROFILE_DATA } from '../data';

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
        Professional <span className="text-brand-gold">Experience.</span>
      </h2>
      
      <div className="space-y-8">
        {PROFILE_DATA.experience.map((exp) => (
          <div key={exp.id} className="bg-brand-accent/50 border border-slate-700/50 p-6 md:p-10 rounded-2xl hover:border-brand-gold/50 transition-colors">
            <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase mb-2 block">
              {exp.period}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h3>
            <h4 className="text-lg text-slate-400 mb-6 font-medium italic">{exp.company}</h4>
            
            <ul className="space-y-3">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300">
                  <span className="text-brand-gold mt-1">✦</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
