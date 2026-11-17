import { LucideIcon, CheckCircle2 } from 'lucide-react';

export interface ProposalItem {
  id: string;
  title: string;
  description: string;
}

export interface ProposalCategoryCardProps {
  id: string;
  index: number;
  title: string;
  icon: LucideIcon;
  proposals: ProposalItem[];
}

export default function ProposalCategoryCard({
  id,
  index,
  title,
  icon: Icon,
  proposals,
}: ProposalCategoryCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden"
    >
      {/* Cabeçalho da Categoria */}
      <div className="bg-gradient-to-r from-[#20232B] to-[#0759B5] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#168BFF] text-white flex items-center justify-center shrink-0 shadow-md">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8F3FF]/80 block mb-1">
              Eixo 0{index}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Lista de Propostas da Categoria */}
      <div className="p-6 sm:p-8 divide-y divide-gray-100">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="py-5 first:pt-0 last:pb-0 flex items-start gap-4"
          >
            <div className="mt-1 w-6 h-6 rounded-full bg-[#E8F3FF] text-[#168BFF] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-extrabold text-[#20232B]">
                {proposal.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {proposal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
