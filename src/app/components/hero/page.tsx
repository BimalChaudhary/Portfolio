"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile_img.jpg";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grid" aria-hidden="true" />
    <div className="page-shell hero-layout">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="eyebrow"><span className="status-dot" /> Available for select projects</div>
        <h1>Building thoughtful<br /><span>digital experiences.</span></h1>
        <p className="hero-intro">I’m Bimal Chaudhary, a full-stack developer creating reliable web products with clean interfaces and practical engineering.</p>
        <div className="hero-location"><MapPin size={16} /> Based in Nepal <span className="location-divider" /> Working worldwide</div>
        <div className="hero-actions">
          <Link href="/components/work" className="button button-primary">Explore my work <ArrowUpRight size={17} /></Link>
          <Link href="/components/contact" className="button button-quiet">Let’s talk</Link>
        </div>
        <a className="scroll-cue" href="#selected-work"><ArrowDown size={15} /> Scroll to explore</a>
      </motion.div>
      <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }}>
        <div className="portrait-orbit" />
        <div className="portrait-card">
          <Image src={profileImg} alt="Bimal Chaudhary" priority className="hero-portrait" />
          <div className="portrait-caption"><span className="caption-mark">BC</span><div><strong>Bimal Chaudhary</strong><small>Full-stack developer</small></div><span className="caption-arrow"><ArrowUpRight size={17} /></span></div>
        </div>
        <div className="floating-note"><span>01 / 02</span><strong>Build with purpose.</strong></div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
