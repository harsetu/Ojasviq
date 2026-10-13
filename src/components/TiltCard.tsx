import { useRef, type PointerEvent, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
}

// A card that tilts in 3D toward the cursor, with a moving glare and glowing border.
// Children can use the `tilt-layer-*` classes to float at different depths.
export default function TiltCard({ children, className = '', max = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number>();

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="tilt-scene h-full">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={`tilt-card group relative h-full rounded-2xl ${className}`}
      >
        <span className="tilt-border" aria-hidden />
        <span className="tilt-glare" aria-hidden />
        {children}
      </div>
    </div>
  );
}
