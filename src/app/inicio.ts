import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import { Megaphone, Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Principal */}
      <Hero />

      {/* 2. Contagem Decrescente */}
      <Countdown />

      {/* 3. Comunicação / Destaques da Candidatura */}
      <section className="py-20 bg-[#F1F3F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#168BFF] mb-2">
                <Megaphone className="w-4 h-4" />
                Comunicação & Atualidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20232B]">
                A Voz dos Estudantes
              </h2>
            </div>
            <Link
              href="/agenda"
              className="text-sm font-bold text-[#0759B5] hover:text-[#168BFF] inline-flex items-center gap-1"
            >
              Ver toda a agenda <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 border border-gray-200/70 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video rounded-xl bg-[#E8F3FF] flex items-center justify-center text-xs font-bold text-[#0759B5] mb-5">
                    [PLACEHOLDER: Imagem Comunicado #{item}]
                  </div>
                  <span className="text-xs font-bold text-[#168BFF] uppercase">
                    [Data / Categoria]
                  </span>
                  <h3 className="text-xl font-extrabold text-[#20232B] mt-1 mb-2">
                    [Título do Comunicado ou Destaque #{item}]
                  </h3>
                  <p className="text-sm text-gray-600">
                    [PLACEHOLDER: Resumo breve da publicação ou novidade oficial da Lista A.]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Secção Instagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E8F3FF] rounded-3xl p-8 sm:p-12 border border-[#168BFF]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-[#0759B5] font-extrabold text-sm uppercase tracking-wider">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram Oficial</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20232B]">
                  Acompanha tudo no @aproximarfuturos
                </h2>
              </div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#168BFF] hover:bg-[#0759B5] text-white font-bold px-6 py-3.5 rounded-xl transition-colors shrink-0"
              >
                <span>Seguir no Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Grelha Placeholder para Feed Instagram */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((post) => (
                <div
                  key={post}
                  className="aspect-square rounded-2xl bg-white border border-[#168BFF]/20 flex flex-col items-center justify-center p-4 text-center"
                >
                  <Instagram className="w-7 h-7 text-[#168BFF] mb-2" />
                  <span className="text-xs font-bold text-[#20232B]">
                    [Post Instagram #{post}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}