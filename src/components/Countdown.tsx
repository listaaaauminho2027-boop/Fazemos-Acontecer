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

const ELECTION_START_MS = Date.UTC(2026, 11, 9, 0, 0, 0);
const ELECTION_END_MS = Date.UTC(2026, 11, 10, 0, 0, 0);

function getNowInLisbonMs(): number {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Lisbon',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(new Date());
  const getPart = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);

  return Date.UTC(
    getPart('year'),
    getPart('month') - 1,
    getPart('day'),
    getPart('hour'),
    getPart('minute'),
    getPart('second')
  );
}

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
      const nowLisbonMs = getNowInLisbonMs();

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
    <section
      aria-label="Contagem decrescente para as eleições"
      className="bg-gradient-to-r from-[#081B46] via-[#0B2868] to-[#155CEB] text-white py-14 sm:py-16 relative overflow-hidden border-b border-[#EAF2FF]/15"
    >
      {/* Arco luminoso decorativo */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#2478FF]/30 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-24 w-72 h-72 rounded-full bg-[#06112E]/60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(phase === 'before' || phase === 'loading') && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06112E]/45 border border-[#EAF2FF]/20 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider">
                <CalendarClock className="w-4 h-4 text-[#2478FF]" />
                <span>Contagem Decrescente</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Rumo às Eleições da AAUMinho
              </h2>
              <p className="text-sm sm:text-base text-[#EAF2FF]/90 font-medium">
                9 de dezembro de 2026 • Juntos fazemos acontecer.
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
                  className="bg-[#06112E]/55 backdrop-blur-md border border-[#EAF2FF]/20 rounded-2xl p-3.5 sm:p-5 text-center shadow-lg shadow-black/25"
                >
                  <span className="block text-3xl sm:text-5xl font-extrabold text-white tabular-nums tracking-tight">
                    {unit.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF] mt-1.5 block">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {phase === 'today' && (
          <div className="text-center py-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#06112E] font-extrabold text-xs uppercase tracking-widest shadow-md">
              <Sparkles className="w-4 h-4 text-[#155CEB]" />
              <span>9 de Dezembro de 2026</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
              É HOJE!
            </h2>
            <p className="text-lg sm:text-xl text-[#EAF2FF] font-semibold max-w-2xl mx-auto">
              Chegou o dia de decidir o futuro da nossa Academia. Participa e vota Lista A — Fazemos Acontecer!
            </p>
          </div>
        )}

        {phase === 'after' && (
          <div className="text-center py-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06112E]/50 border border-[#EAF2FF]/20 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-[#2478FF]" />
              <span>Lista A — Fazemos Acontecer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Obrigado a todos os estudantes!
            </h2>
            <p className="text-base sm:text-lg text-[#EAF2FF] font-medium max-w-2xl mx-auto">
              Agradecemos a cada estudante que participou, debateu e fez parte desta caminhada connosco na Universidade do Minho.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
