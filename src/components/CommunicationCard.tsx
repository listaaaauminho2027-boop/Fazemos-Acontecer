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
    <article className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-[#168BFF] transition-all flex flex-col justify-between group">
      <div>
        {/* Área de Imagem (Substituível via prop imageUrl) */}
        <div className="aspect-[16/10] bg-[#E8F3FF] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center border-b border-[#F1F3F6]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <>
              <div className="w-12 h-12 rounded-xl bg-white text-[#168BFF] flex items-center justify-center mb-2 shadow-xs">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#0759B5] uppercase tracking-wider">
                [PLACEHOLDER: Imagem #{index}]
              </span>
            </>
          )}
        </div>

        {/* Conteúdo do Cartão */}
        <div className="p-6 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#168BFF] bg-[#E8F3FF] px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>

          <h3 className="text-xl font-extrabold text-[#20232B] leading-snug group-hover:text-[#0759B5] transition-colors">
            {title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-5 pt-2">
        <span className="text-xs font-bold text-gray-400">
          Comunicação Oficial • Lista A
        </span>
      </div>
    </article>
  );
}
