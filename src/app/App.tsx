import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, Github, Twitter, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Photos", href: "#photos" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "About", href: "#about" },
];

const PROJECTS = [
  {
    num: "01",
    title: "Neural Network Visualizer",
    tags: ["Python", "React", "D3.js"],
    year: "2024",
    desc: "Interactive tool for visualizing forward and backpropagation through arbitrary network architectures. Built for a machine learning course final project.",
    link: "#",
  },
  {
    num: "02",
    title: "Distributed Key-Value Store",
    tags: ["Go", "Raft", "gRPC"],
    year: "2024",
    desc: "Fault-tolerant KV store implementing the Raft consensus algorithm. Handles leader election, log replication, and snapshotting across a cluster of nodes.",
    link: "#",
  },
  {
    num: "03",
    title: "Campus Event Finder",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    year: "2023",
    desc: "Aggregates events from 40+ campus organizations into a single feed. Used by ~300 students per week. Integrates with university calendar APIs.",
    link: "#",
  },
  {
    num: "04",
    title: "Terminal Portfolio",
    tags: ["C", "ncurses"],
    year: "2023",
    desc: "A command-line interface version of this site, with a custom shell that responds to queries about my work. Because why not.",
    link: "#",
  },
];

const POSTS = [
  {
    num: "01",
    title: "What I learned building a Raft implementation from scratch",
    date: "June 2025",
    readTime: "8 min",
    excerpt: "Distributed consensus is harder than the paper makes it look. Here's every edge case that bit me.",
  },
  {
    num: "02",
    title: "On learning to use Vim, and why I almost quit three times",
    date: "March 2025",
    readTime: "5 min",
    excerpt: "The productivity argument is real, but the real reason to stick with it surprised me.",
  },
  {
    num: "03",
    title: "Notes on reading SICP as a second-year",
    date: "January 2025",
    readTime: "6 min",
    excerpt: "An old book written for a different era, somehow still the clearest explanation of abstraction I've encountered.",
  },
];

const PHOTOS = [
  {
    id: "photo-5vkLaLaFnqI",
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format",
    alt: "Laptop and code on a desk",
    caption: "Late nights in the library",
  },
  {
    id: "photo-464375_city",
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=800&fit=crop&auto=format",
    alt: "City at night from above",
    caption: "City grid, 2 AM",
  },
  {
    id: "photo-film",
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop&auto=format",
    alt: "Film camera close up",
    caption: "Canon AE-1, loaded with Kodak Gold",
  },
  {
    id: "photo-forest",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=800&fit=crop&auto=format",
    alt: "Forest path in fog",
    caption: "Morning hike, somewhere in Oregon",
  },
  {
    id: "photo-coffee",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&auto=format",
    alt: "Coffee and notebook",
    caption: "Planning mode",
  },
  {
    id: "photo-train",
    url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=600&fit=crop&auto=format",
    alt: "Train station at dusk",
    caption: "Somewhere between here and there",
  },
];

const HOBBIES = [
  {
    name: "Film Photography",
    detail: "Shooting on a Canon AE-1 and a beat-up Olympus Stylus. Mostly street and travel. I develop my own B&W in a bathroom darkroom.",
  },
  {
    name: "Music Production",
    detail: "Making ambient electronic music in Ableton. Heavily influenced by Arca, Burial, and Stars of the Lid. A few tracks on SoundCloud.",
  },
  {
    name: "Rock Climbing",
    detail: "Gym bouldering three days a week. Currently working on V6. The puzzle-solving angle is what hooked me — it maps well to debugging.",
  },
  {
    name: "Reading",
    detail: "Mix of CS textbooks (SICP, OSTEP), philosophy (Camus, Wittgenstein), and whatever short fiction I can find. Currently: Borges.",
  },
];

const SKILLS = ["Python", "Go", "TypeScript", "C/C++", "React", "PostgreSQL", "Linux", "Git", "Docker", "Machine Learning"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/95 backdrop-blur-sm" : ""
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className="text-sm tracking-widest uppercase font-medium hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            A. Chen
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm transition-opacity ${
                  activeSection === link.href.slice(1)
                    ? "opacity-100 font-medium"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base py-1 opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="max-w-5xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="flex flex-col gap-8">
          <p
            className="text-xs tracking-widest uppercase opacity-50"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CS Student — Class of 2027
          </p>
          <h1
            className="text-5xl md:text-8xl font-semibold leading-none tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Alex Chen.
          </h1>
          <p className="text-lg md:text-xl max-w-xl opacity-70 leading-relaxed font-light">
            I build things with software, make photos with film, and write
            about what I learn along the way. Based in Seattle, studying
            at the University of Washington.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center gap-2 text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              <Mail size={14} />
              Get in touch
            </a>
            <div className="flex items-center gap-4 opacity-50">
              <a href="#" className="hover:opacity-100 transition-opacity" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider rule */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel number="I" label="Projects" />
        <div className="mt-12 divide-y divide-border">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="group py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-16 items-start"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <span
                    className="text-xs opacity-30 pt-1 shrink-0 w-6"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {p.num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xl md:text-2xl font-semibold leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm opacity-60 leading-relaxed font-light max-w-lg">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 border border-border opacity-60"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2 pl-10 md:pl-0">
                <span
                  className="text-xs opacity-30"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.year}
                </span>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-xs opacity-40 group-hover:opacity-80 transition-opacity"
                >
                  View <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Blog */}
      <section id="blog" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel number="II" label="Writing" />
        <div className="mt-12 divide-y divide-border">
          {POSTS.map((post) => (
            <a
              key={post.num}
              href="#"
              className="group block py-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-10 items-start hover:opacity-80 transition-opacity"
            >
              <span
                className="text-xs opacity-30 pt-1 hidden md:block w-6"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {post.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-xl md:text-2xl font-semibold leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm opacity-55 leading-relaxed font-light max-w-lg">{post.excerpt}</p>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 pt-1">
                <span
                  className="text-xs opacity-40"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {post.date}
                </span>
                <span
                  className="text-xs opacity-30"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {post.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 pl-0 md:pl-16">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm opacity-50 hover:opacity-100 transition-opacity"
          >
            All posts <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Photos */}
      <section id="photos" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel number="III" label="Photos" />
        <p className="mt-4 text-sm opacity-50 font-light">Shot on 35mm film and a Ricoh GR.</p>
        <div className="mt-10 columns-2 md:columns-3 gap-3 space-y-3">
          {PHOTOS.map((photo) => (
            <div key={photo.id} className="break-inside-avoid group relative overflow-hidden bg-muted">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Hobbies */}
      <section id="hobbies" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel number="IV" label="Outside of Code" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 divide-border md:border border-border">
          {HOBBIES.map((h, i) => (
            <div
              key={h.name}
              className={`p-8 flex flex-col gap-3 ${
                i % 2 === 0 && i + 1 < HOBBIES.length ? "md:border-r border-border" : ""
              } ${i < 2 ? "md:border-b border-border" : ""}`}
            >
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {h.name}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-light">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* About / Resume */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel number="V" label="About" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed opacity-70 font-light">
              I'm a third-year CS student at the University of Washington interested in
              systems programming, distributed systems, and the intersection of computing and design.
              Before college I spent two years learning to code through Scratch, then Python
              tutorials, then embarrassing forum posts, which is probably the right order.
            </p>
            <p className="text-base leading-relaxed opacity-70 font-light">
              Currently looking for summer 2026 internships in software engineering, particularly
              roles that involve backend infrastructure, developer tooling, or anything that lives close to the OS.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                Download Resume <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-xs tracking-widest uppercase opacity-40"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Education
              </h3>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-medium">University of Washington</span>
                  <span
                    className="text-xs opacity-40"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    2023–2027
                  </span>
                </div>
                <span className="text-sm opacity-55">B.S. Computer Science</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-xs tracking-widest uppercase opacity-40"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 bg-secondary border border-border"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Currently */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <h3
                className="text-xs tracking-widest uppercase opacity-40"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Currently
              </h3>
              <ul className="flex flex-col gap-2 text-sm opacity-60 font-light">
                <li>→ TAing CSE 333 (Systems Programming)</li>
                <li>→ Building a compiler for a toy language</li>
                <li>→ Reading: <em>Gödel, Escher, Bach</em></li>
                <li>→ Shooting: Ilford HP5 at box speed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span
            className="text-xs tracking-widest uppercase opacity-30"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Alex Chen © 2025
          </span>
          <div className="flex items-center gap-6 opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="GitHub"><Github size={16} /></a>
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="mailto:alex@example.com" className="hover:opacity-100 transition-opacity" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span
        className="text-xs opacity-25"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {number}
      </span>
      <h2
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {label}
      </h2>
    </div>
  );
}
