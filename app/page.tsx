"use client";

import { useEffect, useRef } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const skills = [
  { name: "Python", level: 75, category: "Backend" },
  { name: "Java", level: 65, category: "Backend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "Django", level: 68, category: "Framework" },
  { name: "SQL / NoSQL", level: 72, category: "Bases de Datos" },
  { name: "Redes (Cisco)", level: 60, category: "Infraestructura" },
  { name: "Scrum Master", level: 80, category: "Metodologías" },
];

const certifications = [
  { title: "Cisco Networking Essentials", icon: "🌐", issuer: "Cisco" },
  { title: "Scrum Master Certified", icon: "⚡", issuer: "SCRUMstudy" },
  { title: "Técnico en Sistemas", icon: "💻", issuer: "SENA / Instituto Técnico" },
];

const categoryColors: Record<string, string> = {
  Backend: "bg-blue-primary/15 text-blue-glow border-blue-primary/30",
  Frontend: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  Framework: "bg-violet-500/10 text-violet-400 border-violet-500/25",
  "Bases de Datos": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  Infraestructura: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  Metodologías: "bg-rose-500/10 text-rose-400 border-rose-500/25",
};

// ─── Intersection Observer Hook ──────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
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
        {["Sobre mí", "Habilidades", "Contacto"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="underline-animate hover:text-white transition-colors duration-200"
          >
            {item}
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
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hero-gradient pointer-events-none" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating orb */}
      <div className="absolute top-1/3 right-[10%] w-56 h-56 rounded-full opacity-[0.04] bg-blue-bright blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-[8%] w-32 h-32 rounded-full opacity-[0.06] bg-blue-primary blur-2xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-4xl w-full text-center z-10">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-primary/30 bg-blue-primary/8 text-blue-glow text-xs font-body font-medium tracking-wider mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-bright animate-pulse-slow" />
          Disponible para proyectos & colaboraciones
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Alejandro
          <br />
          <span className="italic text-gradient">Arana</span>
          <span className="text-white/80"> Fernández</span>
        </h1>

        {/* Role */}
        <p className="font-body text-base sm:text-lg text-slate-text font-light tracking-wide mb-3 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Estudiante de Ingeniería de Sistemas · 6.º Semestre
        </p>
        <p className="font-body text-sm text-slate-muted tracking-widest uppercase mb-10 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          Técnico en Sistemas · Scrum Master Certificado · Cisco Certified
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs font-body text-slate-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-primary to-transparent" />
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
              Soy Alejandro, estudiante de sexto semestre de{" "}
              <span className="text-white/90">Ingeniería de Sistemas</span> con formación técnica previa en sistemas.
              Me apasiona construir software funcional, limpio y con impacto real.
            </p>
            <p className="font-body text-slate-text font-light leading-relaxed mb-8">
              Cuento con certificaciones en{" "}
              <span className="text-blue-glow">Scrum Master</span> y{" "}
              <span className="text-blue-glow">Redes Cisco</span>, lo que me permite desenvolverme tanto
              en el desarrollo técnico como en la gestión ágil de proyectos.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {["Desarrollo de Software", "Gestión Ágil", "Bases de Datos", "Redes"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-body font-medium border border-ink-border text-slate-text rounded-full bg-ink-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div className="reveal grid grid-cols-1 gap-4 stagger-children">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="reveal card-hover flex items-center gap-4 p-5 rounded-2xl border border-ink-border bg-ink-card"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-primary/10 border border-blue-primary/20 text-xl shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <p className="text-sm font-body font-medium text-white/90">{cert.title}</p>
                  <p className="text-xs font-body text-slate-muted mt-0.5">{cert.issuer}</p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-1">
              {[
                { n: "6°", label: "Semestre" },
                { n: "2", label: "Certificados" },
                { n: "7+", label: "Tecnologías" },
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
      {/* Background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-card/30 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
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

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12 stagger-children">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="reveal card-hover p-5 rounded-2xl border border-ink-border bg-ink-card group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-body font-medium px-2 py-0.5 rounded-full border ${categoryColors[skill.category] ?? "bg-blue-primary/10 text-blue-glow border-blue-primary/20"}`}
                  >
                    {skill.category}
                  </span>
                  <span className="text-sm font-body font-medium text-white/90">{skill.name}</span>
                </div>
                <span className="text-xs font-body text-slate-muted">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full rounded-full bg-ink-border overflow-hidden">
                <div
                  className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-primary to-blue-glow transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Approach callout */}
        <div className="reveal p-8 rounded-3xl border border-blue-primary/20 bg-blue-primary/5 backdrop-blur-sm text-center">
          <p className="font-display text-2xl sm:text-3xl font-light text-white/90 leading-relaxed">
            "Mi enfoque profesional combina{" "}
            <span className="italic text-gradient">precisión técnica</span>{" "}
            con{" "}
            <span className="italic text-gradient">metodología ágil</span>
            — entregando software de calidad en equipo."
          </p>
          <p className="font-body text-xs text-slate-muted mt-5 tracking-widest uppercase">
            Alejandro Arana Fernández
          </p>
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
          003 — Contacto
        </p>
        <div className="divider mx-auto mb-6" />
        <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight mb-5">
          ¿Trabajamos<br />
          <span className="italic text-gradient">juntos?</span>
        </h2>
        <p className="font-body text-slate-text font-light leading-relaxed mb-12">
          Estoy abierto a proyectos académicos, colaboraciones técnicas
          y oportunidades de prácticas profesionales.
        </p>

        {/* Email card */}
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

        {/* Location */}
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
      <Contact />
      <Footer />
    </main>
  );
}
