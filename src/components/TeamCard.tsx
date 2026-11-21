import { User } from 'lucide-react';

interface TeamCardProps {
  name?: string;
  role: string;
  department: string;
  imageUrl?: string;
  isLeader?: boolean;
}

export default function TeamCard({
  name = 'Nome a adicionar',
  role,
  department,
  imageUrl,
}: TeamCardProps) {
  return (
    <article className="card-immersive rounded-3xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5">
      {/* Zona da Fotografia — preenche 100% da largura sem barras laterais */}
      <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#0B2868] to-[#06112E] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name} — ${role}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#155CEB]/25 border border-[#2478FF]/40 flex items-center justify-center mb-3">
              <User className="w-8 h-8 text-[#EAF2FF]/75" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#EAF2FF]/50">
              Fotografia
            </span>
          </div>
        )}
      </div>

      {/* Informação do Membro */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#155CEB]/25 border border-[#2478FF]/45 text-[#EAF2FF] text-xs font-extrabold uppercase tracking-wider">
            {role}
          </span>

          <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
            {name}
          </h3>
        </div>

        <div className="pt-4 border-t border-[#EAF2FF]/12">
          <p className="text-sm font-bold text-[#2478FF]">{department}</p>
        </div>
      </div>
    </article>
  );
}
