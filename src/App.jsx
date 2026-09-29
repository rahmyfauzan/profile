
import Hero from './components/Hero';
import Experience from './components/Experience';
import FloatingContact from './components/FloatingContact';
import { PROFILE_DATA } from './data';

function App() {
  return (
    <div className="relative pb-32">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-brand-gold">Summary.</h2>
        <p className="text-lg md:text-xl leading-relaxed text-slate-300">
          {PROFILE_DATA.about}
        </p>
      </section>

      <Experience />
      
      <FloatingContact />
    </div>
  );
}

export default App;
