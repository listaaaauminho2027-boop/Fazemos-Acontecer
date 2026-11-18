'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/equipa', label: 'Equipa' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/duvidas', label: 'Como Votar' },
  { href: '/sugestoes', label: 'Sugestões' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#06112E]/90 backdrop-blur-md border-b border-[#EAF2FF]/12 shadow-lg shadow-black/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logótipo Oficial Lista A */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2478FF] to-[#155CEB] flex items-center justify-center p-1.5 shadow-md shadow-[#155CEB]/30 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/images/logo-branco.png"
                alt="Logótipo Lista A"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="block font-extrabold text-base sm:text-lg text-white tracking-tight">
                Lista A
              </span>
              <span className="block text-xs font-bold text-[#EAF2FF]/80">
                Fazemos Acontecer
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-extrabold transition-all ${
                    isActive
                      ? 'bg-white text-[#06112E] shadow-md'
                      : 'text-[#EAF2FF] hover:bg-[#0B2868]/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-2.5 rounded-xl text-[#EAF2FF] hover:bg-[#0B2868] hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#081B46]/98 backdrop-blur-xl border-t border-[#EAF2FF]/15 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-extrabold transition-colors ${
                  isActive
                    ? 'bg-white text-[#06112E]'
                    : 'text-[#EAF2FF] hover:bg-[#0B2868] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
