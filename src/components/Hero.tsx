import Link from 'next/link';
import { Users, FileText, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#06112E] via-[#081B46] to-[#0B2868] overflow-hidden pt-14 pb-22 lg:pt-24 lg:pb-32 border-b border-[#EAF2FF]/12">
      {/* Arcos abstratos fluidos */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroArc1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2478FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#06112E" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroArc2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#155CEB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#081B46" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-120 680 C 260 220, 740 160, 1560 440 L 1560 860 L -120 860 Z"
          fill="url(#heroArc1)"
        />
        <path
          d="M420 -80 C 780 260, 1140 320, 1560 120 L 1560 -80 Z"
          fill="url(#heroArc2)"
        />
      </svg>

      {/* Logótipo monumental no fundo da secção inteira, por trás da caixa */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden z-0"
      >
        <img
          src="/images/logo-branco.png"
          alt=""
          className="w-[620px] h-[620px] sm:w-[780px] sm:h-[780px] lg:w-[940px] lg:h-[940px] object-contain opacity-[0.14] translate-x-12 sm:translate-x-20 lg:translate-x-16 -rotate-6 drop-shadow-[0_0_80px_rgba(36,120,255,0.5)]"
        />
      </div>

      <div className="absolute -top-32 right-10 w-[480px] h-[480px] rounded-full bg-[#2478FF]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-[#155CEB]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Coluna Esquerda: Título e Botões */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#155CEB]/25 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider border border-[#2478FF]/40 backdrop-blur-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2478FF] shadow-xs shadow-[#2478FF]" />
              Candidatura AAUMinho
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.06]">
              Lista A —{' '}
              <span className="bg-gradient-to-r from-white via-[#EAF2FF] to-[#2478FF] bg-clip-text text-transparent block sm:inline">
                Fazemos Acontecer
              </span>
            </h1>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="/equipa"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#EAF2FF] text-[#06112E] font-extrabold px-7 py-4 rounded-xl transition-all shadow-lg shadow-black/30 hover:-translate-y-0.5 text-base"
              >
                <Users className="w-5 h-5 text-[#155CEB]" />
                <span>Conhecer a Equipa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/manifesto"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#EAF2FF]/10 text-white font-extrabold px-7 py-4 rounded-xl transition-all text-base border border-[#EAF2FF]/45 hover:border-white"
              >
                <FileText className="w-5 h-5 text-[#2478FF]" />
                <span>Ler o Manifesto</span>
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Moldura da Fotografia de Candidatura */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#2478FF]/25 to-[#081B46]/70 p-3 sm:p-4 border border-[#EAF2FF]/25 shadow-2xl shadow-black/60 backdrop-blur-md">
              <div className="aspect-[16/11] rounded-2xl bg-gradient-to-br from-[#0B2868]/80 via-[#155CEB]/70 to-[#06112E]/85 flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-white/12 backdrop-blur-xs flex items-center justify-center mb-4 border border-[#EAF2FF]/25 relative z-10">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>

                <span className="px-3.5 py-1 rounded-full bg-white text-[#06112E] text-xs font-extrabold uppercase tracking-wider mb-3 relative z-10 shadow-xs">
                  Fotografia Principal
                </span>

                <p className="font-extrabold text-lg sm:text-xl max-w-md text-white relative z-10">
                  [PLACEHOLDER: Fotografia de Candidatura da Lista A — Fazemos Acontecer]
                </p>
                <p className="text-xs sm:text-sm text-[#EAF2FF]/85 mt-2 max-w-sm relative z-10">
                  Espaço preparado para a imagem oficial da candidatura (proporção recomendada 16:11).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
