import { Layers, ArrowRight } from 'lucide-react';

interface ProposalCategoryCardProps {
  number: number;
  title?: string;
  summary?: string;
}

export default function ProposalCategoryCard({
  number,
  title = `[Categoria de Propostas #${number}]`,
  summary = '[PLACEHOLDER: Resumo e medidas principais desta área programática do manifesto.]',
}: ProposalCategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-[#F1F3F6] shadow-xs hover:border-[#168BFF] hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#E8F3FF] text-[#168BFF] flex items-center justify-center font-extrabold text-lg">
            0{number}
          </div>
          <Layers className="w-5 h-5 text-gray-400" />
        </div>

        <h3 className="text-xl font-extrabold text-[#20232B] mb-3">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F1F3F6] flex items-center justify-between text-xs font-bold text-[#168BFF]">
        <span>[PLACEHOLDER: Espaço para medidas detalhadas]</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}
