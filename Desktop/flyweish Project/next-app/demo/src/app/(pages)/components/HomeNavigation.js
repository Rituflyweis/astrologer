'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HomeNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/home/about', label: 'About' },
    { href: '/home/contact', label: 'Contact' },
    { href: '/home/services', label: 'Services' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded transition-colors ${
                isActive
                  ? 'bg-blue-800 font-bold'
                  : 'hover:bg-blue-700'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}




