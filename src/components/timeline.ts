import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  index: number;
  date?: string;
  title?: string;
  location?: string;
  description?: string;
}

export default function TimelineItem({
  index,
  date = `[Data Evento #${index}]`,
  title = `[Título da Iniciativa / Evento #${index}]`,
  location = '[Campus / Local]',
  description = '[PLACEHOLDER: Descrição da atividade prevista na agenda de campanha.]',
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-10 border-l-4 border-[#168BFF] last:pb-0">
      {/* Ponto na Timeline */}
      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#168BFF] border-4 border-white shadow-sm" />

      <div className="bg-white rounded-2xl p-6 border border-[#F1F3F6] shadow-xs">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider bg-[#E8F3FF] text-[#0759B5] px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-[#168BFF]" />
            {location}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-[#20232B] mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}