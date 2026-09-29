
import { PROFILE_DATA } from '../data';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-2 md:px-6 md:py-3 rounded-full shadow-2xl flex items-center gap-4 md:gap-8">
        <a 
          href={"mailto:" + PROFILE_DATA.contact.email}
          className="flex items-center gap-2 text-slate-300 hover:text-brand-gold transition-colors p-2"
          aria-label="Email"
        >
          <Mail size={24} />
          <span className="hidden md:block font-medium">Email</span>
        </a>
        
        <div className="w-px h-6 bg-slate-700 hidden md:block"></div>
        
        <a 
          href={PROFILE_DATA.contact.linkedin}
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 text-slate-300 hover:text-[#0a66c2] transition-colors p-2"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
          <span className="hidden md:block font-medium">LinkedIn</span>
        </a>

        <div className="w-px h-6 bg-slate-700 hidden md:block"></div>

        <a 
          href={PROFILE_DATA.contact.whatsapp}
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 bg-brand-gold text-brand-dark px-4 py-2 rounded-full hover:bg-white transition-colors font-semibold"
        >
          <MessageCircle size={20} />
          <span className="hidden md:block">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
