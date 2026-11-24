"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import mywork_data from "./mywork_data";

const FeaturedWork = () => (
  <section id="selected-work" className="section section-work">
    <div className="page-shell">
      <div className="section-heading">
        <div><p className="eyebrow">Selected projects <span className="heading-line" /></p><h2>Work that’s <span>out in the world.</span></h2></div>
        <p className="section-aside">A couple of recent products I’ve helped bring from idea to live experience.</p>
      </div>
      <div className="project-list">
        {mywork_data.map((item, index) => (
          <motion.article key={item.number} className="project-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .5, delay: index * .1 }}>
            <a className={`project-visual project-visual-${index + 1}`} href={item.w_link} target="_blank" rel="noreferrer" aria-label={`Open ${item.w_title}`}>
              <span className="project-number">{item.number} / 02</span>
              <span className="project-art"><span className="art-label">LIVE PROJECT</span><strong>{item.w_title}</strong><span className="art-rule" /><span className="art-subtitle">{item.category}</span></span>
              <span className="project-open"><ArrowUpRight size={20} /></span>
            </a>
            <div className="project-details">
              <div className="project-title-row"><div><p className="project-category">{item.category}</p><h3>{item.w_title}</h3></div><a className="text-link" href={item.w_link} target="_blank" rel="noreferrer">Visit live <ArrowUpRight size={16} /></a></div>
              <p className="project-description">{item.description}</p>
              <div className="tag-row">{item.stack.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
              {"demoLogin" in item && item.demoLogin && <div className="demo-login"><strong>Demo access</strong><span><b>Email</b> {item.demoLogin.username}</span><span><b>Password</b> {item.demoLogin.password}</span></div>}
            </div>
          </motion.article>
        ))}
      </div>
      <div className="projects-cta"><span>Have a project in mind?</span><Link href="/components/contact" className="text-link">Let’s build it together <ArrowUpRight size={16} /></Link></div>
    </div>
  </section>
);

export default FeaturedWork;
