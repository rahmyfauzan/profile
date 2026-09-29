import { PROFILE_DATA } from '../data';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      }
    });

    tl.to(".hero-giant-name", { scale: 3, opacity: 0, filter: "blur(10px)", duration: 1 })
      .to(".hero-photo", { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1 }, "-=0.8")
      .to(".hero-role", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

  }, { scope: container });

  return (
    <section ref={container} className="h-screen w-full relative flex justify-center items-center overflow-hidden bg-black">
      
      {/* Giant Name */}
      <div className="hero-giant-name absolute z-10 text-center w-full px-4 flex flex-col items-center">
        <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] font-extrabold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase">
          RAHMY
        </h1>
        <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] font-extrabold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase">
          FAUZANIBUDI
        </h1>
        <h2 className="text-[3.8vw] sm:text-[3.5vw] md:text-[2.5vw] font-bold leading-tight tracking-widest text-brand-gold uppercase mt-3">
          AHMAD, S.T.
        </h2>
      </div>

      {/* Photo & Role */}
      <div className="hero-image-container absolute z-20 flex flex-col items-center px-6">
        <img 
          src={PROFILE_DATA.photo} 
          alt={PROFILE_DATA.name} 
          className="hero-photo w-36 h-36 md:w-60 md:h-60 rounded-full object-cover shadow-[0_0_50px_rgba(255,255,255,0.15)] opacity-0 scale-[3] blur-xl"
        />
        <div className="hero-role mt-4 md:mt-6 text-center opacity-0 translate-y-8">
          <h2 className="text-base md:text-2xl text-brand-gold font-semibold mb-1 drop-shadow-md">
            {PROFILE_DATA.title}
          </h2>
          <p className="text-slate-300 text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium">
            {PROFILE_DATA.subtitle}
          </p>
        </div>
      </div>

    </section>
  );
}
