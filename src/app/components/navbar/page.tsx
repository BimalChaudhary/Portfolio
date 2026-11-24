"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DarkModeToogle } from "../darkModeToogle/DarkModeToogle";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLink = (path: string, label: string) => (
    <Link
      href={path}
      className={`hover:text-blue-600 font-medium transition duration-200 ${
        pathname === path
          ? "text-blue-600 underline"
          : "text-gray-800 dark:text-gray-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white text-center dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 flex items-center justify-between">
        {/* Centered nav links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          {navLink("/", "Home")}
          {navLink("/components/about", "About")}
          {navLink("/components/work", "Work")}
          {navLink("/components/services", "Services")}
          {navLink("/components/contact", "Contact")}
          <DarkModeToogle />
        </div>

        {/* Right side: Theme toggle or placeholder */}
        <div>{/* Insert theme toggle component here */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
