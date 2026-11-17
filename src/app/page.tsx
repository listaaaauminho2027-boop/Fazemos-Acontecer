import Link from 'next/link';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import CommunicationCard from '@/components/CommunicationCard';
import {
  Compass,
  FileText,
  ArrowRight,
  Megaphone,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';

export default function HomePage() {
  const comunicados = [1, 2, 3];
  const instagramSlots = [1, 2, 3, 4];

  return (
    <div className="bg-[#06112E]">
      {/* 1. HERO PRINCIPAL */}
      <Hero />

      {/* 2. CONTAGEM DECRESCENTE PARA AS ELEIÇÕES */}
      <Countdown />

      {/* 3. SECÇÃO DE APRESENTAÇÃO */}
      <section className="py-20 lg:py-24 bg-[#06112E] border-b border-[#EAF2FF]/12 relative overflow-hidden">
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#155CEB]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-br from-[#081B46] via-[#0B2868] to-[#06112E] border border-[#EAF2FF]/15 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-black/40">
            {/* Forma curva decorativa */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#2478FF]/20 blur-2xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#155CEB]/25 border border-[#2478FF]/40 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#2478FF]" />
                <span>A Nossa Visão</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Sobre a Lista A —{' '}
                <span className="text-[#EAF2FF]">Fazemos Acontecer</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#EAF2FF]/85 leading-relaxed font-medium">
                <p>
                  [PLACEHOLDER: Texto editável de apresentação da Lista A e da sua visão para a Associação Académica da Universidade do Minho. Substituir pelo texto oficial.]
                </p>
                <p>
                  [PLACEHOLDER: Segundo parágrafo opcional sobre a proximidade aos estudantes dos campi de Braga e Guimarães.]
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/manifesto"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-[#EAF2FF] text-[#06112E] font-extrabold px-7 py-4 rounded-xl transition-all shadow-lg shadow-black/25 hover:-translate-y-0.5"
                >
                  <FileText className="w-5 h-5 text-[#155CEB]" />
                  <span>Consultar o Manifesto</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECÇÃO DE COMUNICAÇÃO */}
      <section className="py-20 lg:py-24 bg-[#081B46] border-b border-[#EAF2FF]/12 relative overflow-hidden">
        <div className="absolute -bottom-32 left-10 w-80 h-80 rounded-full bg-[#2478FF]/12 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2478FF]">
                <Megaphone className="w-4 h-4" />
                <span>Comunicação & Atualidade</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Novidades da Candidatura
              </h2>
              <p className="text-[#EAF2FF]/80 text-sm sm:text-base max-w-xl">
                Acompanha as mensagens, comunicados e momentos importantes da Lista A.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {comunicados.map((item) => (
              <CommunicationCard key={item} index={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECÇÃO INSTAGRAM */}
      <section className="py-20 lg:py-24 bg-[#06112E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0B2868] via-[#155CEB] to-[#081B46] p-8 sm:p-12 lg:p-14 text-white shadow-2xl shadow-black/45 border border-[#EAF2FF]/20 relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06112E]/40 border border-[#EAF2FF]/20 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider">
                  <Instagram className="w-4 h-4 text-white" />
                  <span>Redes Sociais</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Segue-nos no Instagram
                </h2>
                <p className="text-[#EAF2FF]/90 text-sm sm:text-base">
                  Acompanha o dia a dia da campanha, os encontros nos campi e todas as iniciativas no perfil oficial da Lista A.
                </p>
              </div>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#EAF2FF] text-[#06112E] font-extrabold px-7 py-4 rounded-xl transition-all shadow-lg shrink-0 hover:-translate-y-0.5"
              >
                <Instagram className="w-5 h-5 text-[#155CEB]" />
                <span>Abrir Perfil Oficial</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {instagramSlots.map((slot) => (
                <div
                  key={slot}
                  className="aspect-square rounded-2xl bg-[#06112E]/45 backdrop-blur-xs border border-[#EAF2FF]/20 p-5 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2478FF]/30 border border-[#EAF2FF]/25 flex items-center justify-center mb-3">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                    Publicação #{slot}
                  </span>
                  <span className="text-[11px] text-[#EAF2FF]/80 mt-1">
                    [PLACEHOLDER: Espaço preparado para integração de conteúdo real]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
