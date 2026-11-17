import ProposalCategoryCard from '@/components/ProposalCategoryCard';
import { BookOpen } from 'lucide-react';

export default function ManifestoPage() {
  // Oito categorias de propostas
  const categorias = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="bg-[#F1F3F6] min-h-screen pb-20">
      {/* Cabeçalho da Página */}
      <section className="bg-[#0759B5] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white font-bold text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            Programa Eleitoral
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Manifesto Eleitoral
          </h1>
          <p className="text-[#E8F3FF] mt-4 max-w-2xl text-lg">
            [PLACEHOLDER: Introdução ao programa eleitoral da Lista A — Aproximar Futuros, estruturado em 8 eixos fundamentais.]
          </p>
        </div>
      </section>

      {/* Grelha das 8 Categorias */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((num) => (
            <ProposalCategoryCard key={num} number={num} />
          ))}
        </div>
      </section>
    </div>
  );
}
