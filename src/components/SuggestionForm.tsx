'use client';

import { useState, FormEvent } from 'react';
import {
  Send,
  AlertCircle,
  CheckCircle2,
  Info,
  Building,
  MessageSquareText,
} from 'lucide-react';

const DEPARTMENTS_OPTIONS = [
  'Presidência',
  'Ação Educativa e Associativismo',
  'Administração',
  'Comunicação',
  'Cultural e Tradições Académicas',
  'Desenvolvimento de Carreiras',
  'Desportivo',
  'Recreativo',
  'Social',
  'Sugestão Geral',
] as const;

interface FormErrors {
  department?: string;
  suggestion?: string;
}

export default function SuggestionForm() {
  const [department, setDepartment] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!department.trim()) {
      newErrors.department = 'Por favor, seleciona um departamento ou área.';
    }

    if (!suggestion.trim()) {
      newErrors.suggestion = 'Por favor, escreve a tua sugestão antes de enviar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Estrutura preparada para futura integração com serviço de backend / API / base de dados:
    // const payload = { department, suggestion: suggestion.trim(), createdAt: new Date().toISOString() };
    // await fetch('/api/sugestoes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

    // Limpa os campos e apresenta feedback transparente
    setDepartment('');
    setSuggestion('');
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 sm:p-10">
      {/* Aviso claro sobre o estado da integração de backend */}
      <div className="mb-8 flex items-start gap-3.5 rounded-2xl bg-[#E8F3FF] border border-[#168BFF]/25 p-4 sm:p-5 text-[#0759B5]">
        <Info className="w-5 h-5 text-[#168BFF] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <p className="font-extrabold">Modo de Demonstração Ativo</p>
          <p className="mt-0.5 text-[#0759B5]/90">
            Este formulário encontra-se preparado para futura ligação a um serviço de backend ou base de dados. Enquanto a integração não está ativa, as submissões servem apenas para validação visual e não são armazenadas externamente.
          </p>
        </div>
      </div>

      {/* Mensagem de confirmação após submissão válida */}
      {isSubmitted && (
        <div
          role="status"
          className="mb-8 flex items-start gap-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 sm:p-5 text-emerald-900"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-extrabold">Formulário validado com sucesso!</p>
            <p className="mt-0.5 text-emerald-800">
              Os campos foram verificados e limpos. Nota: como o formulário está em modo de demonstração sem backend configurado, esta mensagem não foi enviada nem guardada numa base de dados.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Campo 1: Departamento */}
        <div>
          <label
            htmlFor="department"
            className="flex items-center gap-2 text-sm font-extrabold text-[#20232B] mb-2"
          >
            <Building className="w-4 h-4 text-[#168BFF]" />
            <span>
              Departamento <span className="text-red-500">*</span>
            </span>
          </label>

          <select
            id="department"
            name="department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              if (errors.department) {
                setErrors((prev) => ({ ...prev, department: undefined }));
              }
              if (isSubmitted) setIsSubmitted(false);
            }}
            aria-invalid={Boolean(errors.department)}
            aria-describedby={errors.department ? 'department-error' : undefined}
            className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base font-medium bg-[#F1F3F6]/60 text-[#20232B] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.department
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-[#168BFF] focus:ring-[#168BFF]/20'
            }`}
          >
            <option value="">Seleciona o departamento ou área...</option>
            {DEPARTMENTS_OPTIONS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {errors.department && (
            <p
              id="department-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.department}</span>
            </p>
          )}
        </div>

        {/* Campo 2: Sugestão */}
        <div>
          <label
            htmlFor="suggestion"
            className="flex items-center gap-2 text-sm font-extrabold text-[#20232B] mb-2"
          >
            <MessageSquareText className="w-4 h-4 text-[#168BFF]" />
            <span>
              Sugestão <span className="text-red-500">*</span>
            </span>
          </label>

          <textarea
            id="suggestion"
            name="suggestion"
            rows={6}
            value={suggestion}
            onChange={(e) => {
              setSuggestion(e.target.value);
              if (errors.suggestion) {
                setErrors((prev) => ({ ...prev, suggestion: undefined }));
              }
              if (isSubmitted) setIsSubmitted(false);
            }}
            placeholder="Partilha aqui a tua ideia, proposta ou preocupação para a Universidade do Minho..."
            aria-invalid={Boolean(errors.suggestion)}
            aria-describedby={errors.suggestion ? 'suggestion-error' : undefined}
            className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base font-medium bg-[#F1F3F6]/60 text-[#20232B] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.suggestion
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-[#168BFF] focus:ring-[#168BFF]/20'
            }`}
          />

          {errors.suggestion && (
            <p
              id="suggestion-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.suggestion}</span>
            </p>
          )}
        </div>

        {/* Botão de Envio */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#168BFF] hover:bg-[#0759B5] disabled:opacity-60 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>Enviar Sugestão</span>
          </button>
        </div>
      </form>
    </div>
  );
}
