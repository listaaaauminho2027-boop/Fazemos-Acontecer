import DepartmentSection, { TeamMember } from '@/components/DepartmentSection';
import { Users } from 'lucide-react';

interface DepartmentData {
  id: string;
  title: string;
  members: TeamMember[];
}

const DEPARTMENTS: DepartmentData[] = [
  {
    id: 'presidencia',
    title: 'Presidência',
    members: [
      { id: 'pres-1', role: 'Presidente', isLeader: true },
      { id: 'pres-2', role: 'Presidente-Adjunto Interno' },
      { id: 'pres-3', role: 'Presidente-Adjunta Externa' },
      { id: 'pres-4', role: 'Tesoureiro' },
      { id: 'pres-5', role: 'Tesoureiro-Adjunto' },
      { id: 'pres-6', role: 'Secretário Direção' },
    ],
  },
  {
    id: 'acao-educativa',
    title: 'Ação Educativa e Associativismo',
    members: [
      { id: 'ae-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'ae-2', role: 'Núcleos' },
      { id: 'ae-3', role: 'Internacionalização' },
      { id: 'ae-4', role: '2.º e 3.º ciclos' },
    ],
  },
  {
    id: 'administracao',
    title: 'Administração',
    members: [
      { id: 'adm-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'adm-2', role: 'Logística e Infraestrutura' },
      { id: 'adm-3', role: 'Operações' },
      { id: 'adm-4', role: 'Recursos Humanos' },
    ],
  },
  {
    id: 'comunicacao',
    title: 'Comunicação',
    members: [
      { id: 'com-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'com-2', role: 'Diretor' },
      { id: 'com-3', role: 'Diretor' },
    ],
  },
  {
    id: 'cultural',
    title: 'Cultural e Tradições Académicas',
    members: [
      { id: 'cult-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'cult-2', role: 'Cultura' },
      { id: 'cult-3', role: 'Grupos Culturais' },
      { id: 'cult-4', role: 'Tradições Académicas' },
    ],
  },
  {
    id: 'carreiras',
    title: 'Desenvolvimento de Carreiras',
    members: [
      { id: 'car-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'car-2', role: 'Emprego' },
      { id: 'car-3', role: 'Formação' },
    ],
  },
  {
    id: 'desportivo',
    title: 'Desportivo',
    members: [
      { id: 'desp-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'desp-2', role: 'Diretor' },
      { id: 'desp-3', role: 'Diretor' },
      { id: 'desp-4', role: 'Diretor' },
    ],
  },
  {
    id: 'recreativo',
    title: 'Recreativo',
    members: [
      { id: 'rec-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'rec-2', role: 'Diretor' },
      { id: 'rec-3', role: 'Diretor' },
    ],
  },
  {
    id: 'social',
    title: 'Social',
    members: [
      { id: 'soc-1', role: 'Vice-Presidente', isLeader: true },
      { id: 'soc-2', role: 'Sociedade' },
      { id: 'soc-3', role: 'Voluntariado' },
      { id: 'soc-4', role: 'Inclusão + Sustentabilidade' },
    ],
  },
];

export default function EquipaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. CABEÇALHO DA PÁGINA */}
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

          {/* Atalhos de navegação rápida para os 9 Departamentos */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3">
              Navegar por Departamento:
            </p>
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <a
                  key={dept.id}
                  href={`#${dept.id}`}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#168BFF] text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  {dept.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECÇÕES DOS 9 DEPARTAMENTOS (35 CARTÕES NO TOTAL) */}
      <div>
        {DEPARTMENTS.map((dept, idx) => (
          <DepartmentSection
            key={dept.id}
            id={dept.id}
            index={idx + 1}
            title={dept.title}
            members={dept.members}
            alternateBg={idx % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
