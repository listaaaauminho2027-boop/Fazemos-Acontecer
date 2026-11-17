import SuggestionForm from '@/components/SuggestionForm';
import { MessageSquarePlus } from 'lucide-react';

export default function SugestoesPage() {
  return (
    <div className="bg-[#F1F3F6] min-h-screen pb-20">
      {/* Cabeçalho */}
      <section className="bg-[#20232B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168BFF]/20 text-[#168BFF] font-bold text-xs uppercase tracking-wider mb-4">
            <MessageSquarePlus className="w-4 h-4" />
            Participação Ativa
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Caixa de Sugestões
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            O futuro constrói-se em conjunto. Partilha connosco as tuas ideias, preocupações ou propostas para a academia.
          </p>
        </div>
      </section>

      {/* Área do Formulário */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <SuggestionForm />
      </section>
    </div>
  );
}