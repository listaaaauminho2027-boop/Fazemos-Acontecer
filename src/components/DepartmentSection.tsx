import TeamCard from '@/components/TeamCard';

export interface TeamMember {
  id: string;
  role: string;
  name?: string;
  isLeader?: boolean;
  imageUrl?: string;
}

export interface DepartmentSectionProps {
  id: string;
  index: number;
  title: string;
  members: TeamMember[];
  alternateBg?: boolean;
}

export default function DepartmentSection({
  id,
  index,
  title,
  members,
  alternateBg = false,
}: DepartmentSectionProps) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-16 scroll-mt-24 border-b border-gray-200/70 ${
        alternateBg ? 'bg-[#F1F3F6]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho do Departamento */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b-2 border-[#168BFF]/20">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#168BFF]">
              <span className="px-2 py-0.5 rounded bg-[#E8F3FF] text-[#0759B5]">
                0{index}
              </span>
              <span>Departamento</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#20232B] tracking-tight">
              {title}
            </h2>
          </div>

          <span className="inline-flex items-center self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#E8F3FF] text-[#0759B5] text-xs font-extrabold uppercase tracking-wider">
            {members.length} {members.length === 1 ? 'Membro' : 'Membros'}
          </span>
        </div>

        {/* Grelha de Cartões Individuais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {members.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              department={title}
              isLeader={member.isLeader}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
