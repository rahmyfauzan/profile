import { PROFILE_DATA } from '../data';
import { Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollForward = () => {
    const h = window.innerHeight;
    const currentY = window.scrollY;
    const target = Math.floor((currentY + 10) / h + 1) * h;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const scrollBackward = () => {
    const h = window.innerHeight;
    const currentY = window.scrollY;
    const target = Math.ceil((currentY - 10) / h - 1) * h;
    window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const btnClass = "flex items-center gap-1.5 md:gap-2 text-slate-300 hover:text-brand-dark hover:bg-brand-gold p-1.5 md:p-2 rounded-full transition-all";

  return (
    <>
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-4">
        
        {/* Back */}
        <button 
          onClick={scrollBackward}
          className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-2 md:p-3 rounded-full text-slate-300 hover:text-brand-dark hover:bg-brand-gold transition-all shadow-2xl cursor-pointer"
          aria-label="Scroll Backward"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Contact Bar */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-2 py-1.5 md:px-4 md:py-2 rounded-full shadow-2xl flex items-center gap-1 md:gap-3">
          <a href={"mailto:" + PROFILE_DATA.contact.email} className={btnClass} aria-label="Email">
            <Mail size={18} className="md:hidden" />
            <Mail size={22} className="hidden md:block" />
            <span className="hidden md:block text-sm font-medium">Email</span>
          </a>
          
          <div className="w-px h-5 bg-slate-700 hidden md:block"></div>
          
          <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noreferrer" className={btnClass} aria-label="LinkedIn">
            <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span className="hidden md:block text-sm font-medium">LinkedIn</span>
          </a>

          <div className="w-px h-5 bg-slate-700 hidden md:block"></div>

          <a href={PROFILE_DATA.contact.whatsapp} target="_blank" rel="noreferrer" className={btnClass} aria-label="WhatsApp">
            <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span className="hidden md:block text-sm font-medium">WhatsApp</span>
          </a>
        </div>

        {/* Forward */}
        <button 
          onClick={scrollForward}
          className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-2 md:p-3 rounded-full text-slate-300 hover:text-brand-dark hover:bg-brand-gold transition-all shadow-2xl cursor-pointer"
          aria-label="Scroll Forward"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Back To Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-16 md:bottom-6 right-3 md:right-6 z-50 bg-brand-gold text-brand-dark p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-white hover:scale-110 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </>
  );
}
