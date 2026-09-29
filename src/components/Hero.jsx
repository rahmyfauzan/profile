
import { PROFILE_DATA } from '../data';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-name", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(".hero-img", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-role", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5");
  }, []);

  return (
    <section ref={container} className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="hero-img mb-8 relative p-2 rounded-full bg-gradient-to-tr from-brand-gold to-transparent animate-[spin_10s_linear_infinite]">
        <img 
          src={PROFILE_DATA.photo} 
          alt={PROFILE_DATA.name} 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover animate-[spin_10s_linear_infinite_reverse]"
        />
      </div>
      
      <h1 className="hero-name text-4xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
        {PROFILE_DATA.name.split(' ').map((word, i) => (
           <span key={i} className="inline-block mr-3">{word}</span>
        ))}
      </h1>
      
      <h2 className="hero-role text-xl md:text-3xl text-brand-gold font-medium mb-2">
        {PROFILE_DATA.title}
      </h2>
      <p className="hero-role text-slate-400 text-sm md:text-base tracking-widest uppercase">
        {PROFILE_DATA.subtitle}
      </p>
    </section>
  );
}
