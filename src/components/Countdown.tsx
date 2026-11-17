'use client';

import { useEffect, useState } from 'react';
import { CalendarClock, Sparkles, HeartHandshake } from 'lucide-react';

type ElectionPhase = 'loading' | 'before' | 'today' | 'after';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// 9 de dezembro de 2026 às 00:00:00 no fuso horário Europe/Lisbon (WET = UTC+0 em dezembro)
const ELECTION_START_MS = Date.parse('2026-12-09T00:00:00Z');
// Fim do dia 9 de dezembro de 2026 (início de 10 de dezembro às 00:00:00 Europe/Lisbon)
const ELECTION_END_MS = Date.parse('2026-12-10T00:00:00Z');

export default function Countdown() {
  const [phase, setPhase] = useState<ElectionPhase>('loading');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      // Obtém a data/hora atual sincronizada com o fuso horário Europe/Lisbon
      const nowLisbonString = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Lisbon',
      });
      const nowLisbonMs = new Date(nowLisbonString).getTime();

      if (nowLisbonMs < ELECTION_START_MS) {
        const diff = ELECTION_START_MS - nowLisbonMs;
        setPhase('before');
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else if (nowLisbonMs >= ELECTION_START_MS && nowLisbonMs < ELECTION_END_MS) {
        setPhase('today');
      } else {
        setPhase('after');
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="bg-[#0759B5] text-white py-14 sm:py-16 relative overflow-hidden">
      {/* Detalhe decorativo sutil */}
      <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#168BFF]/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ESTADO 1: ANTES DAS ELEIÇÕES (CONTADOR DINÂMICO) */}
        {(phase === 'before' || phase === 'loading') && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E8F3FF] font-extrabold text-xs uppercase tracking-wider">
                <CalendarClock className="w-4 h-4 text-[#168BFF]" />
                <span>Contagem Decrescente</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Rumo às Eleições da AAUMinho
              </h2>
              <p className="text-sm sm:text-base text-[#E8F3FF]/90 font-medium">
                9 de dezembro de 2026 • O teu voto aproxima futuros.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-5 w-full max-w-lg">
              {[
                { label: 'Dias', value: phase === 'loading' ? '--' : formatNumber(timeLeft.days) },
                { label: 'Horas', value: phase === 'loading' ? '--' : formatNumber(timeLeft.hours) },
                { label: 'Minutos', value: phase === 'loading' ? '--' : formatNumber(timeLeft.minutes) },
                { label: 'Segundos', value: phase === 'loading' ? '--' : formatNumber(timeLeft.seconds) },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-3.5 sm:p-5 text-center shadow-sm"
                >
                  <span className="block text-3xl sm:text-5xl font-extrabold text-white tabular-nums tracking-tight">
                    {unit.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#E8F3FF] mt-1.5 block">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ESTADO 2: NO DIA DAS ELEIÇÕES (9 DE DEZEMBRO DE 2026) */}
        {phase === 'today' && (
          <div className="text-center py-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#168BFF] text-white font-extrabold text-xs uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>9 de Dezembro de 2026</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
              É HOJE!
            </h2>
            <p className="text-lg sm:text-xl text-[#E8F3FF] font-semibold max-w-2xl mx-auto">
              Chegou o dia de decidir o futuro da nossa Academia. Participa e vota Lista A — Aproximar Futuros!
            </p>
          </div>
        )}

        {/* ESTADO 3: APÓS AS ELEIÇÕES */}
        {phase === 'after' && (
          <div className="text-center py-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-[#E8F3FF] font-extrabold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-[#168BFF]" />
              <span>Lista A — Aproximar Futuros</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Obrigado a todos os estudantes!
            </h2>
            <p className="text-base sm:text-lg text-[#E8F3FF] font-medium max-w-2xl mx-auto">
              Agradecemos a cada estudante que participou, debateu e fez parte desta caminhada connosco na Universidade do Minho.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
