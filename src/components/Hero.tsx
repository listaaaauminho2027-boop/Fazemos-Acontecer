import Link from 'next/link';
import { ArrowRight, Users, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24 border-b border-[#F1F3F6]">
      {/* Elementos gráficos decorativos */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E8F3FF] blur-2xl opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#168BFF]/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F3FF] text-[#0759B5] font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
              Eleições AAUMinho
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#20232B] tracking-tight leading-[1.08]">
              LISTA A <br />
              <span className="text-[#168BFF]">APROXIMAR FUTUROS</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
              [PLACEHOLDER: Slogan principal ou texto de apresentação da candidatura retirado de aproximarfuturos.pt]
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 bg-[#168BFF] hover:bg-[#0759B5] text-white font-bold px-7 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                <span>Conhecer Manifesto</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/equipa"
                className="inline-flex items-center gap-2 bg-[#F1F3F6] hover:bg-[#E8F3FF] text-[#20232B] hover:text-[#0759B5] font-bold px-7 py-4 rounded-xl transition-colors"
              >
                <Users className="w-5 h-5" />
                <span>Conhecer a Equipa</span>
              </Link>
            </div>
          </div>

          {/* Placeholder Fotografia Principal */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl bg-[#E8F3FF] border-4 border-[#168BFF] flex flex-col items-center justify-center p-8 text-center shadow-xl">
              <span className="px-3 py-1 rounded-md bg-[#168BFF] text-white text-xs font-bold uppercase mb-3">
                Imagem em Destaque
              </span>
              <p className="font-bold text-[#0759B5] text-lg">
                [PLACEHOLDER: Fotografia Oficial da Candidatura / Cabeça de Lista]
              </p>
              <p className="text-xs text-[#20232B]/70 mt-2">
                Substituir por imagem oficial de aproximarfuturos.pt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
