'use client';

import { useState, FormEvent } from 'react';
import {
  Send,
  AlertCircle,
  CheckCircle2,
  Building,
  MessageSquareText,
  Loader2,
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
  submit?: string;
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
    setErrors({});

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/listaa.aauminho2027@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `Nova Sugestão (${department}) — Lista A`,
            Departamento: department,
            Sugestao: suggestion.trim(),
            _template: 'table',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Falha ao enviar a sugestão.');
      }

      setDepartment('');
      setSuggestion('');
      setErrors({});
      setIsSubmitted(true);
    } catch {
      setErrors({
        submit:
          'Não foi possível enviar a tua sugestão neste momento. Por favor, verifica a tua ligação e tenta novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 sm:p-10">
      {isSubmitted && (
        <div
          role="status"
          className="mb-8 flex items-start gap-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 sm:p-5 text-emerald-900"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-extrabold">Sugestão enviada com sucesso!</p>
            <p className="mt-0.5 text-emerald-800">
              Obrigado pelo teu contributo para a Lista A — Fazemos Acontecer. A tua mensagem foi encaminhada para a nossa equipa.
            </p>
          </div>
        </div>
      )}

      {errors.submit && (
        <div
          role="alert"
          className="mb-8 flex items-start gap-3.5 rounded-2xl bg-red-50 border border-red-200 p-4 sm:p-5 text-red-900"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-extrabold">Erro no envio</p>
            <p className="mt-0.5 text-red-800">{errors.submit}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
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

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#168BFF] hover:bg-[#0759B5] disabled:opacity-60 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>A enviar...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Sugestão</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
