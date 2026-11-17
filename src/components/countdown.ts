'use client';

import { CalendarClock } from 'lucide-react';

export default function Countdown() {
  const timeUnits = [
    { label: 'Dias', value: '00' },
    { label: 'Horas', value: '00' },
    { label: 'Minutos', value: '00' },
    { label: 'Segundos', value: '00' },
  ];

  return (
    <section className="bg-[#0759B5] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#E8F3FF] font-bold text-sm uppercase tracking-wider">
              <CalendarClock className="w-5 h-5" />
              <span>Contagem Decrescente</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Rumo às Eleições da AAUMinho
            </h2>
            <p className="text-sm text-[#E8F3FF]/90">
              [PLACEHOLDER: Data oficial do ato eleitoral a configurar na próxima etapa]
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-5 w-full max-w-md">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-4 text-center"
              >
                <span className="block text-3xl sm:text-4xl font-extrabold text-white">
                  {unit.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8F3FF] mt-1 block">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}