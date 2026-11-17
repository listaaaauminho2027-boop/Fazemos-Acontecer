'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#168BFF] hover:bg-[#0759B5] text-white shadow-lg transition-all hover:scale-105 cursor-pointer"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
