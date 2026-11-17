import { User } from 'lucide-react';

interface TeamCardProps {
  index: number;
  name?: string;
  role?: string;
  department?: string;
}

export default function TeamCard({
  index,
  name = `[Nome Dirigente #${index}]`,
  role = '[Cargo / Função]',
  department = '[Departamento]',
}: TeamCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-[#F1F3F6] overflow-hidden shadow-xs hover:shadow-md hover:border-[#168BFF] transition-all">
      {/* Placeholder Fotografia */}
      <div className="aspect-square bg-[#E8F3FF] relative flex flex-col items-center justify-center p-4 text-center">
        <div className="w-16 h-16 rounded-full bg-white text-[#168BFF] flex items-center justify-center mb-2 shadow-xs">
          <User className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold text-[#0759B5] uppercase tracking-wider">
          Foto #{index}
        </span>
      </div>

      {/* Informação */}
      <div className="p-5">
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#168BFF] bg-[#E8F3FF] px-2.5 py-1 rounded-md mb-2">
          {department}
        </span>
        <h3 className="font-extrabold text-lg text-[#20232B] leading-snug">
          {name}
        </h3>
        <p className="text-sm text-gray-600 font-medium mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}