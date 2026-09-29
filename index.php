<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahmy Fauzanibudi - Profesional Procurement</title>
    
    <!-- Google Fonts: Inter (Memberikan kesan modern, bersih, mirip San Francisco milik Apple) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --bg-color: #000000;
            --text-primary: #f5f5f7;
            --text-secondary: #86868b;
            --accent: #ffffff;
            --card-bg: rgba(255, 255, 255, 0.03);
            --card-border: rgba(255, 255, 255, 0.08);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* ---------------------------
           1. HERO SECTION (Pin)
           --------------------------- */
        .hero-section {
            height: 100vh;
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .hero-name-container {
            position: absolute;
            text-align: center;
            z-index: 10;
        }

        .hero-name {
            font-size: 8vw;
            font-weight: 800;
            letter-spacing: -2px;
            background: linear-gradient(180deg, #fff 0%, #86868b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
            white-space: nowrap;
        }
        
        .hero-name span {
            display: block;
            font-size: 5vw;
            letter-spacing: 0px;
        }

        .hero-image-container {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 5;
        }

        .hero-photo {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            opacity: 0;
            transform: scale(3);
            filter: blur(20px);
            box-shadow: 0 0 50px rgba(255,255,255,0.1);
        }

        .hero-role {
            margin-top: 2rem;
            font-size: 1.5rem;
            font-weight: 400;
            color: var(--text-secondary);
            opacity: 0;
            transform: translateY(30px);
            text-align: center;
        }

        .hero-subrole {
            font-size: 1rem;
            color: #555;
            margin-top: 0.5rem;
            opacity: 0;
            transform: translateY(20px);
        }

        /* ---------------------------
           2. ABOUT SECTION
           --------------------------- */
        .about-section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 10%;
            text-align: center;
        }

        .about-headline {
            font-size: 4vw;
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -1px;
            color: var(--text-primary);
            margin-bottom: 2rem;
        }
        
        .about-headline span {
            color: var(--text-secondary);
        }

        .about-desc {
            font-size: 1.5rem;
            line-height: 1.6;
            color: var(--text-secondary);
            max-width: 800px;
            margin: 0 auto;
        }

        /* ---------------------------
           3. HORIZONTAL EXPERIENCE 
           --------------------------- */
        .experience-wrapper {
            overflow: hidden;
            background: #000;
        }

        .experience-track {
            display: flex;
            width: fit-content;
            height: 100vh;
            align-items: center;
        }

        .exp-panel {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            padding: 2rem;
        }

        .exp-title-panel {
            flex-direction: column;
        }

        .exp-main-title {
            font-size: 8vw;
            font-weight: 800;
            letter-spacing: -3px;
            color: #111;
            -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }

        .exp-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 30px;
            padding: 4rem;
            width: 100%;
            max-width: 900px;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }

        .exp-date {
            color: var(--text-secondary);
            font-size: 1rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .exp-role {
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            line-height: 1.1;
            letter-spacing: -1px;
        }

        .exp-company {
            font-size: 1.5rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }

        .exp-list {
            list-style: none;
        }

        .exp-list li {
            font-size: 1.2rem;
            color: #d1d1d6;
            margin-bottom: 1rem;
            padding-left: 2rem;
            position: relative;
            line-height: 1.5;
        }

        .exp-list li::before {
            content: "✦";
            position: absolute;
            left: 0;
            color: var(--text-secondary);
            font-size: 1rem;
        }

        /* ---------------------------
           4. SKILLS & CONTACT
           --------------------------- */
        .skills-contact-section {
            padding: 10rem 5%;
            background: #000;
            text-align: center;
        }

        .section-heading {
            font-size: 3rem;
            font-weight: 600;
            letter-spacing: -1px;
            margin-bottom: 4rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto 10rem;
        }

        .skill-item {
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.05);
            padding: 3rem 2rem;
            border-radius: 20px;
            transition: all 0.3s ease;
        }
        
        .skill-item:hover {
            background: rgba(255,255,255,0.05);
            transform: translateY(-10px);
        }

        .skill-icon {
            font-size: 2.5rem;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
        }

        .skill-item h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .skill-item p {
            color: var(--text-secondary);
            font-size: 1rem;
            line-height: 1.6;
        }

        .contact-cta {
            font-size: 4rem;
            font-weight: 800;
            letter-spacing: -2px;
            margin-bottom: 3rem;
            background: linear-gradient(90deg, #fff, #86868b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .apple-btn {
            display: inline-block;
            background: var(--text-primary);
            color: #000;
            text-decoration: none;
            padding: 1.2rem 3rem;
            border-radius: 30px;
            font-size: 1.2rem;
            font-weight: 600;
            transition: transform 0.3s ease;
        }
        
        .apple-btn:hover {
            transform: scale(1.05);
        }

        .footer-links {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 1.1rem;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: var(--text-primary);
        }

        /* Scroll indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--text-secondary);
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-10px) translateX(-50%); }
            60% { transform: translateY(-5px) translateX(-50%); }
        }

        @media (max-width: 768px) {
            .hero-name { font-size: 12vw; }
            .hero-name span { font-size: 6vw; }
            .about-headline { font-size: 6vw; }
            .exp-card { padding: 2rem; }
            .exp-role { font-size: 2rem; }
            .contact-cta { font-size: 3rem; }
        }
    </style>
</head>
<body>

    <!-- 1. HERO SECTION -->
    <section class="hero-section" id="hero">
        <div class="hero-name-container">
            <h1 class="hero-name">RAHMY FAUZANIBUDI <span>AHMAD, S.T.</span></h1>
        </div>
        
        <div class="hero-image-container">
            <img class="hero-photo" src="https://media.licdn.com/dms/image/v2/D5635AQG93geaBqNBVw/profile-framedphoto-shrink_400_400/B56Z.t0JuDKIAU-/0/1785327557819?e=1791298800&v=beta&t=rFtnL6vh4WqIbe5duHz8ueP3V0EoC1wH009yz8b_y4w" alt="Rahmy Profile">
            <h2 class="hero-role">Procurement & Supply Chain Professional</h2>
            <p class="hero-subrole">POP | Inventory Control | Auditing</p>
        </div>

        <div class="scroll-indicator">
            <span>Scroll Down</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>

    <!-- 2. ABOUT SECTION -->
    <section class="about-section">
        <h2 class="about-headline gs_reveal">
            Mendorong efisiensi logistik.<br>
            <span>Menekan biaya pengadaan.</span><br>
            Membangun sistem yang terukur.
        </h2>
        <p class="about-desc gs_reveal">
            Profesional pengadaan barang dengan rekam jejak mengelola siklus PR-PO bervolume tinggi, menstandarisasi SOP, dan meningkatkan transparansi proses melalui analitik data. Lulusan Teknik Industri Pertanian Universitas Brawijaya.
        </p>
    </section>

    <!-- 3. EXPERIENCE SECTION (Horizontal Scroll) -->
    <section class="experience-wrapper">
        <div class="experience-track">
            
            <!-- Panel Intro -->
            <div class="exp-panel exp-title-panel">
                <h2 class="exp-main-title">Professional</h2>
                <h2 class="exp-main-title" style="color:var(--text-primary); -webkit-text-stroke:0;">Experience.</h2>
            </div>

            <!-- Panel 1 -->
            <div class="exp-panel">
                <div class="exp-card">
                    <p class="exp-date">Agustus 2025 - Present</p>
                    <h3 class="exp-role">Purchasing Officer</h3>
                    <h4 class="exp-company">PT Bagong Dekaka Makmur — Malang</h4>
                    <ul class="exp-list">
                        <li>Mengelola proses procurement untuk puluhan site operasional via sistem ERP.</li>
                        <li>Mengeksekusi siklus end-to-end PR (90+/bulan) hingga PO (700+/bulan).</li>
                        <li>Menurunkan biaya procurement 6.17% & lead time 14.2% via negosiasi.</li>
                        <li>Mengembangkan dashboard analitik SCM real-time (Google Sheets & Apps Script).</li>
                    </ul>
                </div>
            </div>

            <!-- Panel 2 -->
            <div class="exp-panel">
                <div class="exp-card">
                    <p class="exp-date">September 2024 - Agustus 2025</p>
                    <h3 class="exp-role">Logistics Supervisor</h3>
                    <h4 class="exp-company">PT Japfa Comfeed Indonesia — Pasuruan</h4>
                    <ul class="exp-list">
                        <li>Memimpin operasional 3 gudang dan tim (3 operator, 3 driver).</li>
                        <li>Mengeksekusi transaksi SAP/ERP logistik senilai ±Rp 2 Miliar/bulan (Akurasi 100%).</li>
                        <li>Mengelola distribusi pakan ±29 ton/hari dan mencapai 96% on-time delivery.</li>
                    </ul>
                </div>
            </div>

            <!-- Panel 3 -->
            <div class="exp-panel">
                <div class="exp-card">
                    <p class="exp-date">Februari 2024 - Juli 2024</p>
                    <h3 class="exp-role">Customer Analyst</h3>
                    <h4 class="exp-company">PT Shopee International Indonesia — Surakarta</h4>
                    <ul class="exp-list">
                        <li>Menangani >70 pertanyaan pelanggan/hari melalui Chat, Email, dan Telepon.</li>
                        <li>Mengelola 3 sistem backend (ShopeePay, SPayLater, CSPortal).</li>
                        <li>Mempertahankan produktivitas >90% dalam workload tiket yang tinggi.</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    <!-- 4. SKILLS & CONTACT -->
    <section class="skills-contact-section">
        
        <h2 class="section-heading gs_reveal_up">Core Competencies.</h2>
        
        <div class="skills-grid">
            <div class="skill-item gs_reveal_up">
                <i class="fas fa-boxes-packing skill-icon"></i>
                <h3>Supply Chain</h3>
                <p>Procurement, Inventory Control, Vendor Management, QC, & Logistics Distribution.</p>
            </div>
            <div class="skill-item gs_reveal_up">
                <i class="fas fa-microchip skill-icon"></i>
                <h3>Tools & Systems</h3>
                <p>SAP (MM), Accurate, Microsoft Excel Pro, Looker Studio, Google Apps Script.</p>
            </div>
            <div class="skill-item gs_reveal_up">
                <i class="fas fa-certificate skill-icon"></i>
                <h3>Certifications</h3>
                <p>POP, GMP, QA in Food Industry, ISO 31000:2018 Risk Management.</p>
            </div>
        </div>

        <div style="margin-top: 15rem;">
            <h2 class="contact-cta gs_reveal_up">Let's build<br>something great.</h2>
            <a href="mailto:Rahmyfauzan45@gmail.com" class="apple-btn gs_reveal_up">Connect With Me</a>
            
            <div class="footer-links gs_reveal_up">
                <a href="https://linkedin.com/in/rahmyfauzan" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a href="tel:+6283832828027"><i class="fab fa-whatsapp"></i> +62 838 3282 8027</a>
            </div>
        </div>
    </section>

    <!-- GSAP Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <script>
        gsap.registerPlugin(ScrollTrigger);

        // 1. ANIMASI HERO SECTION (Zoom Out Reveal)
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "+=150%", // Panjang durasi scroll animasi
                scrub: 1, // Animasi terkait dengan kecepatan scroll
                pin: true, // Layar terkunci sampai animasi selesai
            }
        });

        // Step 1: Teks Raksasa membesar (nge-zoom in ke mata) dan memudar
        heroTl.to(".hero-name", { scale: 3, opacity: 0, filter: "blur(10px)", duration: 1 })
        
        // Step 2: Foto yang tadinya raksasa dan blur, mengecil dan menjadi jelas
              .to(".hero-photo", { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1 }, "-=0.8")
        
        // Step 3: Munculnya teks profesi di bawah foto
              .to(".hero-role", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
              .to(".hero-subrole", { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        
        // Menghilangkan indikator scroll
              .to(".scroll-indicator", { opacity: 0, duration: 0.2 }, 0);


        // 2. ANIMASI ABOUT (Fade in perlahan)
        gsap.utils.toArray('.gs_reveal').forEach(function(elem) {
            gsap.fromTo(elem, 
                { autoAlpha: 0, y: 50 }, 
                { duration: 1, autoAlpha: 1, y: 0, 
                  scrollTrigger: {
                      trigger: elem,
                      start: "top 80%", // Animasi mulai saat elemen masuk 80% layar
                      end: "bottom 50%",
                      scrub: 1 // Efek halus terkait scroll
                  }
                }
            );
        });

        // 3. ANIMASI HORIZONTAL EXPERIENCE (Pinned)
        const track = document.querySelector(".experience-track");
        const panels = gsap.utils.toArray(".exp-panel");

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".experience-wrapper",
                pin: true,
                scrub: 1,
                // End: bergantung pada seberapa lebar track agar proporsional
                end: () => "+=" + track.offsetWidth 
            }
        });

        // 4. ANIMASI SKILLS & FOOTER (Fade up)
        gsap.utils.toArray('.gs_reveal_up').forEach(function(elem) {
            gsap.fromTo(elem, 
                { autoAlpha: 0, y: 50, scale: 0.95 }, 
                { duration: 0.8, autoAlpha: 1, y: 0, scale: 1,
                  scrollTrigger: {
                      trigger: elem,
                      start: "top 90%",
                      toggleActions: "play none none reverse" 
                      // Muncul saat scroll down, hilang saat scroll up (Apple style)
                  }
                }
            );
        });
    </script>
</body>
</html>
