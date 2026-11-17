import { HelpCircle, CheckSquare } from 'lucide-react';

export default function ComoVotarPage() {
  // Seis cartões explicativos
  const passos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Cabeçalho e Introdução */}
      <section className="bg-[#E8F3FF] py-16 border-b border-[#168BFF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168BFF] text-white font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            Guia do Eleitor
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#20232B] tracking-tight">
            Como Votar
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl text-lg font-medium">
            [PLACEHOLDER: Introdução explicativa sobre a importância do voto estudantil e como funciona o processo eleitoral na Universidade do Minho.]
          </p>
        </div>
      </section>

      {/* Seis Cartões Explicativos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {passos.map((num) => (
            <div
              key={num}
              className="bg-[#F1F3F6] rounded-2xl p-7 border border-transparent hover:border-[#168BFF] hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-[#168BFF] text-white font-extrabold text-lg flex items-center justify-center">
                  {num}
                </span>
                <CheckSquare className="w-5 h-5 text-[#0759B5]" />
              </div>

              <h3 className="text-xl font-extrabold text-[#20232B] mb-2">
                [Passo / Informação #{num}]
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                [PLACEHOLDER: Explicação clara sobre requisitos, horários, mesas de voto ou procedimentos eleitorais.]
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
