import TimelineItem from '@/components/TimelineItem';
import { CalendarDays, Sparkles } from 'lucide-react';

export default function AgendaPage() {
  const eventos = [1, 2, 3, 4];

  return (
    <div className="bg-[#F1F3F6] min-h-screen pb-20">
      {/* Cabeçalho */}
      <section className="bg-[#20232B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168BFF]/20 text-[#168BFF] font-bold text-xs uppercase tracking-wider mb-4">
            <CalendarDays className="w-4 h-4" />
            Calendário de Campanha
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Agenda Eleitoral
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Acompanha os momentos-chave, debates, sessões de esclarecimento e iniciativas nos campi de Braga e Guimarães.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Banner Eleitoral */}
        <div className="bg-gradient-to-r from-[#168BFF] to-[#0759B5] rounded-3xl p-8 sm:p-10 text-white shadow-md">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/15 shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#E8F3FF]">
                Destaque Eleitoral
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                [PLACEHOLDER: Banner Informativo — Data das Eleições / Momento Principal]
              </h2>
              <p className="text-[#E8F3FF] mt-2 text-sm sm:text-base">
                [PLACEHOLDER: Informação destacada sobre horários ou chamada à participação dos estudantes.]
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="pt-4">
          <h2 className="text-2xl font-extrabold text-[#20232B] mb-8">
            Cronograma de Atividades
          </h2>
          <div>
            {eventos.map((item) => (
              <TimelineItem key={item} index={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}