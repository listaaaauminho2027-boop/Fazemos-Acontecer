import TeamCard from '@/components/TeamCard';
import { Users } from 'lucide-react';

export default function EquipaPage() {
  // Grelha preparada exatamente para 35 dirigentes
  const dirigentes = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="bg-[#F1F3F6] min-h-screen pb-20">
      {/* Cabeçalho da Página */}
      <section className="bg-[#20232B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168BFF]/20 text-[#168BFF] font-bold text-xs uppercase tracking-wider mb-4">
            <Users className="w-4 h-4" />
            Os Rostos da Candidatura
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            A Nossa Equipa
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Conhece os 35 dirigentes que dão corpo ao projeto Lista A — Aproximar Futuros.
          </p>
        </div>
      </section>

      {/* Filtro / Espaço Departamentos Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 mb-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-gray-500 px-2">
            Departamentos:
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#168BFF] text-white text-xs font-bold">
            Todos (35)
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#F1F3F6] text-[#20232B] text-xs font-bold">
            [PLACEHOLDER: Filtros por Departamento]
          </span>
        </div>

        {/* Grelha dos 35 Dirigentes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {dirigentes.map((num) => (
            <TeamCard key={num} index={num} />
          ))}
        </div>
      </section>
    </div>
  );
}