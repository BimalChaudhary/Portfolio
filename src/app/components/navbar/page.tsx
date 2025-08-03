"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `hover:text-blue-600 font-medium transition duration-200 ${
      pathname === path
        ? "text-blue-600 underline"
        : "text-gray-800 dark:text-gray-100"
    }`;

  return (
    <nav className="bg-white text-center dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 flex items-center justify-between">
        {/* Centered nav links */}
        <div className=" absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/components/about" className={linkStyle("/components/about")}>
            About
          </Link>
          <Link href="/components/work" className={linkStyle("/components/work")}>
            Work
          </Link>
          <Link href="/components/services" className={linkStyle("/components/services")}>
            Services
          </Link>
          <Link href="/components/contact" className={linkStyle("/components/contact")}>
            Contact
          </Link>
        </div>

        {/* Right side: Theme toggle or placeholder */}
        <div>
          {/* Insert theme toggle component here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
