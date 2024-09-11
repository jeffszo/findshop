"use client";

import Link from "next/link";
import { navLinks } from "./ui/nav_links";
import { usePathname } from "next/navigation";



export default function Home({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="">
      <div className=" flex items-center justify-center min-h-screen space-x-6">
      <h1 className={'font-bold antialiased mb-8 mt-8 mr-6 text-3xl text-sky-400 text-center'}>Findshop</h1>

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={`${isActive ? "text-red-400" : "text-slate-400"} hover:text-gray-700`  }
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}

      {children}
      
    </div>


    </div>
    

  );
}
