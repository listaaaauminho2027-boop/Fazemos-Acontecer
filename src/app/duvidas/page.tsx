import {
  HelpCircle,
  Vote,
  Globe,
  KeyRound,
  ListChecks,
  CheckCircle2,
  Send,
  ShieldCheck,
  ExternalLink,
  Info,
  Users,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface VotingStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const VOTING_STEPS: VotingStep[] = [
  {
    number: 1,
    title: '[PLACEHOLDER: Título do Passo 1 — Acesso à Plataforma]',
    description:
      '[PLACEHOLDER: Colar aqui a instrução original do Passo 1, sem alterar ou inventar procedimentos.]',
    icon: Globe,
  },
  {
    number: 2,
    title: '[PLACEHOLDER: Título do Passo 2 — Autenticação]',
    description:
      '[PLACEHOLDER: Colar aqui a instrução original do Passo 2, sem alterar ou inventar procedimentos.]',
    icon: KeyRound,
  },
  {
    number: 3,
    title: '[PLACEHOLDER: Título do Passo 3 — Seleção da Eleição]',
    description:
      '[PLACEHOLDER: Colar aqui a instrução original do Passo 3, sem alterar ou inventar procedimentos.]',
    icon: ListChecks,
  },
  {
    number: 4,
    title: '[PLACEHOLDER: Título do Passo 4 — Escolha da Lista]',
    description:
      '[PLACEHOLDER: Colar aqui a instrução original do Passo 4, sem alterar ou inventar procedimentos.]',
    icon: Vote,
  },
  {
    number: 5,
    title: '[PLACEHOLDER: Título do Passo 5 — Verificação do Voto]',
    description:
      '[PLACEHOLDER: Colar aqui a instrução original do Passo 5, sem alterar ou inventar procedimentos.]',
    icon: CheckCircle2,
  },
  {
    number: 6,
    title: '[PLACEHOLDER: Título do Passo 6 — Submissão e Confirmação]',
    description:
      '[PLACEHOLDER: Colar aqui a instrução original do Passo 6, sem alterar ou inventar procedimentos.]',
    icon: Send,
  },
];

export default function ComoVotarPage() {
  return (
    <div className="min-h-screen bg-[#06112E]">
      {/* 1. CABEÇALHO DA PÁGINA */}
      <section className="relative bg-gradient-to-br from-[#06112E] via-[#081B46] to-[#0B2868] text-white py-16 lg:py-24 overflow-hidden border-b border-[#EAF2FF]/12">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2478FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#155CEB]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#155CEB]/25 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#2478FF]/40">
            <HelpCircle className="w-4 h-4 text-[#2478FF]" />
            <span>Guia Prático • Votação Eletrónica</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Como Votar
          </h1>

          <p className="text-[#EAF2FF]/85 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            Consulta o guia passo a passo para exerceres o teu direito de voto de forma simples, rápida e segura nas eleições da Associação Académica da Universidade do Minho.
          </p>
        </div>
      </section>

      {/* 2. DESTAQUE PARA A IMPORTÂNCIA DA PARTICIPAÇÃO ESTUDANTIL */}
      <section className="py-12 lg:py-16 bg-[#081B46] border-b border-[#EAF2FF]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0B2868] to-[#06112E] border border-[#EAF2FF]/18 p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-white text-[#06112E] flex items-center justify-center shrink-0 shadow-md">
              <Users className="w-7 h-7 text-[#155CEB]" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2478FF]">
                A Tua Voz Faz a Diferença
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                A participação de cada estudante constrói uma Academia mais forte
              </h2>
              <p className="text-sm sm:text-base text-[#EAF2FF]/85 leading-relaxed max-w-3xl">
                Votar é o momento em que decides quem representa os estudantes da Universidade do Minho. O processo é totalmente eletrónico e demora apenas alguns minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OS SEIS PASSOS DE VOTAÇÃO */}
      <section className="py-16 lg:py-20 bg-mesh-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#2478FF]">
              Procedimento Oficial
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              6 Passos para Votar
            </h2>
            <p className="text-[#EAF2FF]/75 text-sm sm:text-base mt-2 max-w-2xl">
              Segue a sequência abaixo para concluir o teu voto com sucesso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {VOTING_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="card-immersive rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white text-[#06112E] font-extrabold text-base shadow-sm">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#155CEB]/25 border border-[#2478FF]/40 text-[#EAF2FF] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#2478FF]" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#EAF2FF]/80 leading-relaxed whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#EAF2FF]/12">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF]/50">
                      Passo 0{step.number} de 06
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECÇÃO DE VOTAÇÃO ONLINE (PLATAFORMA OFICIAL eVotUM) */}
      <section className="pb-20 lg:pb-24 bg-[#06112E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0B2868] via-[#155CEB] to-[#081B46] p-8 sm:p-12 text-white shadow-2xl shadow-black/45 border border-[#EAF2FF]/20 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06112E]/45 border border-[#EAF2FF]/20 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Plataforma Oficial eVotUM</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Pronto para participar?
                </h2>

                <p className="text-sm sm:text-base text-[#EAF2FF]/90 leading-relaxed font-medium">
                  Acede diretamente ao portal oficial de votação eletrónica da Universidade do Minho para registar o teu voto.
                </p>

                {/* Nota visual sobre plataforma oficial */}
                <div className="flex items-start gap-3 bg-[#06112E]/55 border border-[#EAF2FF]/20 rounded-2xl p-4 text-xs sm:text-sm text-[#EAF2FF]">
                  <Info className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white">Nota importante:</strong> A votação decorre exclusivamente através da plataforma oficial <strong className="text-white">eVotUM</strong> (<code>https://evotum.uminho.pt/</code>). Confirma sempre o endereço no teu navegador antes de iniciar sessão.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="https://evotum.uminho.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aceder à plataforma de votação oficial eVotUM (abre num novo separador)"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#EAF2FF] text-[#06112E] font-extrabold px-8 py-4 rounded-2xl transition-all shadow-lg text-base w-full sm:w-auto hover:-translate-y-0.5"
                >
                  <span>Aceder à plataforma de votação</span>
                  <ExternalLink className="w-5 h-5 text-[#155CEB]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
