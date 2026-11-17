import Link from 'next/link';
import { Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#06112E] text-white border-t border-[#EAF2FF]/12 overflow-hidden">
      {/* Arco luminoso decorativo sutil */}
      <div className="absolute -bottom-36 -left-24 w-96 h-96 rounded-full bg-[#155CEB]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#EAF2FF]/12">
          {/* Coluna 1: Identidade */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2478FF] to-[#155CEB] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-[#155CEB]/25">
                A
              </div>
              <div>
                <span className="block font-extrabold text-lg leading-none text-white">
                  Lista A
                </span>
                <span className="text-xs font-bold text-[#EAF2FF]/80">
                  Fazemos Acontecer
                </span>
              </div>
            </div>
            <p className="text-sm text-[#EAF2FF]/75 leading-relaxed max-w-xs">
              Candidatura à Associação Académica da Universidade do Minho. Próximos de todos os estudantes.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF]/60 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm font-bold">
              <li>
                <Link href="/" className="text-[#EAF2FF]/85 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/equipa" className="text-[#EAF2FF]/85 hover:text-white transition-colors">
                  Equipa
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-[#EAF2FF]/85 hover:text-white transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-[#EAF2FF]/85 hover:text-white transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/duvidas" className="text-[#EAF2FF]/85 hover:text-white transition-colors">
                  Como Votar
                </Link>
              </li>
              <li>
                <Link href="/sugestoes" className="text-[#EAF2FF]/85 hover:text-white transition-colors">
                  Sugestões
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Participação & Redes */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF]/60">
              Participa
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://evotum.uminho.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EAF2FF] text-[#06112E] font-extrabold text-sm px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <span>Plataforma eVotUM</span>
                <ExternalLink className="w-4 h-4 text-[#155CEB]" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#081B46] hover:bg-[#0B2868] text-white border border-[#EAF2FF]/25 font-bold text-sm px-5 py-3 rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4 text-[#2478FF]" />
                <span>Instagram Oficial</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF2FF]/65">
          <p>© 2026 Lista A — Fazemos Acontecer. Todos os direitos reservados.</p>
          <p>Associação Académica da Universidade do Minho</p>
        </div>
      </div>
    </footer>
  );
}
