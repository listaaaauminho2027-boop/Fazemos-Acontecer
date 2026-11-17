import { User, Award } from 'lucide-react';

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
  isLeader = false,
  imageUrl,
}: TeamCardProps) {
  return (
    <article
      className={`group rounded-2xl overflow-hidden transition-all flex flex-col justify-between ${
        isLeader
          ? 'bg-gradient-to-b from-[#E8F3FF] to-white border-2 border-[#168BFF] shadow-md hover:shadow-lg'
          : 'bg-white border border-gray-200/80 shadow-xs hover:border-[#168BFF] hover:shadow-md'
      }`}
    >
      <div>
        {/* Área de Fotografia / Imagem de Perfil */}
        <div
          className={`aspect-[4/4] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center ${
            isLeader ? 'bg-[#168BFF]/10' : 'bg-[#F1F3F6]'
          }`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${name} — ${role}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <>
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-xs transition-transform group-hover:scale-105 ${
                  isLeader
                    ? 'bg-[#168BFF] text-white'
                    : 'bg-white text-[#168BFF]'
                }`}
              >
                <User className="w-10 h-10" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                Fotografia a adicionar
              </span>
            </>
          )}

          {/* Distintivo visual para Presidente / Vice-Presidente */}
          {isLeader && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#168BFF] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Responsável</span>
            </div>
          )}
        </div>

        {/* Informação do Membro */}
        <div className="p-5 sm:p-6 space-y-2">
          <span
            className={`inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md ${
              isLeader
                ? 'bg-[#168BFF] text-white'
                : 'bg-[#E8F3FF] text-[#0759B5]'
            }`}
          >
            {role}
          </span>

          <h3 className="text-lg sm:text-xl font-extrabold text-[#20232B] leading-snug pt-0.5">
            {name}
          </h3>
        </div>
      </div>

      {/* Departamento no rodapé do cartão */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-gray-100">
        <p className="text-xs font-bold text-gray-500 truncate">
          {department}
        </p>
      </div>
    </article>
  );
}
    </div>
  );
}
