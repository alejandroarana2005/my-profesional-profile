"use client";

import { useEffect } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const technicalSkills = [
  { name: "Redes", category: "Infraestructura", label: "Intermedio" },
  { name: "Programación", category: "Desarrollo", label: "Intermedio" },
  { name: "JavaScript / Python (OOP)", category: "Backend", label: "Intermedio" },
  { name: "SQL & NoSQL", category: "Bases de Datos", label: "Básico" },
  { name: "Agentes Inteligentes (CNN)", category: "IA", label: "Aplicado" },
  { name: "Mantenimiento de Equipos", category: "Hardware", label: "Básico" },
  { name: "Diseño Gráfico & Multimedia", category: "Diseño", label: "Intermedio" },
  { name: "Scrum / Gestión Ágil", category: "Metodologías", label: "Certificado" },
];

const softSkills = [
  { name: "Liderazgo de Proyectos", icon: "◆" },
  { name: "Comunicación Asertiva", icon: "◇" },
  { name: "Trabajo en Equipo", icon: "◆" },
  { name: "Pensamiento Crítico", icon: "◇" },
  { name: "Adaptabilidad", icon: "◆" },
  { name: "Creatividad", icon: "◇" },
  { name: "Inteligencia Emocional", icon: "◆" },
  { name: "Resolución de Conflictos", icon: "◇" },
  { name: "Gestión del Tiempo", icon: "◆" },
  { name: "Ética Profesional", icon: "◇" },
];

const certifications = [
  {
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    icon: "⚡",
    color: "from-rose-500/20 to-rose-500/5 border-rose-500/25 text-rose-400",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    icon: "☁",
    color: "from-amber-500/20 to-amber-500/5 border-amber-500/25 text-amber-400",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    icon: "🌐",
    color: "from-blue-500/20 to-blue-500/5 border-blue-500/25 text-blue-400",
  },
  {
    title: "Certificado de Inglés B2",
    issuer: "Nivel Independiente",
    icon: "EN",
    color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/25 text-emerald-400",
  },
];

const categoryColors: Record<string, string> = {
  Infraestructura: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  Desarrollo: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  Backend: "bg-violet-500/10 text-violet-400 border-violet-500/25",
  "Bases de Datos": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  IA: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/25",
  Hardware: "bg-orange-500/10 text-orange-400 border-orange-500/25",
  Diseño: "bg-pink-500/10 text-pink-400 border-pink-500/25",
  Metodologías: "bg-rose-500/10 text-rose-400 border-rose-500/25",
};

// ─── Intersection Observer Hook ──────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-ink-border/50 backdrop-blur-xl bg-ink/70">
      <span className="font-display text-xl font-light tracking-widest text-white/90">
        AA<span className="text-blue-bright">.</span>
      </span>
      <div className="hidden sm:flex items-center gap-8 font-body text-sm text-slate-text font-light">
        {[
          { label: "Sobre mí", href: "#sobre-mí" },
          { label: "Habilidades", href: "#habilidades" },
          { label: "Certificados", href: "#certificados" },
          { label: "Contacto", href: "#contacto" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="underline-animate hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        href="mailto:alejandro.arana@estudiantesunibague.edu.co"
        className="hidden sm:block text-xs font-body font-medium px-4 py-2 rounded-full border border-blue-primary/50 text-blue-glow hover:bg-blue-primary/10 transition-all duration-200"
      >
        Contactar
      </a>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hero-gradient pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/3 right-[10%] w-56 h-56 rounded-full opacity-[0.04] bg-blue-bright blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 left-[8%] w-32 h-32 rounded-full opacity-[0.06] bg-blue-primary blur-2xl animate-float pointer-events-none"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-4xl w-full text-center z-10">
      

        <h1
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Alejandro
          <br />
          <span className="italic text-gradient">Arana</span>
          <span className="text-white/80"> Fernández</span>
        </h1>

        <p
          className="font-body text-base sm:text-lg text-slate-text font-light tracking-wide mb-3 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Estudiante de Ingeniería de Sistemas · Técnico en Sistemas
        </p>
        <p
          className="font-body text-sm text-slate-muted tracking-widest uppercase mb-10 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Scrum Certified · AWS · Cisco · Inglés B2
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#habilidades"
            className="px-8 py-3.5 rounded-full bg-blue-primary hover:bg-blue-bright text-white text-sm font-body font-medium transition-all duration-200 glow-blue hover:scale-[1.02]"
          >
            Ver Habilidades
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-full border border-white/10 hover:border-blue-primary/50 text-white/70 hover:text-white text-sm font-body font-light transition-all duration-200"
          >
            Contactar →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre-mí" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div className="reveal">
            <p className="font-body text-xs text-blue-glow tracking-widest uppercase mb-4 font-medium">
              001 — Sobre mí
            </p>
            <div className="divider mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight mb-6">
              Construyendo soluciones<br />
              <span className="italic text-gradient">con propósito</span>
            </h2>
            <p className="font-body text-slate-text font-light leading-relaxed mb-5">
              Soy Alejandro, graduado como{"  "}
              <span className="text-white/90">Bachiller Técnico en Sistemas</span> y actualmente
              estudiante de <span className="text-white/90">Ingeniería de Sistemas</span>. Me apasiona
              construir software funcional, limpio y con impacto real.
            </p>
            <p className="font-body text-slate-text font-light leading-relaxed mb-5">
              Tengo experiencia en{" "}
              <span className="text-blue-glow">programación orientada a objetos</span> con JavaScript y
              Python, y he trabajado en la creación de{" "}
              <span className="text-blue-glow">agentes inteligentes</span> y redes neuronales para
              clasificación de imágenes.
            </p>
            <p className="font-body text-slate-text font-light leading-relaxed mb-8">
              Combino habilidades técnicas con formación en{" "}
              <span className="text-blue-glow">diseño gráfico y multimedia</span>, lo que me permite
              desarrollar productos completos, desde el backend hasta la interfaz visual.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Desarrollo de Software",
                "Inteligencia Artificial",
                "Redes",
                "Diseño Gráfico",
                "Gestión Ágil",
                "Bases de Datos",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-body font-medium border border-ink-border text-slate-text rounded-full bg-ink-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="reveal">
            <div className="p-8 rounded-3xl border border-ink-border bg-ink-card space-y-6 mb-6">
              <div>
                <p className="text-xs font-body text-slate-muted uppercase tracking-widest mb-2">
                  Formación
                </p>
                <p className="font-body text-white/90 text-sm leading-relaxed">
                  Bachiller Técnico en Sistemas
                </p>
                <p className="font-body text-slate-text text-sm leading-relaxed">
                  Ingeniería de Sistemas — En curso
                </p>
              </div>
              <div className="h-px bg-ink-border" />
              <div>
                <p className="text-xs font-body text-slate-muted uppercase tracking-widest mb-2">
                  Idiomas
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-body text-white/90 text-sm">Español</span>
                  <span className="text-slate-muted text-xs">Nativo</span>
                  <span className="mx-2 text-ink-border">·</span>
                  <span className="font-body text-white/90 text-sm">Inglés</span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    B2
                  </span>
                </div>
              </div>
              <div className="h-px bg-ink-border" />
              <div>
                <p className="text-xs font-body text-slate-muted uppercase tracking-widest mb-2">
                  Área de interés
                </p>
                <p className="font-body text-slate-text text-sm leading-relaxed">
                  IA aplicada · Desarrollo Full-Stack · Liderazgo técnico
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { n: "4+", label: "Certificados" },
                { n: "8+", label: "Tecnologías" },
                { n: "360°", label: "Perfil técnico" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card-hover text-center p-4 rounded-xl border border-ink-border bg-ink-card"
                >
                  <p className="font-display text-3xl font-light text-gradient">{s.n}</p>
                  <p className="text-xs font-body text-slate-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="habilidades" className="relative py-28 px-6 border-t border-ink-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-card/30 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-xs text-blue-glow tracking-widest uppercase mb-4 font-medium">
            002 — Habilidades
          </p>
          <div className="divider mx-auto mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight">
            Stack técnico &{" "}
            <span className="italic text-gradient">competencias</span>
          </h2>
        </div>

        {/* Technical skills */}
        <h3 className="font-body text-xs text-slate-muted uppercase tracking-widest mb-6 reveal">
          Habilidades Técnicas
        </h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-16 stagger-children">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="reveal card-hover p-5 rounded-2xl border border-ink-border bg-ink-card group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`text-[10px] font-body font-medium px-2 py-0.5 rounded-full border ${
                      categoryColors[skill.category] ??
                      "bg-blue-primary/10 text-blue-glow border-blue-primary/20"
                    }`}
                  >
                    {skill.category}
                  </span>
                  <span className="text-sm font-body font-medium text-white/90">{skill.name}</span>
                </div>
                <span className="text-[10px] font-body px-2 py-0.5 rounded-full bg-ink-border text-slate-muted shrink-0">
                  {skill.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <h3 className="font-body text-xs text-slate-muted uppercase tracking-widest mb-6 reveal">
          Habilidades Blandas
        </h3>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16 stagger-children">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="card-hover flex flex-col items-center gap-2 p-4 rounded-2xl border border-ink-border bg-ink-card text-center"
            >
              <span className="text-blue-glow text-sm">{skill.icon}</span>
              <span className="text-xs font-body text-slate-text leading-snug">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────

function Certifications() {
  return (
    <section id="certificados" className="relative py-28 px-6 border-t border-ink-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="font-body text-xs text-blue-glow tracking-widest uppercase mb-4 font-medium">
            003 — Certificaciones
          </p>
          <div className="divider mx-auto mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight">
            Formación{" "}
            <span className="italic text-gradient">verificada</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`reveal card-hover p-6 rounded-2xl border bg-gradient-to-br ${cert.color}`}
            >
              <div className="text-2xl mb-4 font-body font-light">{cert.icon}</div>
              <p className="font-body font-medium text-white/90 text-sm mb-1 leading-snug">
                {cert.title}
              </p>
              <p className="font-body text-xs text-slate-muted">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="relative py-28 px-6 border-t border-ink-border/50">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="font-body text-xs text-blue-glow tracking-widest uppercase mb-4 font-medium">
          004 — Contacto
        </p>
        <div className="divider mx-auto mb-6" />
    
        <p className="font-body text-slate-text font-light leading-relaxed mb-12">
          Estoy abierto a proyectos académicos, colaboraciones técnicas
          y oportunidades de prácticas profesionales.
        </p>

        <a
          href="mailto:alejandro.arana@estudiantesunibague.edu.co"
          className="group inline-flex items-center gap-4 p-6 rounded-2xl border border-ink-border bg-ink-card hover:border-blue-primary/40 hover:bg-blue-primary/5 transition-all duration-300 w-full max-w-md"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-primary/10 border border-blue-primary/20 text-blue-glow shrink-0 group-hover:bg-blue-primary/20 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs font-body text-slate-muted uppercase tracking-widest mb-1">Email</p>
            <p className="text-sm font-body font-medium text-white/90 underline-animate">
              alejandro.arana@estudiantesunibague.edu.co
            </p>
          </div>
          <svg className="ml-auto text-slate-muted group-hover:text-blue-glow transition-colors shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-body text-slate-muted">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Ibagué, Tolima — Colombia
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-ink-border/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display text-base font-light text-white/40">
          AA<span className="text-blue-primary">.</span>
        </span>
        <p className="text-xs font-body text-slate-muted">
          © 2025 Alejandro Arana Fernández · Diseñado con Next.js & Tailwind CSS
        </p>
        <a
          href="mailto:alejandro.arana@estudiantesunibague.edu.co"
          className="text-xs font-body text-slate-muted hover:text-blue-glow transition-colors"
        >
          alejandro.arana@estudiantesunibague.edu.co
        </a>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useReveal();

  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}