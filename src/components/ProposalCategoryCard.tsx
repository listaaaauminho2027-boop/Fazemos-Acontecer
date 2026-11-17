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
      className="scroll-mt-28 card-immersive rounded-3xl overflow-hidden"
    >
      {/* Cabeçalho da Categoria */}
      <div className="bg-gradient-to-r from-[#0B2868] via-[#155CEB] to-[#081B46] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAF2FF]/15">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#06112E] flex items-center justify-center shrink-0 shadow-md">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#155CEB]" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#EAF2FF]/85 block mb-1">
              Eixo 0{index}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Lista de Propostas da Categoria */}
      <div className="p-6 sm:p-8 divide-y divide-[#EAF2FF]/12">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="py-5 first:pt-0 last:pb-0 flex items-start gap-4"
          >
            <div className="mt-1 w-6 h-6 rounded-full bg-[#155CEB]/30 border border-[#2478FF]/45 text-[#EAF2FF] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#2478FF]" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                {proposal.title}
              </h3>
              <p className="text-sm sm:text-base text-[#EAF2FF]/80 leading-relaxed whitespace-pre-line">
                {proposal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
