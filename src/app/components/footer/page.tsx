import Link from "next/link";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-shell footer-inner">
      <Link href="/" className="brand footer-brand"><span className="brand-mark">B</span><span>Bimal<span className="brand-dot">.</span></span></Link>
      <span>© {new Date().getFullYear()} Bimal Chaudhary</span>
      <div className="footer-links"><a href="mailto:bimalchaudhary014@gmail.com">Email</a><a href="https://www.linkedin.com/in/bimalchaudhary/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/BimalChaudhary" target="_blank" rel="noreferrer">GitHub ↗</a></div>
    </div>
  </footer>
);

export default Footer;
