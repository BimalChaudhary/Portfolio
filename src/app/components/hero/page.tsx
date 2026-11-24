"use client";

import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
=======
>>>>>>> parent of d03433e (update new feature)
import profileImg from "../../assets/profile_img.jpg";
import Link from "next/link";

<<<<<<< HEAD
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
=======
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center text-center py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <Image
        src={profileImg}
        alt="Bimal Chaudhary Profile"
        width={180}
        height={180}
        className="rounded-full shadow-md mb-6 object-cover"
        priority
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        <span className="text-blue-600"> Bimal Chaudhary</span> <div>FULL STACK & MERN STACK</div>
        Developer from Nepal.
      </h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-xl mb-8">
        Passionate about building full-stack web apps using <span className="text-blue-600">Next JS, Fast API, PostgresSQL, MongoDB, Express,
        React, and Node.js.</span>
      </p>

      <div className="flex gap-4">
        <Link
          href="/components/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact with
        </Link>
        <a
          href="https://drive.google.com/drive/folders/1ufuz6vUXSVYAjd_5i7rOBo75KdRXaiSa"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};
>>>>>>> parent of d03433e (update new feature)

export default Hero;
