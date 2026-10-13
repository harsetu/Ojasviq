import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface PointItemProps {
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
  /** "sm" is a compact bullet for dense lists (policy pages, cards). */
  size?: 'md' | 'sm';
}

// A paragraph-style point with a small animated icon badge in front of it.
export default function PointItem({ icon: Icon, children, className = '', size = 'md' }: PointItemProps) {
  const sm = size === 'sm';
  return (
    <div className={`point-item group flex items-start ${sm ? 'gap-3' : 'gap-4'} text-left ${className}`}>
      <span className={`point-icon shrink-0 ${sm ? 'mt-[3px]' : 'mt-1'}`}>
        <span
          className={`point-badge ${sm ? 'w-6 h-6 rounded-md' : 'w-8 h-8 rounded-lg'} bg-gradient-to-br from-gold-500/25 to-gold-500/5 border border-gold-500/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-gold-400/60 group-hover:shadow-[0_0_16px_rgba(212,168,58,0.35)]`}
        >
          <Icon size={sm ? 12 : 15} className="text-gold-400" />
        </span>
      </span>
      <p
        className={`${sm ? 'text-navy-100 text-[15px] leading-relaxed' : 'body-text'} transition-all duration-300 group-hover:text-white group-hover:translate-x-1`}
      >
        {children}
      </p>
    </div>
  );
}
