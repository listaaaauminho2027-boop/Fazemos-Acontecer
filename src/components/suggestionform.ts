'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function SuggestionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F1F3F6] shadow-sm">
      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#E8F3FF] text-[#168BFF] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#20232B]">
            Sugestão Registada (Pré-visualização)
          </h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm">
            [PLACEHOLDER: O envio real será ligado na etapa de funcionalidades. Obrigado pelo teu contributo para aproximar futuros!]
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-xl bg-[#F1F3F6] hover:bg-[#E8F3FF] text-[#20232B] font-bold text-sm transition-colors cursor-pointer"
          >
            Enviar outra sugestão
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="categoria"
              className="block text-sm font-extrabold text-[#20232B] mb-2"
            >
              Área / Tema da Sugestão
            </label>
            <select
              id="categoria"
              name="categoria"
              required
              className="w-full rounded-xl border border-gray-300 bg-[#F1F3F6]/50 px-4 py-3.5 text-sm font-medium text-[#20232B] focus:border-[#168BFF] focus:bg-white focus:outline-none"
            >
              <option value="">Seleciona uma área...</option>
              <option value="categoria-1">[Opção 1 — Área Temática Placeholder]</option>
              <option value="categoria-2">[Opção 2 — Área Temática Placeholder]</option>
              <option value="categoria-3">[Opção 3 — Área Temática Placeholder]</option>
              <option value="categoria-4">[Opção 4 — Área Temática Placeholder]</option>
              <option value="outro">Outra sugestão geral</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-extrabold text-[#20232B] mb-2"
            >
              A tua sugestão ou ideia
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              placeholder="Escreve aqui a tua proposta, problema identificado ou ideia para melhorar a Universidade do Minho..."
              className="w-full rounded-xl border border-gray-300 bg-[#F1F3F6]/50 px-4 py-3.5 text-sm text-[#20232B] focus:border-[#168BFF] focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#168BFF] hover:bg-[#0759B5] text-white font-bold px-8 py-4 rounded-xl transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Submeter Sugestão</span>
          </button>
        </form>
      )}
    </div>
  );
}