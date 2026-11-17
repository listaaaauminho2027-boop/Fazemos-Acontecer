import TimelineItem, { TimelineEventProps } from '@/components/TimelineItem';
import { CalendarDays, Sparkles, Vote } from 'lucide-react';

const AGENDA_EVENTS: TimelineEventProps[] = [
  {
    id: 'evento-2-dez',
    date: '2 de dezembro de 2026',
    time: '[Hora a confirmar]',
    title: '[PLACEHOLDER: Título da Iniciativa — 2 de dezembro]',
    description:
      '[PLACEHOLDER: Colar aqui a descrição oficial do evento de 2 de dezembro de 2026.]',
    location: '[Local / Campus a confirmar]',
  },
  {
    id: 'evento-3-dez',
    date: '3 de dezembro de 2026',
    time: '[Hora a confirmar]',
    title: '[PLACEHOLDER: Título da Iniciativa — 3 de dezembro]',
    description:
      '[PLACEHOLDER: Colar aqui a descrição oficial do evento de 3 de dezembro de 2026.]',
    location: '[Local / Campus a confirmar]',
  },
  {
    id: 'evento-4-dez',
    date: '4 de dezembro de 2026',
    time: '[Hora a confirmar]',
    title: '[PLACEHOLDER: Título da Iniciativa — 4 de dezembro]',
    description:
      '[PLACEHOLDER: Colar aqui a descrição oficial do evento de 4 de dezembro de 2026.]',
    location: '[Local / Campus a confirmar]',
  },
  {
    id: 'evento-outros',
    date: '[Data a adicionar]',
    time: '[Hora a confirmar]',
    title: '[PLACEHOLDER: Outros elementos da agenda original]',
    description:
      '[PLACEHOLDER: Espaço reservado para os restantes momentos e iniciativas definidos na agenda original.]',
    location: '[Local / Campus a confirmar]',
  },
  {
    id: 'evento-9-dez-eleicoes',
    date: '9 de dezembro de 2026',
    time: '00:00 — 23:59',
    title: 'Dia das Eleições — AAUMinho',
    description:
      'Ato eleitoral para os órgãos da Associação Académica da Universidade do Minho. Participa e vota Lista A — Fazemos Acontecer.',
    location: 'Universidade do Minho',
    isHighlight: true,
  },
];

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-[#06112E]">
      {/* 1. CABEÇALHO DA PÁGINA */}
      <section className="relative bg-gradient-to-br from-[#06112E] via-[#081B46] to-[#0B2868] text-white py-16 lg:py-24 overflow-hidden border-b border-[#EAF2FF]/12">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2478FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#155CEB]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#155CEB]/25 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#2478FF]/40">
            <CalendarDays className="w-4 h-4 text-[#2478FF]" />
            <span>Campanha & Iniciativas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            A Nossa Agenda
          </h1>

          <p className="text-[#EAF2FF]/85 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            Acompanha todas as iniciativas, momentos de debate e ações de campanha da Lista A — Fazemos Acontecer até ao dia das eleições.
          </p>
        </div>
      </section>

      {/* 2. BANNER VISUAL DE DESTAQUE PARA AS ELEIÇÕES (9 DE DEZEMBRO DE 2026) */}
      <section className="bg-gradient-to-r from-[#081B46] via-[#0B2868] to-[#155CEB] text-white py-12 sm:py-14 relative overflow-hidden border-b border-[#EAF2FF]/15">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#2478FF]/30 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#06112E]/50 backdrop-blur-md border border-[#EAF2FF]/20 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#06112E] font-extrabold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#155CEB]" />
                <span>Data Decisiva</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Eleições AAUMinho — 9 de dezembro de 2026
              </h2>
              <p className="text-sm sm:text-base text-[#EAF2FF]/90 font-medium max-w-2xl">
                Marca na tua agenda o dia em que os estudantes da Universidade do Minho escolhem o futuro da sua Academia.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white text-[#06112E] px-6 py-4 rounded-2xl shadow-lg shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#155CEB] flex items-center justify-center">
                <Vote className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-extrabold uppercase tracking-wider text-[#155CEB]">
                  Ato Eleitoral
                </span>
                <span className="block text-xl sm:text-2xl font-extrabold text-[#06112E]">
                  09 • 12 • 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRONOLOGIA DE EVENTOS */}
      <section className="py-16 lg:py-20 bg-mesh-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Cronologia de Iniciativas
            </h2>
            <p className="text-[#EAF2FF]/75 text-sm sm:text-base mt-1">
              Consulta os próximos momentos da candidatura por ordem cronológica.
            </p>
          </div>

          <div>
            {AGENDA_EVENTS.map((event) => (
              <TimelineItem
                key={event.id}
                id={event.id}
                date={event.date}
                time={event.time}
                title={event.title}
                description={event.description}
                location={event.location}
                isHighlight={event.isHighlight}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
