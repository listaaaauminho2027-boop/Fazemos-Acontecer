import Link from 'next/link';
import { Mail, MapPin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#20232B] text-white pt-16 pb-10 border-t-4 border-[#168BFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Área 1: Identidade */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#168BFF] flex items-center justify-center text-white font-extrabold text-xl">
                A
              </div>
              <div>
                <p className="font-extrabold text-lg leading-none">LISTA A</p>
                <p className="text-xs font-bold tracking-widest text-[#168BFF] uppercase mt-1">
                  Aproximar Futuros
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Candidatura à Associação Académica da Universidade do Minho. Um projeto próximo, transparente e focado no futuro de todos os estudantes.
            </p>
          </div>

          {/* Área 2: Contactos */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#168BFF]">
              Contactos
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:listaa.auminho26@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#168BFF] shrink-0" />
                  <span>listaa.auminho26@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#168BFF] shrink-0" />
                <span>Universidade do Minho — Braga & Guimarães</span>
              </li>
            </ul>
          </div>

          {/* Área 3: Instagram */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#168BFF]">
              Acompanha a Campanha
            </h3>
            <p className="text-sm text-gray-300">
              Segue todas as novidades, iniciativas e momentos da campanha no nosso Instagram oficial.
            </p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#168BFF] hover:bg-[#0759B5] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@aproximarfuturos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Lista A — Aproximar Futuros. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link>
            <Link href="/duvidas" className="hover:text-white transition-colors">Como Votar</Link>
            <Link href="/sugestoes" className="hover:text-white transition-colors">Sugestões</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
