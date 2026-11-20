import ProposalCategoryCard from '@/components/ProposalCategoryCard';
import siteContent from '@/data/siteContent.json';
import {
  FileText,
  GraduationCap,
  Building2,
  Megaphone,
  Landmark,
  Briefcase,
  Trophy,
  PartyPopper,
  HeartHandshake,
  LucideIcon,
} from 'lucide-react';

const ICON_BY_ID: Record<string, LucideIcon> = {
  'acao-educativa': GraduationCap,
  administracao: Building2,
  comunicacao: Megaphone,
  cultural: Landmark,
  carreiras: Briefcase,
  desportivo: Trophy,
  recreativo: PartyPopper,
  social: HeartHandshake,
};

export default function ManifestoPage() {
  const { intro, categories } = siteContent.manifesto;

  return (
    <div className="min-h-screen bg-[#06112E]">
      <section className="relative bg-gradient-to-br from-[#06112E] via-[#081B46] to-[#0B2868] text-white py-16 lg:py-24 overflow-hidden border-b border-[#EAF2FF]/12">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2478FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#155CEB]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#155CEB]/25 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#2478FF]/40">
            <FileText className="w-4 h-4 text-[#2478FF]" />
            <span>Programa Eleitoral • 8 Departamentos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            O Nosso Manifesto
          </h1>

          <p className="text-[#EAF2FF]/85 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium whitespace-pre-line">
            {intro}
          </p>

          <div className="mt-10 pt-8 border-t border-[#EAF2FF]/12">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF]/65 mb-3">
              Consultar por Departamento:
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, idx) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-3.5 py-2 rounded-xl bg-[#081B46]/90 hover:bg-white text-[#EAF2FF] hover:text-[#06112E] border border-[#EAF2FF]/20 text-xs sm:text-sm font-bold transition-all"
                >
                  {idx + 1}. {category.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-mesh-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {categories.map((category, idx) => (
            <ProposalCategoryCard
              key={category.id}
              id={category.id}
              index={idx + 1}
              title={category.title}
              icon={ICON_BY_ID[category.id] || FileText}
              proposals={category.proposals.map((p, pIdx) => ({
                id: `${category.id}-${pIdx}`,
                title: p.title,
                description: p.description,
              }))}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
