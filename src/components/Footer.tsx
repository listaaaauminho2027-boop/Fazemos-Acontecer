import Link from 'next/link';
import { Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#20232B] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Coluna 1: Identidade */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#168BFF] text-white flex items-center justify-center font-extrabold text-lg">
                A
              </div>
              <div>
                <span className="block font-extrabold text-lg leading-none">
                  Lista A
                </span>
                <span className="text-xs font-bold text-[#168BFF]">
                  Fazemos Acontecer
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Candidatura à Associação Académica da Universidade do Minho. Próximos de todos os estudantes.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm font-bold">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#168BFF] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/equipa" className="text-gray-300 hover:text-[#168BFF] transition-colors">
                  Equipa
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-gray-300 hover:text-[#168BFF] transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-300 hover:text-[#168BFF] transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/duvidas" className="text-gray-300 hover:text-[#168BFF] transition-colors">
                  Como Votar
                </Link>
              </li>
              <li>
                <Link href="/sugestoes" className="text-gray-300 hover:text-[#168BFF] transition-colors">
                  Sugestões
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Participação & Redes */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
              Participa
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://evotum.uminho.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#168BFF] hover:bg-[#0759B5] text-white font-extrabold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <span>Plataforma eVotUM</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#168BFF]" />
                <span>Instagram Oficial</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Lista A — Fazemos Acontecer. Todos os direitos reservados.</p>
          <p>Associação Académica da Universidade do Minho</p>
        </div>
      </div>
    </footer>
  );
}
