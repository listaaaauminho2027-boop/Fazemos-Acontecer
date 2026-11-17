import { Calendar, Clock, MapPin } from 'lucide-react';

export interface TimelineEventProps {
  id: string;
  date: string;
  time?: string;
  title: string;
  description?: string;
  location?: string;
  isHighlight?: boolean;
}

export default function TimelineItem({
  date,
  time,
  title,
  description,
  location,
  isHighlight = false,
}: TimelineEventProps) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-10 last:pb-0 group">
      {/* Linha vertical da cronologia */}
      <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-0 w-0.5 bg-[#2478FF]/35 group-last:hidden" />

      {/* Marcador circular na linha */}
      <div
        className={`absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
          isHighlight
            ? 'bg-white border-[#2478FF] shadow-md shadow-[#2478FF]/40'
            : 'bg-[#06112E] border-[#2478FF]'
        }`}
      />

      {/* Cartão do Evento */}
      <article
        className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
          isHighlight
            ? 'bg-gradient-to-br from-[#155CEB] via-[#0B2868] to-[#081B46] text-white border border-white/30 shadow-xl shadow-[#155CEB]/25'
            : 'card-immersive hover:-translate-y-0.5'
        }`}
      >
        {/* Metadados: Data, Hora e Local */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
              isHighlight
                ? 'bg-white text-[#06112E]'
                : 'bg-[#155CEB]/25 text-[#EAF2FF] border border-[#2478FF]/40'
            }`}
          >
            <Calendar className={`w-3.5 h-3.5 ${isHighlight ? 'text-[#155CEB]' : 'text-[#2478FF]'}`} />
            <span>{date}</span>
          </span>

          {time && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#06112E]/60 text-[#EAF2FF] border border-[#EAF2FF]/15">
              <Clock className="w-3.5 h-3.5 text-[#2478FF]" />
              <span>{time}</span>
            </span>
          )}

          {location && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#06112E]/60 text-[#EAF2FF] border border-[#EAF2FF]/15">
              <MapPin className="w-3.5 h-3.5 text-[#2478FF]" />
              <span>{location}</span>
            </span>
          )}
        </div>

        {/* Título e Descrição */}
        <h3 className="text-xl sm:text-2xl font-extrabold leading-snug text-white">
          {title}
        </h3>

        {description && (
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed whitespace-pre-line text-[#EAF2FF]/85">
            {description}
          </p>
        )}
      </article>
    </div>
  );
}
