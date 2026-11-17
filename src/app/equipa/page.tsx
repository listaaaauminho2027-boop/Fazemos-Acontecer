import TeamCard from '@/components/TeamCard';
import { Users } from 'lucide-react';

interface TeamMember {
  id: string;
  role: string;
  department: string;
  name?: string;
  isLeader?: boolean;
  imageUrl?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  // PRESIDÊNCIA (6)
  { id: 'pres-1', role: 'Presidente', department: 'Presidência', isLeader: true },
  { id: 'pres-2', role: 'Presidente-Adjunto Interno', department: 'Presidência' },
  { id: 'pres-3', role: 'Presidente-Adjunta Externa', department: 'Presidência' },
  { id: 'pres-4', role: 'Tesoureiro', department: 'Presidência' },
  { id: 'pres-5', role: 'Tesoureiro-Adjunto', department: 'Presidência' },
  { id: 'pres-6', role: 'Secretário Direção', department: 'Presidência' },

  // AÇÃO EDUCATIVA E ASSOCIATIVISMO (4)
  { id: 'ae-1', role: 'Vice-Presidente', department: 'Ação Educativa e Associativismo', isLeader: true },
  { id: 'ae-2', role: 'Núcleos', department: 'Ação Educativa e Associativismo' },
  { id: 'ae-3', role: 'Internacionalização', department: 'Ação Educativa e Associativismo' },
  { id: 'ae-4', role: '2.º e 3.º ciclos', department: 'Ação Educativa e Associativismo' },

  // ADMINISTRAÇÃO (4)
  { id: 'adm-1', role: 'Vice-Presidente', department: 'Administração', isLeader: true },
  { id: 'adm-2', role: 'Logística e Infraestrutura', department: 'Administração' },
  { id: 'adm-3', role: 'Operações', department: 'Administração' },
  { id: 'adm-4', role: 'Recursos Humanos', department: 'Administração' },

  // COMUNICAÇÃO (3)
  { id: 'com-1', role: 'Vice-Presidente', department: 'Comunicação', isLeader: true },
  { id: 'com-2', role: 'Diretor', department: 'Comunicação' },
  { id: 'com-3', role: 'Diretor', department: 'Comunicação' },

  // CULTURAL E TRADIÇÕES ACADÉMICAS (4)
  { id: 'cult-1', role: 'Vice-Presidente', department: 'Cultural e Tradições Académicas', isLeader: true },
  { id: 'cult-2', role: 'Cultura', department: 'Cultural e Tradições Académicas' },
  { id: 'cult-3', role: 'Grupos Culturais', department: 'Cultural e Tradições Académicas' },
  { id: 'cult-4', role: 'Tradições Académicas', department: 'Cultural e Tradições Académicas' },

  // DESENVOLVIMENTO DE CARREIRAS (3)
  { id: 'car-1', role: 'Vice-Presidente', department: 'Desenvolvimento de Carreiras', isLeader: true },
  { id: 'car-2', role: 'Emprego', department: 'Desenvolvimento de Carreiras' },
  { id: 'car-3', role: 'Formação', department: 'Desenvolvimento de Carreiras' },

  // DESPORTIVO (4)
  { id: 'desp-1', role: 'Vice-Presidente', department: 'Desportivo', isLeader: true },
  { id: 'desp-2', role: 'Diretor', department: 'Desportivo' },
  { id: 'desp-3', role: 'Diretor', department: 'Desportivo' },
  { id: 'desp-4', role: 'Diretor', department: 'Desportivo' },

  // RECREATIVO (3)
  { id: 'rec-1', role: 'Vice-Presidente', department: 'Recreativo', isLeader: true },
  { id: 'rec-2', role: 'Diretor', department: 'Recreativo' },
  { id: 'rec-3', role: 'Diretor', department: 'Recreativo' },

  // SOCIAL (4)
  { id: 'soc-1', role: 'Vice-Presidente', department: 'Social', isLeader: true },
  { id: 'soc-2', role: 'Sociedade', department: 'Social' },
  { id: 'soc-3', role: 'Voluntariado', department: 'Social' },
  { id: 'soc-4', role: 'Inclusão + Sustentabilidade', department: 'Social' },
];

export default function EquipaPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F6]">
      {/* CABEÇALHO DA PÁGINA */}
      <section className="relative bg-[#20232B] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#168BFF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#0759B5]/30 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#168BFF]/20 text-[#168BFF] font-extrabold text-xs uppercase tracking-wider mb-5 border border-[#168BFF]/30">
            <Users className="w-4 h-4" />
            <span>35 Estudantes • 9 Departamentos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            A Nossa Equipa
          </h1>

          <p className="text-gray-300 mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
            Conhece os 35 dirigentes da candidatura Lista A — Aproximar Futuros. Uma equipa dedicada, próxima e preparada para representar todos os estudantes da Universidade do Minho.
          </p>
        </div>
      </section>

      {/* GRELHA ÚNICA COM OS 35 MEMBROS */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                department={member.department}
                isLeader={member.isLeader}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
