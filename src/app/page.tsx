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
    <div>
      {/* 1. HERO PRINCIPAL */}
      <Hero />

      {/* 2. CONTAGEM DECRESCENTE PARA AS ELEIÇÕES */}
      <Countdown />

      {/* 3. SECÇÃO DE APRESENTAÇÃO */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#F1F3F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F3F6] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#168BFF]/10 rounded-bl-full pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FF] text-[#0759B5] font-extrabold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#168BFF]" />
                <span>A Nossa Visão</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20232B] tracking-tight leading-tight">
                Sobre a Lista A —{' '}
                <span className="text-[#168BFF]">Fazemos Acontecer</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
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
                  className="inline-flex items-center gap-2.5 bg-[#168BFF] hover:bg-[#0759B5] text-white font-extrabold px-7 py-4 rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  <FileText className="w-5 h-5" />
                  <span>Consultar o Manifesto</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECÇÃO DE COMUNICAÇÃO */}
      <section className="py-20 lg:py-24 bg-[#F1F3F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#168BFF]">
                <Megaphone className="w-4 h-4" />
                <span>Comunicação & Atualidade</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20232B] tracking-tight">
                Novidades da Candidatura
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-xl">
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
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#20232B] to-[#0759B5] p-8 sm:p-12 lg:p-14 text-white shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#E8F3FF] font-extrabold text-xs uppercase tracking-wider">
                  <Instagram className="w-4 h-4 text-[#168BFF]" />
                  <span>Redes Sociais</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Segue-nos no Instagram
                </h2>
                <p className="text-[#E8F3FF]/90 text-sm sm:text-base">
                  Acompanha o dia a dia da campanha, os encontros nos campi e todas as iniciativas no perfil oficial da Lista A.
                </p>
              </div>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#168BFF] hover:bg-white text-white hover:text-[#0759B5] font-extrabold px-7 py-4 rounded-xl transition-all shadow-md shrink-0"
              >
                <Instagram className="w-5 h-5" />
                <span>Abrir Perfil Oficial</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {instagramSlots.map((slot) => (
                <div
                  key={slot}
                  className="aspect-square rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 p-5 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#168BFF]/25 flex items-center justify-center mb-3">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                    Publicação #{slot}
                  </span>
                  <span className="text-[11px] text-[#E8F3FF]/80 mt-1">
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
