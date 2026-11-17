import ProposalCategoryCard, {
  ProposalItem,
} from '@/components/ProposalCategoryCard';
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
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ManifestoCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  proposals: ProposalItem[];
}

const MANIFESTO_CATEGORIES: ManifestoCategory[] = [
  {
    id: 'acao-educativa',
    title: 'Ação Educativa e Associativismo',
    icon: GraduationCap,
    proposals: [
      {
        id: 'ae-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Ação Educativa e Associativismo]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Ação Educativa e Associativismo, sem resumos ou alterações.]',
      },
      {
        id: 'ae-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Ação Educativa e Associativismo]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'administracao',
    title: 'Administração',
    icon: Building2,
    proposals: [
      {
        id: 'adm-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Administração]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Administração, sem resumos ou alterações.]',
      },
      {
        id: 'adm-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Administração]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'comunicacao',
    title: 'Comunicação',
    icon: Megaphone,
    proposals: [
      {
        id: 'com-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Comunicação]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Comunicação, sem resumos ou alterações.]',
      },
      {
        id: 'com-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Comunicação]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'cultural',
    title: 'Cultural e Tradições Académicas',
    icon: Landmark,
    proposals: [
      {
        id: 'cult-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Cultural e Tradições Académicas]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Cultural e Tradições Académicas, sem resumos ou alterações.]',
      },
      {
        id: 'cult-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Cultural e Tradições Académicas]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'carreiras',
    title: 'Desenvolvimento de Carreiras',
    icon: Briefcase,
    proposals: [
      {
        id: 'car-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Desenvolvimento de Carreiras]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Desenvolvimento de Carreiras, sem resumos ou alterações.]',
      },
      {
        id: 'car-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Desenvolvimento de Carreiras]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'desportivo',
    title: 'Desportivo',
    icon: Trophy,
    proposals: [
      {
        id: 'desp-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Desportivo]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Desportivo, sem resumos ou alterações.]',
      },
      {
        id: 'desp-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Desportivo]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'recreativo',
    title: 'Recreativo',
    icon: PartyPopper,
    proposals: [
      {
        id: 'rec-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Recreativo]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Recreativo, sem resumos ou alterações.]',
      },
      {
        id: 'rec-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Recreativo]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social',
    icon: HeartHandshake,
    proposals: [
      {
        id: 'soc-1',
        title: '[PLACEHOLDER: Título da Proposta 1 — Social]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original para Social, sem resumos ou alterações.]',
      },
      {
        id: 'soc-2',
        title: '[PLACEHOLDER: Título da Proposta 2 — Social]',
        description:
          '[PLACEHOLDER: Colar aqui o texto integral da proposta original, se aplicável.]',
      },
    ],
  },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#06112E]">
      {/* CABEÇALHO DA PÁGINA */}
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

          <p className="text-[#EAF2FF]/85 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            [PLACEHOLDER: Texto introdutório sobre a visão e os compromissos da Lista A — Fazemos Acontecer. Substituir pelo texto original.]
          </p>

          {/* Índice rápido de consulta por departamento */}
          <div className="mt-10 pt-8 border-t border-[#EAF2FF]/12">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF]/65 mb-3">
              Consultar por Departamento:
            </p>
            <div className="flex flex-wrap gap-2">
              {MANIFESTO_CATEGORIES.map((category, idx) => (
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

      {/* SECÇÕES DAS 8 CATEGORIAS DO MANIFESTO */}
      <section className="py-16 lg:py-20 bg-mesh-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {MANIFESTO_CATEGORIES.map((category, idx) => (
            <ProposalCategoryCard
              key={category.id}
              id={category.id}
              index={idx + 1}
              title={category.title}
              icon={category.icon}
              proposals={category.proposals}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
