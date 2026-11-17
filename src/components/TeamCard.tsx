import { User } from 'lucide-react';

export interface TeamCardProps {
  name?: string;
  role: string;
  department: string;
  isLeader?: boolean;
  imageUrl?: string;
}

export default function TeamCard({
  name = 'Nome a adicionar',
  role,
  department,
  imageUrl,
}: TeamCardProps) {
  return (
    <article className="card-immersive group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Área de Fotografia / Imagem de Perfil */}
        <div className="aspect-[4/4] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0B2868]/70 to-[#06112E]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${name} — ${role}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-md transition-transform group-hover:scale-105 bg-[#155CEB]/25 border border-[#2478FF]/40 text-white">
                <User className="w-10 h-10 text-[#EAF2FF]" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EAF2FF]/65">
                Fotografia a adicionar
              </span>
            </>
          )}
        </div>

        {/* Informação do Membro */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#155CEB]/25 text-[#EAF2FF] border border-[#2478FF]/35">
            {role}
          </span>

          <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug pt-0.5">
            {name}
          </h3>
        </div>
      </div>

      {/* Departamento no rodapé do cartão */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#EAF2FF]/12 bg-[#06112E]/40">
        <p className="text-xs font-extrabold text-[#2478FF] tracking-wide">
          {department}
        </p>
      </div>
    </article>
  );
}
