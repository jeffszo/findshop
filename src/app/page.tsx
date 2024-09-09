"use client";

import Link from "next/link";
import { navLinks } from "./ui/nav_links";
import { usePathname } from "next/navigation";

export default function Home({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex justify-center space-x-4">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={`${isActive ? "text-red-400" : "text-blue-400"}`}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
