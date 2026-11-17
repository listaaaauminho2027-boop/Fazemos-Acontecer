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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F1F3F6] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logótipo / Identidade */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#168BFF] group-hover:bg-[#0759B5] text-white flex items-center justify-center font-extrabold text-xl transition-colors shadow-xs">
              A
            </div>
            <div className="leading-tight">
              <span className="block font-extrabold text-base sm:text-lg text-[#20232B] tracking-tight">
                Lista A
              </span>
              <span className="block text-xs font-bold text-[#168BFF]">
                Fazemos Acontecer
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-extrabold transition-all ${
                    isActive
                      ? 'bg-[#168BFF] text-white shadow-xs'
                      : 'text-[#20232B] hover:bg-[#E8F3FF] hover:text-[#0759B5]'
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
            className="md:hidden p-2.5 rounded-xl text-[#20232B] hover:bg-[#F1F3F6] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#F1F3F6] px-4 pt-3 pb-6 space-y-1.5 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-extrabold transition-colors ${
                  isActive
                    ? 'bg-[#168BFF] text-white'
                    : 'text-[#20232B] hover:bg-[#E8F3FF] hover:text-[#0759B5]'
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
