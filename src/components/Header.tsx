'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Equipa', href: '/equipa' },
  { name: 'Manifesto', href: '/manifesto' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Como Votar', href: '/duvidas' },
  { name: 'Sugestões', href: '/sugestoes' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F1F3F6] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logótipo e Identificação */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-[#168BFF] flex items-center justify-center text-white font-extrabold text-2xl shadow-sm group-hover:bg-[#0759B5] transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#20232B] leading-none">
                LISTA A
              </span>
              <span className="text-xs font-bold tracking-widest text-[#168BFF] uppercase mt-0.5">
                Aproximar Futuros
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#168BFF] text-white shadow-sm'
                      : 'text-[#20232B] hover:bg-[#E8F3FF] hover:text-[#0759B5]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Botão Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#20232B] hover:bg-[#F1F3F6] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F1F3F6] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive
                    ? 'bg-[#168BFF] text-white'
                    : 'text-[#20232B] hover:bg-[#E8F3FF] hover:text-[#0759B5]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
