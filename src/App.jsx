
import Hero from './components/Hero';
import Experience from './components/Experience';
import FloatingContact from './components/FloatingContact';
import { PROFILE_DATA } from './data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  useGSAP(() => {
    // Fade up animations for standard text blocks
    gsap.utils.toArray('.gs-reveal').forEach((elem) => {
      gsap.fromTo(elem,
        { autoAlpha: 0, y: 50 },
        { 
          duration: 1, 
          autoAlpha: 1, 
          y: 0, 
          scrollTrigger: { trigger: elem, start: "top 80%", scrub: 1 } 
        }
      );
    });
  });

  return (
    <div className="relative bg-black min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center gs-reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Mendorong efisiensi logistik.<br/>
          <span className="text-slate-500">Menekan biaya pengadaan.</span>
        </h2>
        <p className="text-lg md:text-2xl leading-relaxed text-slate-400 max-w-4xl">
          {PROFILE_DATA.about}
        </p>
      </section>

      <Experience />
      
      <div className="h-screen bg-black flex items-center justify-center gs-reveal">
         <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Let's build something great.</h2>
      </div>
      
      <FloatingContact />
    </div>
  );
}

export default App;
