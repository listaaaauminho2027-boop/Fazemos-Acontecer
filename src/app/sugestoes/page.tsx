import SuggestionForm from '@/components/SuggestionForm';
import { MessageSquarePlus, Sparkles } from 'lucide-react';

export default function SugestoesPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F6]">
      {/* 1. CABEÇALHO DA PÁGINA */}
      <section className="relative bg-[#20232B] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#168BFF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#0759B5]/30 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#168BFF]/20 text-[#168BFF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#168BFF]/30">
            <MessageSquarePlus className="w-4 h-4" />
            <span>Participação Aberta • Lista A</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            A Tua Opinião Conta
          </h1>

          <p className="text-gray-300 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            Tens uma ideia, sugestão ou preocupação que gostavas de ver trabalhada na Universidade do Minho? Partilha connosco — queremos construir o futuro da Academia em conjunto contigo.
          </p>
        </div>
      </section>

      {/* 2. SECÇÃO DO FORMULÁRIO DE SUGESTÕES */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F3FF] text-[#168BFF] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#20232B]">
                Envia a tua proposta ou comentário
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
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
