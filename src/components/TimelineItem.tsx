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
      <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-0 w-0.5 bg-[#168BFF]/25 group-last:hidden" />

      {/* Marcador circular na linha */}
      <div
        className={`absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
          isHighlight
            ? 'bg-[#168BFF] border-[#E8F3FF] shadow-md'
            : 'bg-white border-[#168BFF]'
        }`}
      />

      {/* Cartão do Evento */}
      <article
        className={`rounded-2xl p-6 sm:p-7 transition-all ${
          isHighlight
            ? 'bg-gradient-to-br from-[#0759B5] to-[#168BFF] text-white shadow-lg'
            : 'bg-white border border-gray-200/80 shadow-xs hover:border-[#168BFF] hover:shadow-md'
        }`}
      >
        {/* Metadados: Data, Hora e Local */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
              isHighlight
                ? 'bg-white text-[#0759B5]'
                : 'bg-[#E8F3FF] text-[#0759B5]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </span>

          {time && (
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                isHighlight
                  ? 'bg-white/15 text-white'
                  : 'bg-[#F1F3F6] text-gray-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-[#168BFF]" />
              <span>{time}</span>
            </span>
          )}

          {location && (
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                isHighlight
                  ? 'bg-white/15 text-white'
                  : 'bg-[#F1F3F6] text-gray-700'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#168BFF]" />
              <span>{location}</span>
            </span>
          )}
        </div>

        {/* Título e Descrição */}
        <h3
          className={`text-xl sm:text-2xl font-extrabold leading-snug ${
            isHighlight ? 'text-white' : 'text-[#20232B]'
          }`}
        >
          {title}
        </h3>

        {description && (
          <p
            className={`mt-2.5 text-sm sm:text-base leading-relaxed whitespace-pre-line ${
              isHighlight ? 'text-[#E8F3FF]' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
        )}
      </article>
    </div>
  );
}
