import TeamCard from '@/components/TeamCard';
import siteContent from '@/data/siteContent.json';
import { Users } from 'lucide-react';

export default function EquipaPage() {
  return (
    <div className="min-h-screen bg-[#06112E]">
      <section className="relative bg-gradient-to-br from-[#06112E] via-[#081B46] to-[#0B2868] text-white py-16 lg:py-24 overflow-hidden border-b border-[#EAF2FF]/12">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2478FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#155CEB]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#155CEB]/25 text-[#EAF2FF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#2478FF]/40">
            <Users className="w-4 h-4 text-[#2478FF]" />
            <span>35 Estudantes • 9 Departamentos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            A Nossa Equipa
          </h1>

          <p className="text-[#EAF2FF]/85 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            Conhece os 35 dirigentes da candidatura Lista A — Fazemos Acontecer. Uma equipa dedicada, próxima e preparada para representar todos os estudantes da Universidade do Minho.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-mesh-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {siteContent.team.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                department={member.department}
                imageUrl={member.imageUrl || undefined}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
