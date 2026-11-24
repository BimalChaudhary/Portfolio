import { ArrowUpRight, Code2, Database, Layers3 } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section section-about">
    <div className="page-shell about-layout">
      <div className="about-heading"><p className="eyebrow">A little about me <span className="heading-line" /></p><h2>Good work starts<br />with <span>good thinking.</span></h2></div>
      <div className="about-copy"><p className="about-lead">I enjoy turning complex ideas into useful, easy-to-use products.</p><p>From shaping the interface to connecting the systems behind it, I care about the details that make software feel dependable. I work across the stack and keep the experience simple for the people using it.</p><a href="/components/about" className="text-link">More about me <ArrowUpRight size={16} /></a>
        <div className="skills-grid"><div><Code2 /><strong>Frontend</strong><span>React · Next.js · TypeScript</span></div><div><Database /><strong>Backend</strong><span>Node.js · FastAPI · PostgreSQL</span></div><div><Layers3 /><strong>Product</strong><span>Responsive UI · APIs · Deployment</span></div></div>
      </div>
    </div>
  </section>
);

export default AboutSection;
