'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-white hover:bg-[#EAF2FF] text-[#06112E] shadow-xl shadow-black/40 border border-[#EAF2FF]/40 flex items-center justify-center transition-all hover:-translate-y-0.5 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
