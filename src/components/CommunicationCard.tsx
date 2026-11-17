import { Calendar, Image as ImageIcon } from 'lucide-react';

export interface CommunicationCardProps {
  index: number;
  title?: string;
  description?: string;
  date?: string;
  imageUrl?: string;
}

export default function CommunicationCard({
  index,
  title = `[PLACEHOLDER: Título da Notícia ou Comunicado #${index}]`,
  description = '[PLACEHOLDER: Resumo breve da mensagem, novidade ou anúncio oficial da candidatura Lista A.]',
  date = '[DD/MM/2026]',
  imageUrl,
}: CommunicationCardProps) {
  return (
    <article className="card-immersive rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Área de Imagem */}
        <div className="aspect-[16/10] bg-gradient-to-br from-[#0B2868] to-[#06112E] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center border-b border-[#EAF2FF]/12">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <>
              <div className="w-12 h-12 rounded-xl bg-[#155CEB]/25 border border-[#2478FF]/40 text-white flex items-center justify-center mb-2 shadow-sm">
                <ImageIcon className="w-6 h-6 text-[#EAF2FF]" />
              </div>
              <span className="text-xs font-extrabold text-[#EAF2FF]/85 uppercase tracking-wider">
                [PLACEHOLDER: Imagem #{index}]
              </span>
            </>
          )}
        </div>

        {/* Conteúdo do Cartão */}
        <div className="p-6 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#EAF2FF] bg-[#155CEB]/25 border border-[#2478FF]/35 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-[#2478FF]" />
            <span>{date}</span>
          </div>

          <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-[#EAF2FF] transition-colors">
            {title}
          </h3>

          <p className="text-sm text-[#EAF2FF]/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-5 pt-3 border-t border-[#EAF2FF]/10">
        <span className="text-xs font-bold text-[#EAF2FF]/55">
          Comunicação Oficial • Lista A
        </span>
      </div>
    </article>
  );
}
