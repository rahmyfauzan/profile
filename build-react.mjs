import fs from 'fs';
import path from 'path';

const dirs = [
  'src',
  'src/components'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// 1. vite.config.js
fs.writeFileSync('vite.config.js', `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`);

// 2. tailwind.config.js
fs.writeFileSync('tailwind.config.js', `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B1120',      // Deep Slate
        'brand-gold': '#D4AF37',      // Elegant Gold
        'brand-accent': '#1E293B',    // Lighter Slate for cards
      }
    },
  },
  plugins: [],
}
`);

// 3. postcss.config.js
fs.writeFileSync('postcss.config.js', `
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`);

// 4. index.html
fs.writeFileSync('index.html', `
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rahmy Fauzanibudi Ahmad - Professional Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-brand-dark text-slate-100 font-sans selection:bg-brand-gold selection:text-brand-dark">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`);

// 5. src/main.jsx
fs.writeFileSync('src/main.jsx', `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`);

// 6. src/index.css
fs.writeFileSync('src/index.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { overflow-x: hidden; }

/* Custom Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #0B1120; }
::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: #D4AF37; }

/* Hide scrollbar for experience horizontal track */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`);

// 7. src/data.js
fs.writeFileSync('src/data.js', `
export const PROFILE_DATA = {
  name: "Rahmy Fauzanibudi Ahmad",
  shortName: "Rahmy",
  title: "Procurement & Supply Chain Professional",
  subtitle: "POP | Inventory Control | Auditing",
  photo: "https://media.licdn.com/dms/image/v2/D5635AQG93geaBqNBVw/profile-framedphoto-shrink_400_400/B56Z.t0JuDKIAU-/0/1785327557819?e=1791298800&v=beta&t=rFtnL6vh4WqIbe5duHz8ueP3V0EoC1wH009yz8b_y4w",
  about: "Profesional pengadaan barang dengan rekam jejak mengelola siklus PR-PO bervolume tinggi, menstandarisasi SOP, dan meningkatkan transparansi proses melalui analitik data. Lulusan Teknik Industri Pertanian Universitas Brawijaya.",
  contact: {
    email: "Rahmyfauzan45@gmail.com",
    linkedin: "https://linkedin.com/in/rahmyfauzan",
    whatsapp: "https://wa.me/6283832828027" // API wa.me
  },
  experience: [
    {
      id: 1,
      period: "Agt 2025 - Present",
      role: "Purchasing Officer",
      company: "PT Bagong Dekaka Makmur — Malang",
      points: [
        "Mengelola proses procurement untuk puluhan site operasional via sistem ERP.",
        "Mengeksekusi siklus end-to-end PR (90+/bulan) hingga PO (700+/bulan).",
        "Menurunkan biaya procurement 6.17% & lead time 14.2% via negosiasi.",
        "Mengembangkan dashboard analitik SCM real-time."
      ]
    },
    {
      id: 2,
      period: "Sep 2024 - Agt 2025",
      role: "Logistics Supervisor",
      company: "PT Japfa Comfeed Indonesia — Pasuruan",
      points: [
        "Memimpin operasional 3 gudang dan tim (3 operator, 3 driver).",
        "Mengeksekusi transaksi SAP/ERP logistik senilai ±Rp 2 Miliar/bulan (Akurasi 100%).",
        "Mengelola distribusi pakan ±29 ton/hari dan mencapai 96% on-time delivery."
      ]
    },
    {
      id: 3,
      period: "Feb 2024 - Jul 2024",
      role: "Customer Analyst",
      company: "PT Shopee International Indonesia — Surakarta",
      points: [
        "Menangani >70 pertanyaan pelanggan/hari melalui Chat, Email, dan Telepon.",
        "Mengelola 3 sistem backend kepuasan pelanggan.",
        "Mempertahankan produktivitas >90% dalam workload tiket yang tinggi."
      ]
    }
  ]
};
`);

// 8. src/components/Hero.jsx
fs.writeFileSync('src/components/Hero.jsx', `
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
`);

// 9. src/components/Experience.jsx
fs.writeFileSync('src/components/Experience.jsx', `
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
`);

// 10. src/components/FloatingContact.jsx
fs.writeFileSync('src/components/FloatingContact.jsx', `
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
`);

// 11. src/App.jsx
fs.writeFileSync('src/App.jsx', `
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
`);
