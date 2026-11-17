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
    <div className="card-immersive rounded-3xl p-6 sm:p-10">
      {isSubmitted && (
        <div
          role="status"
          className="mb-8 flex items-start gap-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-400/40 p-4 sm:p-5 text-emerald-100"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-extrabold text-white">Sugestão enviada com sucesso!</p>
            <p className="mt-0.5 text-emerald-200/90">
              Obrigado pelo teu contributo para a Lista A — Fazemos Acontecer. A tua mensagem foi encaminhada para a nossa equipa.
            </p>
          </div>
        </div>
      )}

      {errors.submit && (
        <div
          role="alert"
          className="mb-8 flex items-start gap-3.5 rounded-2xl bg-red-950/70 border border-red-400/40 p-4 sm:p-5 text-red-100"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-extrabold text-white">Erro no envio</p>
            <p className="mt-0.5 text-red-200/90">{errors.submit}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label
            htmlFor="department"
            className="flex items-center gap-2 text-sm font-extrabold text-white mb-2"
          >
            <Building className="w-4 h-4 text-[#2478FF]" />
            <span>
              Departamento <span className="text-[#2478FF]">*</span>
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
            className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base font-medium bg-[#06112E]/85 text-white focus:bg-[#06112E] focus:outline-none focus:ring-2 transition-all ${
              errors.department
                ? 'border-red-400 focus:ring-red-400/30'
                : 'border-[#EAF2FF]/25 focus:border-white focus:ring-[#2478FF]/40'
            }`}
          >
            <option value="" className="bg-[#06112E] text-[#EAF2FF]">
              Seleciona o departamento ou área...
            </option>
            {DEPARTMENTS_OPTIONS.map((dept) => (
              <option key={dept} value={dept} className="bg-[#06112E] text-white">
                {dept}
              </option>
            ))}
          </select>

          {errors.department && (
            <p
              id="department-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-300"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.department}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="suggestion"
            className="flex items-center gap-2 text-sm font-extrabold text-white mb-2"
          >
            <MessageSquareText className="w-4 h-4 text-[#2478FF]" />
            <span>
              Sugestão <span className="text-[#2478FF]">*</span>
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
            className={`w-full rounded-xl border px-4 py-3.5 text-sm sm:text-base font-medium bg-[#06112E]/85 text-white placeholder:text-[#EAF2FF]/45 focus:bg-[#06112E] focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.suggestion
                ? 'border-red-400 focus:ring-red-400/30'
                : 'border-[#EAF2FF]/25 focus:border-white focus:ring-[#2478FF]/40'
            }`}
          />

          {errors.suggestion && (
            <p
              id="suggestion-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-300"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#EAF2FF] disabled:opacity-60 text-[#06112E] font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 text-base cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#155CEB]" />
                <span>A enviar...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 text-[#155CEB]" />
                <span>Enviar Sugestão</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
