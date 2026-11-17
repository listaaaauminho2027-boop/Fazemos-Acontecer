import Link from 'next/link';
import { Users, FileText, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#F1F3F6]">
      {/* Elementos gráficos decorativos */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#E8F3FF] blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#168BFF]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Coluna Esquerda: Título, Apresentação e Botões */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E8F3FF] text-[#0759B5] font-extrabold text-xs uppercase tracking-wider border border-[#168BFF]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#168BFF]" />
              Candidatura AAUMinho
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#20232B] tracking-tight leading-[1.08]">
              Lista A —{' '}
              <span className="text-[#168BFF] block sm:inline">
                Aproximar Futuros
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
              [PLACEHOLDER: Frase de apresentação da candidatura Lista A — Aproximar Futuros. Substituir pelo texto oficial de aproximarfuturos.pt.]
            </p>

            {/* Botões de Ação (Equipa e Manifesto) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/equipa"
                className="inline-flex items-center justify-center gap-2.5 bg-[#168BFF] hover:bg-[#0759B5] text-white font-extrabold px-7 py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base"
              >
                <Users className="w-5 h-5" />
                <span>Conhecer a Equipa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/manifesto"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F1F3F6] hover:bg-[#E8F3FF] text-[#20232B] hover:text-[#0759B5] font-extrabold px-7 py-4 rounded-xl transition-colors text-base border border-gray-200/80"
              >
                <FileText className="w-5 h-5 text-[#168BFF]" />
                <span>Ler o Manifesto</span>
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Espaço para Fotografia de Grupo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#E8F3FF] p-3 sm:p-4 border-2 border-[#168BFF]/30 shadow-xl">
              {/* Moldura da Fotografia (Substituir este bloco por <img src="/images/equipa-hero.jpg" ... /> quando tiveres a foto real) */}
              <div className="aspect-[16/11] rounded-2xl bg-gradient-to-br from-[#168BFF] to-[#0759B5] flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center mb-4 border border-white/25 relative z-10">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>

                <span className="px-3 py-1 rounded-full bg-white text-[#0759B5] text-xs font-extrabold uppercase tracking-wider mb-3 relative z-10">
                  Fotografia Principal
                </span>

                <p className="font-extrabold text-lg sm:text-xl max-w-md relative z-10">
                  [PLACEHOLDER: Fotografia de Grupo da Lista A — Aproximar Futuros]
                </p>
                <p className="text-xs sm:text-sm text-[#E8F3FF] mt-2 max-w-sm relative z-10">
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
