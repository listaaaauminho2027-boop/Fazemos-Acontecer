import SuggestionForm from '@/components/SuggestionForm';
import { MessageSquarePlus, Sparkles } from 'lucide-react';

export default function SugestoesPage() {
  return (
    <div className="min-h-screen bg-[#06112E]">
      {/* 1. CABEÇALHO DA PÁGINA */}
      <section className="relative bg-gradient-to-br from-[#06112E] via-[#081B46] to-[#0B2868] text-white py-16 lg:py-24 overflow-hidden border-b border-[#EAF2FF]/12">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2478FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#155CEB]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#155CEB]/25 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#2478FF]/40">
            <MessageSquarePlus className="w-4 h-4 text-[#2478FF]" />
            <span>Participação Aberta • Lista A</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            A Tua Opinião Conta
          </h1>

          <p className="text-[#EAF2FF]/85 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            Tens uma ideia, sugestão ou preocupação que gostavas de ver trabalhada na Universidade do Minho? Partilha connosco — queremos construir o futuro da Academia em conjunto contigo.
          </p>
        </div>
      </section>

      {/* 2. SECÇÃO DO FORMULÁRIO DE SUGESTÕES */}
      <section className="py-16 lg:py-20 bg-mesh-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#155CEB]/25 border border-[#2478FF]/40 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#2478FF]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Envia a tua proposta ou comentário
              </h2>
              <p className="text-xs sm:text-sm text-[#EAF2FF]/75">
                Escolhe o departamento correspondente e descreve a tua sugestão.
              </p>
            </div>
          </div>

          <SuggestionForm />
        </div>
      </section>
    </div>
  );
}
